import { Container, Row, Col } from "react-bootstrap";

import { serviesList } from "../data";

const ServicePage = () => {
  return (
    <div className="service-page">
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
          <Row>
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

export default ServicePage;
