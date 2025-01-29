import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router";

import { sosmedList } from "../data";
const FooterComponent = () => {
  return (
    <div className="footer py-5" style={{ backgroundColor: "black" }}>
      <Container style={{ background: "transparent" }}>
        <Row style={{ background: "transparent" }}>
          <Col style={{ background: "transparent" }}>
            <h1>OppSS</h1>
          </Col>
        </Row>
        <Row style={{ background: "transparent" }}>
          <Col className="py-4" style={{ background: "transparent" }}>
            <Link to="">Home</Link>
            <Link to="service">Service</Link>
            <Link to="about">About Me</Link>
            <Link to="portofolio">Portofolio</Link>
            <Link to="contact">Contact Me</Link>
          </Col>
        </Row>
        <Row style={{ background: "transparent" }}>
          <Col style={{ background: "transparent" }}>
            <div
              className="logos d-flex gap-2 py-3"
              style={{ background: "transparent" }}
            >
              {sosmedList.map((sosmed) => (
                <div className="logo-item" key={sosmed.id}>
                  <Link
                    to={sosmed.link}
                    className="text-decoration-none"
                    style={{ background: "transparent" }}
                  >
                    <i className={sosmed.icon}></i>
                  </Link>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="py-3" style={{ background: "transparent" }}>
          <Col
            className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-2 gap-sm-3"
            style={{ background: "transparent" }}
          >
            <div
              className="d-flex align-items-center justify-content-center gap-3"
              style={{ background: "transparent" }}
            >
              <i className="fa-regular fa-envelope"></i>
              <p className="m-0">kenshhh@gmail.com</p>
            </div>
            <div
              className="d-flex align-items-center justify-content-center gap-3"
              style={{ background: "transparent" }}
            >
              <i className="fa-solid fa-phone"></i>
              <p className="m-0">0123456789</p>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p>@2023 OppSS All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
