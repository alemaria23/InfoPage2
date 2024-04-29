import { MDBContainer } from "mdb-react-ui-kit";

import NavbarComponent from "../components/NavbarComponents";
import FooterComponent from "../components/FooterComponent";

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
           Da-ne un email la adresa ... , iar noi vom reveni cu un mesaj in cel mai scurt timp!
        </p>
      </MDBContainer>
      <FooterComponent />
    </>
  );
}