import "./Navbar.css";
import { Row, Col } from "react-bootstrap";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top justify-content-beetween">
        <Col>
          <a className="navbar-brand pl-3" href="#">
            S E Ñ O R A S
          </a>
        </Col>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <Col>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Quienes Somos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Servicios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Nuestros Clientes
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i class="fab fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </Col>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
