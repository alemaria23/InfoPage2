import { MDBContainer } from "mdb-react-ui-kit";
import NavbarComponent from "../components/NavbarComponents";
import "../Ticket/Ticket.sass";
import Ticket from "../images/Ticket.png";

export default function Acasa() {

  return (
    <>
      <NavbarComponent props={"e"} />
      <MDBContainer fluid className="body">
      <nav id="navbar">
        <header>Ticket</header>
        <ul>
            <li>
                <a class="nav-link" href="#Tichet_nou">Tichet nou</a>
            </li>
            <li>
                <a class="nav-link" href="#Vizualizare_stare_tichet">Vizualizare stare tichet</a>
            </li>
        </ul>
    </nav>
    <main id="main-doc">
        <section class="main-section" id="Tichet_nou">
          <header>Tichet nou</header>
        <p>Interfata TicketUNITBV arata in felul uramator: </p>
        <img src={Ticket} alt="Log-in page" width="100%" height="100%" className="center-image"/>
        <p>Pentru a deschide un tichet nou trebuie sa apasati pe butonul 'Deschide tichet nou'.</p>
        <p>Daca nu ati mai scris pana acum un tichet, va trebui sa va autentificati.</p>
        <p>Dupa aceea trebuie sa selectati un subiect pentru care scrieti tichetul.</p>
        <p>Apoi va trebui sa completati urmatoarele sectiuni: </p>
        <ul>
          <li>Issue Summary(obligatorie)</li>
          <p>Aici va trebui sa ziceti pe scurt problema pe care ati intampinat-o.</p>
          <li>Link relevant</li>
          <p>Aici va trebui sa puneti un link relevant pentru problema pe care ati intampinat-o, insa nu este obligatoriu.</p>
          <li>Detail on the reason(s) for opening the ticket</li>
          <p>Aici va trebui sa dati mai multe detalii asupra problemei pe care ati intampinat-o, insa nu este obligatoriu. Totodata puteti atasa si documente in aceasta sectiune.</p>
        </ul>
        <p>Dupa ce ati completat aceste sectiuni puteti apasa unul dintre cele 3 butoane: </p>
        <ol>
          <li>Creeaza tichet</li>
          <p>Apasand acest buton veti creea un nou tichet cu informatiile completate anterior.</p>
          <li>Reseteaza</li>
          <p>Apasand acest buton veti reseta toate informatiile scrise anterior.</p>
          <li>Anuleaza</li>
          <p>Apasand acest buton veti renunta la creearea unui nou tichet, aparandu-va o notificare de confirmare in partea de sus a paginii.</p>
        </ol>
        <p>Dupa creearea unui tichet vi se va da un numar acestuia.</p>
        </section>
        <section class="main-section" id="Vizualizare_stare_tichet">
          <header>Vizualizare stare tichet</header>
          <p>Pentru a vedea starea tichetul va trebui sa apasati pe butonul 'Verifica starea tichetului'.</p>
          <p>Dupa aceea va trebui sa va introduceti adresa de mail si numarul tichetului, ca mai apoi sa apasati pe butonul 'Trimite link'.</p>
        </section>
    </main>
      </MDBContainer>
    </>
  );
}