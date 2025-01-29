import { Container, Row, Col, Form } from "react-bootstrap";
import HireMeComponent from "../components/HireMeComponent";

import HeroImage from "../assets/img/hero.jpg";
import cvFile from "../assets/cv.pdf";

import { motion } from "framer-motion";

import { useNavigate } from "react-router";

const text = "Hi   I'am";

import {
  portofolioList,
  serviesList,
  skillList,
  sosmedList,
} from "../data/index";
import { Link } from "react-router";

const HomePage = () => {
  let navigate = useNavigate();
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              {/* Animasi hanya untuk "Hi I'am" */}
              <div className="d-flex justify-content-center justify-content-sm-start">
                <h4 style={{ display: "flex", overflow: "hidden" }}>
                  {text.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ x: -50, y: -50, opacity: 0 }} // Mulai dari kiri atas
                      animate={{ x: 0, y: 0, opacity: 1 }} // Masuk ke tempatnya
                      transition={{
                        delay: index * 0.2, // Delay antar huruf
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        repeat: Infinity, // Infinite loop
                        repeatType: "reverse",
                        repeatDelay: 1, // Jeda sebelum mengulang
                      }}
                      style={{ display: "inline-block" }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </h4>
              </div>

              {/* Teks lain tanpa animasi */}
              <h3 className="animate__animated animate__lightSpeedInLeft animate__delay-0.9s">
                Muhammad Rizal
              </h3>
              <h1 className="animate__animated animate__lightSpeedInRight animate__delay-0.9s">
                IT Support & Web Developer
              </h1>

              <motion.div
                className="logos d-flex gap-2 py-3"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.2 } }, // Delay antar logo 0.2 detik
                }}
              >
                {sosmedList.map((sosmed) => (
                  <Link
                    to={sosmed.link}
                    key={sosmed.id}
                    style={{ textDecoration: "none" }}
                  >
                    <motion.div
                      className="logo-item"
                      variants={{
                        hidden: { x: -50, opacity: 0 }, // Mulai dari kiri & transparan
                        visible: { x: 0, opacity: 1 }, // Muncul ke posisi normal
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }} // Durasi tiap logo 0.5 detik
                    >
                      <i className={sosmed.icon}></i>
                    </motion.div>
                  </Link>
                ))}
              </motion.div>

              <div className="d-flex align-items-center justify-content-center justify-content-sm-start gap-3 py-3">
                {/* Hire Me dari kiri */}
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <HireMeComponent onClick={() => navigate("/contact")} />
                </motion.div>

                {/* Download CV dari kanan */}
                <motion.a
                  href={cvFile} // Ganti dengan path file yang ingin diunduh
                  download="cv.pdf" // Nama file yang akan diunduh
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{ textDecoration: "none" }} // Hilangkan underline jika ingin
                >
                  <button className="download-btn">Download CV</button>
                </motion.a>
              </div>

              <motion.div
                className="d-flex flex-wrap gap-4 py-3 experience-box"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.2 } }, // Jeda 0.2 detik antar elemen
                }}
              >
                {[
                  { id: 1, value: "1+", label: "Experiences" },
                  { id: 2, value: "20+", label: "Projects" },
                  { id: 3, value: "Good+", label: "Communication" },
                ].map((item) => (
                  <motion.div
                    key={item.id}
                    className="experience col-12 col-sm-3"
                    variants={{
                      hidden: { y: 50, opacity: 0 }, // Mulai dari bawah & transparan
                      visible: { y: 0, opacity: 1 }, // Muncul ke posisi normal
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }} // Durasi 0.5 detik per elemen
                  >
                    <p>{item.value}</p>
                    <p>{item.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </Col>
            <Col
              lg="6"
              className="mt-3 mt-lg-0 text-center animate__animated animate__zoomIn animate__delay-0.7s"
            >
              <img src={HeroImage} alt="" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="service w-100 min-vh-100">
        <Container>
          <Row>
            <Col
              className="text-center"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <h1 className="fw-bold">Service</h1>
              <p style={{ letterSpacing: "1px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Col>
          </Row>
          <Row>
            {serviesList.map((service) => (
              <Col
                className="service-box"
                key={service.id}
                data-aos={service.nameAos}
                data-aos-duration={service.delay}
              >
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
      <div className="portofolio">
        <Container>
          <Row>
            <Col
              className="text-center"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <h1 className="fw-bold">Portofolio</h1>
              <p style={{ letterSpacing: "1px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Col>
          </Row>
          <Row>
            {portofolioList.map((portofolio) => (
              <Col
                key={portofolio.id}
                data-aos={portofolio.nameAos}
                data-aos-duration="1000"
              >
                <div>
                  <img src={portofolio.image} alt="" />
                </div>
                <div className="d-flex justify-content-between align-items-center p-3">
                  <h3 className="m-0">{portofolio.title}</h3>
                  <p className="m-0">{portofolio.category}</p>
                </div>
              </Col>
            ))}
          </Row>
          <Row>
            <Col>
              <div className="py-5">
                <button
                  className="download-btn"
                  onClick={() => navigate("/portofolio")}
                >
                  See All Porto
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="contact">
        <Container>
          <Row>
            <Col
              className="text-center"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <h1 className="fw-bold">Contact Me</h1>
              <p style={{ letterSpacing: "1px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Col>
          </Row>
          <Form>
            <Row className="row-2">
              <Col lg="6" className="py-lg-5 py-0">
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    className="inputan"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="number"
                    placeholder="Number"
                    className="inputan"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="date" className="inputan-date" />
                </Form.Group>
              </Col>
              <Col lg="6" className="py-lg-5 py-0">
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className="inputan"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Select
                    aria-label="Default select example"
                    className="inputan"
                  >
                    <option>Service of Attack</option>
                    <option value="1">Consultan Tools IT</option>
                    <option value="2">Web Development</option>
                    <option value="3">Software Development</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Project Description"
                    className="inputan"
                  />
                </Form.Group>
                <div className="text-end">
                  <button type="submit" className="download-btn">
                    Submit
                  </button>
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
