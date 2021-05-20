import "./Services.css";
import { Container, Row, Col } from "react-bootstrap";
import Scomunicacion from "./../IMG/Scomunicacion.png";
import Sdisenio from "./../IMG/Sdisenio.png";
import Sdigital from "./../IMG/Sdigital.png";
import Sbranding from "./../IMG/Sbranding.png";
import Splaning from "./../IMG/Splaning.png";
import Sasesoramientos from "./../IMG/Sasesoramientos.png";

const Services = () => {
  return (
    <>
      <Container className="pb-5">
        <Row className="services">
          <Col className="services-title">
            <h2>Servicios</h2>
          </Col>
        </Row>
        <Row className="services-description">
          <Col md={4} className="services-col">
            <img
              src={Scomunicacion}
              fluid
              className="serv-icon"
              alt="comunication"
            ></img>
            <h6>Comunicación y Marketing</h6>
            <ul>
              <li>Estrategia de contenidos</li>
              <li>Posicionamiento</li>
              <li>Community management</li>
              <li>Publicidad en redes</li>
              <li>E-mail marketing</li>
            </ul>
          </Col>
          <Col md={4} className="services-col">
            <img src={Sdisenio} fluid className="serv-icon" alt="design"></img>
            <h6>Diseño Gráfico</h6>
            <ul>
              <li>Diseño UX/UI</li>
              <li>Ilustración</li>
              <li>Comunicación visual</li>
              <li>Estrategia y diseño de redes sociales</li>
            </ul>
          </Col>
          <Col md={4} className="services-col">
            <img src={Sdigital} fluid className="serv-icon" alt="digital"></img>
            <h6>Diseño Digital</h6>
            <ul>
              <li>Diseño y desarrollo web</li>
              <li>Micrositios promocionales y landing pages</li>
              <li>E-commerce</li>
              <li>Diseño y desarrollo de apps</li>
            </ul>
          </Col>
          <Col md={4} className="services-col">
            <img
              src={Sbranding}
              fluid
              className="serv-icon"
              alt="branding"
            ></img>
            <h6>Branding</h6>
            <ul>
              <li>Identidad visual</li>
              <li>Diseño de logo y marca</li>
              <li>Estrategia de mercado</li>
              <li>Desarrollo de manuales</li>
            </ul>
          </Col>
          <Col md={4} className="services-col">
            <img
              src={Splaning}
              fluid
              className="serv-icon"
              alt="planning"
            ></img>
            <h6>Planning de Campañas</h6>
            <ul>
              <li>Definición de objetivos</li>
              <li>Posicionamiento</li>
              <li>Publicidad en redes</li>
            </ul>
          </Col>
          <Col md={4} className="services-col">
            <img
              src={Sasesoramientos}
              fluid
              className="serv-icon"
              alt="asesor"
            ></img>
            <h6>Asesoramientos</h6>
            <ul>
              <li>Estrategia y planificación de redes</li>
              <li>Identidad y diseño</li>
              <li>Tienda virtual</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
