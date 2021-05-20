import "./Main.css";
import { Container, Row, Col } from "react-bootstrap";

const Main = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="presentation">
            <p>
              Somos un colectivo de “señoras” profesionales creativas, en busca
              de generar un espacio de trabajo colaborativo. Ofrecemos servicios
              integrales enfocados a la comunicación y marketing digital
              estratégico basados en el cambio que queremos ver en el mundo.
            </p>
            <h4>
              Ofrecemos servicios con valor y que potencian el impacto de tu
              marca.
            </h4>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
