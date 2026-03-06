import { Container, Row, Col, Form } from "react-bootstrap";
import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_hhz48ki", // ganti service id
        "template_3lhl18n", // ganti template id
        form.current,
        "E1fY8zf0RCd83LpLT" // ganti public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset();
          setLoading(false);
        },
        () => {
          alert("Failed to send message");
          setLoading(false);
        }
      );
  };

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

          <Form ref={form} onSubmit={sendEmail}>
            <Row className="row-2">
              <Col lg="6" className="py-lg-5 py-0">
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="inputan"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="number"
                    name="number"
                    placeholder="Number"
                    className="inputan"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    type="date"
                    name="date"
                    className="inputan-date"
                    required
                  />
                </Form.Group>
              </Col>

              <Col lg="6" className="py-lg-5 py-0">
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="inputan"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Select
                    name="service"
                    aria-label="Default select example"
                    className="inputan"
                    required
                  >
                    <option value="">Service of Attack</option>
                    <option value="Consultan Tools IT">
                      Consultan Tools IT
                    </option>
                    <option value="Web Development">
                      Web Development
                    </option>
                    <option value="Software Development">
                      Software Development
                    </option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    placeholder="Project Description"
                    className="inputan"
                    required
                  />
                </Form.Group>

                <div className="text-end">
                  <button
                    type="submit"
                    className="download-btn"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Submit"}
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