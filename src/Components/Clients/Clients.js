import "./Clients.css";
import { Container, Row, Col } from "react-bootstrap";
import clientesclaudia from "./../IMG/clientesclaudia.png";
import clienteslituania from "./../IMG/clienteslituania.png";
import clientesmm from "./../IMG/clientesmm.png";
import clientespetricor from "./../IMG/clientespetricor.png";

const Clients = () => {
  return (
    <>
      <Container className="pb-5">
        <Row className="clientes">
          <Col className="clients-title">
            <h2>Clientes</h2>
            <h3>
              Generamos una red colaborativa entre profesionales y emprendedores
              que trabajan por los mismos valores.
            </h3>
          </Col>
        </Row>
        <Row className="clients-description">
          <Col md={3} className="clients-col">
            <a href="#">
              <img
                src={clientesclaudia}
                fluid
                className="clients-icon"
                alt="asesor"
              ></img>
            </a>
          </Col>
          <Col md={3} className="clients-col">
            <a href="#">
              <img
                src={clienteslituania}
                fluid
                className="clients-icon"
                alt="asesor"
              ></img>
            </a>
          </Col>
          <Col md={3} className="clients-col">
            <a href="#">
              <img
                src={clientesmm}
                fluid
                className="clients-icon"
                alt="asesor"
              ></img>
            </a>
          </Col>
          <Col md={3} className="clients-col">
            <a href="#">
              <img
                src={clientespetricor}
                fluid
                className="clients-icon"
                alt="asesor"
              ></img>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Clients;
