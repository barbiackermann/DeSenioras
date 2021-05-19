import "./Footer.css";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Row>
        <Col md={4}>
          <img src="" alt="" />
          <a href=""></a>
        </Col>
        <Col md={4}>
          <h6>comunicaciondesenioras@gmail.com</h6>
          <p>
            deSeñoras <i className="far fa-copyright"></i> 2021
          </p>
        </Col>
        <Col md={4}>
          <a className="" href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a className="" href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="" href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="" href="#">
            <i className="fab fa-whatsapp"></i>
          </a>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
