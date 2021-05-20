import "./Footer.css";
import { Row, Col } from "react-bootstrap";
import Sfooter from "./../IMG/Sfooter.png";

const Footer = () => {
  return (
    <>
      <Row className="footer">
        <Col md={4} className="align-self-center">
          <img src={Sfooter} fluid className="miss" alt="footer-image"></img>
        </Col>
        <Col md={4} className="align-self-center contact">
          <h4>comunicaciondesenioras@gmail.com</h4>
          <p>
            deSeñoras <i className="far fa-copyright"></i> 2021
          </p>
        </Col>
        <Col md={4} className="align-self-center">
          <ul className="navbar-nav justify-content-center links">
            <li className="nav-item">
              <a className="footer-link" href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="footer-link" href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="footer-link" href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="footer-link" href="#">
                <i class="fab fa-whatsapp"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
