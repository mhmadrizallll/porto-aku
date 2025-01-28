import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { navLinks } from "../data/index.ts";
import { NavLink } from "react-router"; // Corrected import
import HireMeComponent from "./HireMeComponent.tsx";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundColor);
    return () => window.removeEventListener("scroll", changeBackgroundColor);
  }, []);

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold logo">
            OppSS
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="navbar-toggler-custom"
          >
            <span className="hamburger-icon">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="d-none d-lg-flex justify-content-between w-100"
          >
            <Nav className="mx-auto">
              {navLinks.map((link) => (
                <Nav.Link key={link.id} as={NavLink} to={link.path}>
                  {link.text}
                </Nav.Link>
              ))}
            </Nav>
            <HireMeComponent />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>
          &times;
        </button>
        <Nav className="flex-column">
          {navLinks.map((link) => (
            <div className="nav-link" key={link.id}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                end
                to={link.path}
              >
                {link.text}
              </NavLink>
            </div>
          ))}
        </Nav>

        <div className="mt-3 text-center w-100">
          <HireMeComponent />
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
