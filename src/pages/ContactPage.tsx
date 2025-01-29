import { Container, Row, Col, Form } from "react-bootstrap";

const ContactPage = () => {
  return (
    <div className="contact-page">
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

export default ContactPage;
