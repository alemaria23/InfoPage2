import { MDBContainer } from "mdb-react-ui-kit";
import NavbarComponent from "../components/NavbarComponents";
import FooterComponent from "../components/FooterComponent";
import "../Home.sass";


export default function Home() {

  return (
    <>
      <NavbarComponent props={"3"} />
      <MDBContainer fluid className="body">
        <br /><br /><br />
        <h1 className="centru">Buna!</h1>
        <h4 className="centru">Ai probleme cu navigarea pe platformele UNITBV?</h4>
        <h5 className="centru">Nu te ingrijora, noi suntem aici ca sa te ajutam.</h5>
        <p className="centru">
        Verificați lista făcând clic pe butonul Pagina de informații din colțul de sus, <br/>
          iar dacă nu găsiți o soluție acolo, vă rugăm să scrieți folosind sectiunea <a href="/contact">Contact Us </a> .
        </p>
      </MDBContainer>
      <FooterComponent />
    </>
  );
}