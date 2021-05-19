import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { Container } from "react-bootstrap";
import "./App.css";

const App = () => {
  return (
    <Container fluid>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};

export default App;
