import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import { Container } from "react-bootstrap";
import "./App.css";

const App = () => {
  return (
    <Container fluid className="principal">
      <Navbar />
      <Header />
      <Main />
      <Services />
      <Footer />
    </Container>
  );
};

export default App;
