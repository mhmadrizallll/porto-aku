import { Container, Row, Col } from "react-bootstrap";
import HireMeComponent from "../components/HireMeComponent";

import HeroImage from "../assets/img/hero.jpg";
import DownloadCvComponent from "../components/DownloadCvComponent";

import { serviesList } from "../data/index";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-centern">
            <Col lg="6">
              <h4>Hi I'am</h4>
              <h3>Muhammad Rizal</h3>
              <h1>IT Support & Web Developer</h1>
              <div className="logos d-flex gap-2 py-3">
                <div className="logo-item">
                  <i className="fa-brands fa-linkedin"></i>
                </div>
                <div className="logo-item">
                  <i className="fa-brands fa-github"></i>
                </div>
                <div className="logo-item">
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div className="logo-item">
                  <i className="fa-brands fa-facebook"></i>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center justify-content-sm-start gap-3 py-3">
                <HireMeComponent />
                <DownloadCvComponent />
              </div>
              <div className="d-flex flex-wrap gap-4 py-3 experience-box">
                <div className="experience col-12 col-sm-3">
                  <p>1+</p>
                  <p>Experiences</p>
                </div>
                <div className="experience col-12 col-sm-3">
                  <p>20+</p>
                  <p>Projects</p>
                </div>
                <div className="experience col-12 col-sm-3">
                  <p>11+</p>
                  <p>Happy Clients</p>
                </div>
              </div>
            </Col>
            <Col lg="6" className="mt-3 mt-lg-0">
              <img src={HeroImage} alt="" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="service w-100 min-vh-100">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="fw-bold">Service</h1>
              <p style={{ letterSpacing: "1px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Col>
          </Row>
          <Row className="p-sm-0 p-3">
            {serviesList.map((service) => (
              <Col className="service-box" key={service.id}>
                <div className="py-3">
                  <i className={service.icon}></i>
                </div>
                <h3 className="pb-3">{service.title}</h3>
                <p>{service.description}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
