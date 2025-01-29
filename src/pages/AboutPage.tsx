import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.jpg";
import { skillList } from "../data/index";
import ContactPage from "./ContactPage";
import { motion } from "framer-motion";

import cvFile from "../assets/cv.pdf";
const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about">
        <Container>
          <Row>
            <Col
              className="text-center"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <h1 className="fw-bold">About Me</h1>
              <p style={{ letterSpacing: "1px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Col>
          </Row>
          <Row className="d-flex align-items-center gap-3">
            <Col
              lg="6"
              className="text-lg-end text-center"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img src={HeroImage} alt="hero-lagi" />
            </Col>
            <Col
              lg="5"
              className="text-lg-start text-center"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <p>
                A software engineer, the modern-day architect of digital realms,
                navigates the ethereal landscapes of code, sculpting intangible
                structures that shape our technological world. With fingers
                poised over keyboards like virtuoso pianists, they compose
                symphonies of logic, their minds a labyrinth of algorithms and
                solutions.Their canvas is a screen, a vast expanse where lines
                of code dance in intricate patterns, weaving the fabric of
                programs and applications. Each keystroke is a brushstroke,
                crafting intricate architectures and breathing life into
                innovative designs.In this digital atelier, they don the mantle
                of problem solvers, confronting bugs and glitches like valiant
                knights in an ever-evolving quest for perfection. Debugging
                becomes a noble pursuit, unraveling the mysteries hidden within
                the tangled webs of code. designs.In this digital atelier.
              </p>
              <div className="button">
                <motion.a
                  href={cvFile} // Menggunakan path dari import
                  download="cv.pdf" // Nama file yang akan diunduh
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ textDecoration: "none" }} // Menghilangkan underline jika ingin
                >
                  <button className="hireme-btn">
                    <i
                      className="fa-solid fa-download"
                      style={{
                        marginRight: "5px",
                        backgroundColor: "transparent",
                      }}
                    ></i>
                    Download CV
                  </button>
                </motion.a>
              </div>
            </Col>
          </Row>
          <Row>
            {skillList.map((skill) => (
              <Col
                className="d-flex flex-column align-items-center justify-content-center"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="circle">
                  <i className={skill.icon} style={{ fontSize: "2.4rem" }}></i>
                </div>
                <div className="text-center">
                  <p className="m-0 mt-3">{skill.percen}%</p>
                  <p className="m-0">{skill.title}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <ContactPage />
    </div>
  );
};

export default AboutPage;
