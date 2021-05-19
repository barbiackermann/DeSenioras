import "./Navbar.css";
import { Col, Nav } from "react-bootstrap";

const Navbar = () => {
  return (
    <>
      <Nav className="navbar navbar-expand-md fixed-top justify-content-beetween bg-transparent">
        <Col>
          <a className="navbar-brand" href="#">
            <img src="" alt="" /> {/* Acá el logo de señoras */}
            SEÑORAS
          </a>
        </Col>
        <Col>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </Col>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <Col>
            <div className="navbar-nav">
              <a className="nav-link" href="#">
                Quienes Somos
              </a>
              <a className="nav-link" href="#">
                Servicios
              </a>
              <a className="nav-link" href="#">
                Nuestros Clientes
              </a>
            </div>
          </Col>
          <Col>
            <div className="navbar-nav">
              <a className="nav-link" href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="nav-link" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="nav-link" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="nav-link" href="#">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </Col>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
