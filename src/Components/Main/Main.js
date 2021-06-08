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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
