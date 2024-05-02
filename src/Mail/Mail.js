import { MDBContainer } from "mdb-react-ui-kit";
import NavbarComponent from "../components/NavbarComponents";
import "../Mail.sass";
import WebMail from "../../images/WebMail.png";

export default function Mail() {

  return (
    <>
      <NavbarComponent props={"e"} />
      <MDBContainer fluid className="body">
      <nav id="navbar">
        <header>Mail institutional</header>
        <ul>
            <li>
                <a class="nav-link" href="#LogIn">Log In</a>
            </li>
            <li>
                <a class="nav-link" href="#Tablou_de_bord">Tablou de bord</a>
            </li>
        </ul>
    </nav>
    <main id="main-doc">
        <section class="main-section" id="LogIn">
          <br />
            <header>Pagina de Log in</header>
            <p>Pagina de Log in arata in felul urmator: </p>
            <img src={WebMail} alt="Log-in page" width="100%" height="100%" className="center-image"/>
            <p>In aceasta fereastra va trebui sa completati campul 'Username' cu ceea ce se afla in fata '@' din adresa de mail institutional si campul 'Password' cu adresa mail-ului institutional.</p>
            <p>Totodata, din aceasta fereastra puteti sa va schimbati interfata, adica sa schimbati interfata vizuala a tabloului de bord sau limba. </p>
            <p>Interfata vizuala are 4 optiuni: </p>
            <ol>
              <li>Last Used</li>
              <li>Clean</li>
              <li>Standard</li>
              <li>Old Interface</li>
            </ol>
            <p>Limba WebMail-ului poate fi:</p>
            <ul>
              <li>Engleza(UK)</li>
              <li>Daneza</li>
              <li>Germana</li>
              <li>Engleza(US)</li>
              <li>Spaniola</li>
              <li>Franceza</li>
              <li>Italiana</li>
              <li>Maghiara</li>
              <li>More..</li>
            </ul>
            <p>Datele de conectare pot fi retinute prin bifarea casutei 'Remember me'.</p>
            <p>Pentru a va conecta trebuie sa apasati butonul de 'Log in'.</p>
            <p>In cazul in care vreti sa va schimbati parola sau ati uitat-o puteti apasa pe butonul de 'Schimbare sau recuperare parola'.</p>
        </section>
        <section class="main-section" id="Tablou_de_bord">
          <br />
            <header>Tablou de bord</header>
            <p>Tabloul de bord este pagina principala a interfetei WebMail. Aici se pot observa 3 sectiuni: </p>
            <ul>
              <li>Un meniu care prezinta urmatoarele: 
                <ul>
                  <li>Inbox</li>
                  <li>Drafts</li>
                  <li>Sent</li>
                  <li>Spam</li>
                  <li>Trash</li>
                </ul>
                <p>Totodata, mai exista si 3 meniuri dropdown: </p>
                <ul>
                  <li>More Folders</li>
                  <li>Labels</li>
                  <li>Searches</li>
                </ul>
              </li>
              <li>O lista cu toate mail-urile primite</li>
              <li>O fereastra in care va este afisat mesajul din mail-ul selectat</li>
            </ul>
        </section>
      </main>
      </MDBContainer>
    </>
  );
}