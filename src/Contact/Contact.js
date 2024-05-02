import { MDBContainer } from "mdb-react-ui-kit";
import NavbarComponent from "../components/NavbarComponents";
import FooterComponent from "../components/FooterComponent";
import "../Contact/Contact.sass";

export default function Contact() {

  return (
    <>
      <NavbarComponent props={"3"} />
      <MDBContainer fluid className="body">
      <br /><br /><br />
        <h1>Hei!</h1>
        <h4>Nu ai reusit sa gasesti informatiile de care aveai nevoie?</h4>
        <h5>Nu iti face griji. Suntem aici ca sa te ajutam.</h5>
        <p>
           Trimite un ticket pe platforma <a href="https://ticket.unitbv.ro/?lang=ro">Ticket UNITBV</a> si cineva te v-a ajuta in cel mai scurt timp posibil.
        </p>
        <p>Daca ai dificultati sa folosesti platforma, poti intra in sectiunea "Ticket" din cadrul acestei platforme pentru a te informa.</p>
      </MDBContainer>
      <FooterComponent />
    </>
  );
}