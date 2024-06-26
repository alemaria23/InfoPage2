import { MDBContainer } from "mdb-react-ui-kit";
import NavbarComponent from "../components/NavbarComponents";
import FooterComponent from "../components/FooterComponent";
import "../Home/Home.sass";


export default function Home() {

  return (
    <>
      <NavbarComponent props={"3"} />
      <MDBContainer fluid className="body">
        <br /><br /><br />
        <h1>Buna!</h1>
        <h4>Ai probleme cu navigarea pe platformele UNITBV?</h4>
        <h5>Nu te ingrijora, noi suntem aici ca sa te ajutam.</h5>
        <h6>
        Verificați lista făcând clic pe butonul Pagina de informații din colțul de sus, <br/>
          iar dacă nu găsiți o soluție acolo, vă rugăm să scrieți folosind sectiunea <a href="/contact">Contact Us </a> .
        </h6>
      </MDBContainer>
      <FooterComponent />
    </>
  );
}