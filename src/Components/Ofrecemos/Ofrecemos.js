import "./Ofrecemos.css";
import { Container, Row, Col } from "react-bootstrap";
import Sofrecemos1 from "./../IMG/Sofrecemos1.png";
import Sofrecemos2 from "./../IMG/Sofrecemos2.png";
import Sofrecemos3 from "./../IMG/Sofrecemos3.png";
import Sofrecemos4 from "./../IMG/Sofrecemos4.png";
import LineaDirecta from "./../LineaDirecta";

const Ofrecemos = () => {
  return (
    <>
      <Container className="pb-5">
        <Row className="ofrecemos">
          <Col className="offer-title">
            <h2>Qué ofrecemos</h2>
            <h3>Potenciá el impacto de tu marca</h3>
          </Col>
        </Row>
        <Row className="offer-description">
          <Col md={3} className="offer-col">
            <img
              src={Sofrecemos1}
              fluid
              className="offer-icon"
              alt="Pack 1"
            ></img>
            <h6>SEÑORA ESTELA</h6>
            <ul>
              <li>
                Asesorías para armar la estrategia y planificación de redes.
              </li>
              <li>Asesoramiento para el armado de tienda web.</li>
              <li>Asesoramiento en el diseño de la identidad.</li>
            </ul>
            <h3 className="loquieroEX">LO QUIERO</h3>
          </Col>
          <Col md={3} className="offer-col">
            <img
              src={Sofrecemos2}
              fluid
              className="offer-icon"
              alt="PAck 2"
            ></img>
            <h6>SEÑORA MARTHA</h6>
            <ul>
              <li>Tienda online en plataforma de ecommerce.</li>
              <li>Diseño de Banners e imagenes para la tienda.</li>
              <li>Diseño de isologo.</li>
              <li>Estrategia y planificación en redes sociales.</li>
            </ul>
            <h3 className="loquieroEX">LO QUIERO</h3>
          </Col>
          <Col md={3} className="offer-col">
            <img
              src={Sofrecemos3}
              fluid
              className="offer-icon"
              alt="Pack 3"
            ></img>
            <h6>SEÑORA BEATRIZ</h6>
            <ul>
              <li>Landing page a medida.</li>
              <li>Diseño de isologotico con manual de marca.</li>
              <li>Estrategia y planificacion de redes sociales.</li>
            </ul>
            <h3 className="loquieroEX">LO QUIERO</h3>
          </Col>
          <Col md={3} className="offer-col">
            <img
              src={Sofrecemos4}
              fluid
              className="offer-icon"
              alt="Pack 4"
            ></img>
            <h6>SEÑORA GLORIA</h6>
            <ul>
              <li>Sitio Full o Standard diseñado a medida.</li>
              <li>Diseño de isologo y manual de marca.</li>
              <li>Estrategia y planificacion en redes sociales.</li>
            </ul>
            <h3 className="loquieroEX">LO QUIERO</h3>
          </Col>
        </Row>
        <LineaDirecta></LineaDirecta>
      </Container>
    </>
  );
};

export default Ofrecemos;
