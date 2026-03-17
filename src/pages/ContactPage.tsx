import { Container, Row, Col, Form } from "react-bootstrap";
import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_1vhgu2f", // ganti service id
        "template_3lhl18n", // ganti template id
        form.current,
        "E1fY8zf0RCd83LpLT" // ganti public key
      )
      .then(
    () => {
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light", // bisa diganti "dark" kalau dark mode
      });
      form.current?.reset();
      setLoading(false);
    },
    () => {
      toast.error("Failed to send message", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
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
                  <Flatpickr
                  type="date"
                  name="date"
                  className="inputan"
                  options={{
                    dateFormat: "Y-m-d"
                  }}
                  placeholder="Select Date"
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
                    className="inputan select"
                    required
                  >
                    <option value="">Select Service</option>
                    <option value="Consultan Tools IT">Consultan Tools IT</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Software Development">Software Development</option>
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
      <ToastContainer />
    </div>
  );
};

export default ContactPage;