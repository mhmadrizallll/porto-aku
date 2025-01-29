import { Col, Container, Row } from "react-bootstrap";
import { portofolioList } from "../data/index";

const PortofolioPage = () => {
  return (
    <div className="portofolio-page">
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
                <button className="download-btn">See All Porto</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PortofolioPage;
