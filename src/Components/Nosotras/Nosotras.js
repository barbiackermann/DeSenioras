import "./Nosotras.css";
import { Container, Row, Col } from "react-bootstrap";
import Snosotras from "./../IMG/Snosotras.png";
import LineaDirecta from "./../LineaDirecta";

const Nosotras = () => {
  return (
    <>
      <Container className="pb-5">
        <Row className="senioras">
          <Col className="miss-title">
            <h2>Nosotras</h2>
            <h3>Creemos en una cultura de trabajo basada en:</h3>
          </Col>
        </Row>
        <Row>
          <img src={Snosotras} alt="" className="nosotras" />
        </Row>
        <Row>
          <Col className="miss-text">
            <p>
              Señoras nace de pequeñas alianzas que se fueron dando durante el
              2020, hasta conformar el grupo de cinco que somos.
            </p>
            <p>
              La irrupción de la pandemia y el aislamiento, signiﬁcó una
              oportunidad para crecer y transformarnos, incluso con los desafíos
              que se esperan en ese contexto. La distancia dejó de ser un límite
              y la virtualidad nos permitió continuar trabajando sin importar
              donde nos encontremos.
            </p>
            <p>
              En esta nueva realidad el marketing digital, las redes sociales y
              páginas web pasaron de ser una elección a la única forma posible
              de continuar con un negocio. Nuestra visión es poder acompañar a
              quien lo necesite en ese proceso.
            </p>
          </Col>
        </Row>
        <LineaDirecta />
      </Container>
    </>
  );
};

export default Nosotras;
