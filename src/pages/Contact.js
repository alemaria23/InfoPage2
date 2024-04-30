import { MDBContainer } from "mdb-react-ui-kit";

import NavbarComponent from "../components/NavbarComponents";
import FooterComponent from "../components/FooterComponent";

export default function Contact() {

  return (
    <>
      <NavbarComponent props={"3"} />
      <MDBContainer fluid className="body">
      <br /><br /><br />
        <h1 className="centrare">Hei!</h1>
        <h4 className="centrare">Nu ai reusit sa gasesti informatiile de care aveai nevoie?</h4>
        <h5 className="centrare">Nu iti face griji. Suntem aici ca sa te ajutam.</h5>
        <p className="centrare">
           Trimite un ticket pe platforma <a href="https://ticket.unitbv.ro/?lang=ro">Ticket UNITBV</a> si cineva te v-a ajuta in cel mai scurt timp posibil.
        </p>
        <p className="centrare">Daca ai dificultati sa folosesti platforma, poti intra in sectiunea "Ticket" din cadrul acestei platforme pentru a te informa.</p>
      </MDBContainer>
      <FooterComponent />
    </>
  );
}