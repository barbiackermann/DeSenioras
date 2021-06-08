import "./Clients.css";
import { Container, Row, Col } from "react-bootstrap";
import Sofrecemos1 from "./../IMG/Sofrecemos1.png";

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
            <img
              src={Sofrecemos1}
              fluid
              className="clients-icon"
              alt="asesor"
            ></img>
          </Col>
          <Col md={3} className="clients-col">
            <img
              src={Sofrecemos1}
              fluid
              className="clients-icon"
              alt="asesor"
            ></img>
          </Col>
          <Col md={3} className="clients-col">
            <img
              src={Sofrecemos1}
              fluid
              className="clients-icon"
              alt="asesor"
            ></img>
          </Col>
          <Col md={3} className="clients-col">
            <img
              src={Sofrecemos1}
              fluid
              className="clients-icon"
              alt="asesor"
            ></img>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Clients;
