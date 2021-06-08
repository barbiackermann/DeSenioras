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
            <h6>PACK 1</h6>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Doloribus, tempore autem! Cum maxime corrupti suscipit numquam.
              </li>
              <li>
                Minus perspiciatis, neque ut placeat laudantium praesentium
                minima voluptatum quod qui veniam autem in!
              </li>
            </ul>
          </Col>
          <Col md={3} className="offer-col">
            <img
              src={Sofrecemos2}
              fluid
              className="offer-icon"
              alt="PAck 2"
            ></img>
            <h6>PACK 2</h6>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Doloribus, tempore autem! Cum maxime corrupti suscipit numquam.
              </li>
              <li>
                Minus perspiciatis, neque ut placeat laudantium praesentium
                minima voluptatum quod qui veniam autem in!
              </li>
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
            <h6>PACK 3</h6>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Doloribus, tempore autem! Cum maxime corrupti suscipit numquam.
              </li>
              <li>
                Minus perspiciatis, neque ut placeat laudantium praesentium
                minima voluptatum quod qui veniam autem in!
              </li>
            </ul>
          </Col>
          <Col md={3} className="offer-col">
            <img
              src={Sofrecemos4}
              fluid
              className="offer-icon"
              alt="Pack 4"
            ></img>
            <h6>PACK 4</h6>
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Doloribus, tempore autem! Cum maxime corrupti suscipit numquam.
              </li>
              <li>
                Minus perspiciatis, neque ut placeat laudantium praesentium
                minima voluptatum quod qui veniam autem in!
              </li>
            </ul>
          </Col>
        </Row>
        <LineaDirecta></LineaDirecta>
      </Container>
    </>
  );
};

export default Ofrecemos;
