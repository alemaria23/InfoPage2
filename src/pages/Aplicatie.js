import { MDBContainer } from "mdb-react-ui-kit";
import NavbarComponent from "../components/NavbarComponents";
import FooterComponent from "../components/FooterComponent";
import "./styles.css";
import Login from "./images/Login.png";
import Dashboard from "./images/Dashboard.png";
import Notificari from "./images/Notificari.png";
import Detalii from "./images/Detalii cont.png";
import Pagini from "./images/Mai multe pagini.png";

export default function Aplicatie() {
  return (
    <>
      <NavbarComponent props={"e"} />
      <MDBContainer fluid className="body">
      <nav id="navbar">
        <header>Aplicatie</header>
        <ul>
            <li>
                <a class="nav-link" href="#Pagina_login">Pagina login</a>
            </li>
            <li>
                <a class="nav-link" href="#Dashboard">Dashboard</a>
            </li>
            <li>
                <a class="nav-link" href="#Detalii_cont">Detalii cont</a>
            </li>
            <li>
                <a class="nav-link" href="#Notificari">Notificari</a>
            </li>
            <li>
                <a class="nav-link" href="#Mai_multe_pagini">Mai multe pagini</a>
            </li>
            <li>
                <a class="nav-link" href="#Card_digital">Card digital</a>
            </li>
        </ul>
    </nav>
    <main id="main-doc">
        <section class="main-section" id="Pagina_login">
        <br />
            <header>Pagina de log-in</header>
            <p>Autentificarea în aplicație se face pe baza adresei și parolei atribuite contului instituțional.</p>
            <p>Informațiile de conectare se pot salva bifând căsuța din stânga căsuțelor de completare a datelor de autentificare, astfel ca nu va mai trebui sa va completați datele de fiecare data când întrați în aplicație. </p>
            <img src={Login} alt="Log-in page" width="40%" height="40%" className="center-image"/>
        </section>
        <br /><br /><br />
        <section class="main-section" id="Dashboard">
            <header>Dashboard (meniul principal)</header>
            <p>În pagina de dashboard se pot regăsi: </p>
            <ul>
              <li>orarul</li>
              <li>plata taxelor</li>
              <li>performante</li>
              <li>examene</li>
              <li>cantina</li>
              <li>anuntui</li>
              <li>Erasmus</li>
              <li>practica</li>
            </ul>
            <p>În pagina de orar se poate vedea orarul sub forma unui calendar. De asemenea, din partea dreapta sus, apasand icon ul cu cele trei puncte, se pot selecta ziua curenta, se poate schimba grupa, se poate schimba semigrupa sau se poate schimba ultima zi a orarului.</p>
            <p>În pagina de taxe se pot plăti atat taxa de cămin cât si taxa de școlarizare. Plata se face asemănător cu plata din intranet.</p>
            <p>În pagina de performante se pot vedea notele, separate pe anii de studiu, mediile separate pe anii de școlarizare, fiind atat cele semestriale cât și cele anuale, bursele, asta în cazul în care studentul beneficiază de bursa.</p>
            <p>În pagina de programarea examenelor se poate vedea programarea examenelor, programarea restantelor și altele.</p>
            <p>În pagina de cantina se poate vedea meniul zilnic atat de la cantina Colina, fat și de la cantina Memo.</p>
            <p>În pagina de anunțuri se pot vedea notificari de la secretariat privind programarea examenelor, tabere universitare etc.</p>
            <p>În pagina de Erasmus se pot vedea mobilitățile pe care studenții le pot alege pentru a pleca sa studieze în străinătate în cadrul proiectului Erasmus.</p>
            <p>În pagina de practica se pot vedea ofertele de la diverse companii pentru practica pe care studenții trebuie sa o facă în anul al doilea de studii.</p>
            <img src={Dashboard} alt="Dashboard page" width="40%" height="40%" className="center-image"/>
        </section>
        <br /><br /><br />
        <section class="main-section" id="Detalii_cont">
            <header>Detalii cont</header>
            <p>În aceasta pagina se vedea numele complet al studentului autentificat și adresa instituțională a acestuia.</p>
            <p>Tot în aceasta secțiune se mai pot vedea și facultatea, specializarea, grupa și numărul matricol ale studentului autentificat.</p>
            <img src={Detalii} alt="Details page" width="40%" height="40%" className="center-image"/>
        </section>
        <br /><br /><br />
        <section class="main-section" id="Notificari">
            <header>Notificari</header>
            <p>În aceasta pagina se pot vedea anunțurile date de rectorii sau decanii facultății privind evenimente, programul de decontare abonamente etc.</p>
            <img src={Notificari} alt="Notification page" width="40%" height="40%" className="center-image"/>
        </section>
        <br /><br /><br />
        <section class="main-section" id="Mai_multe_pagini">
            <header>Mai multe pagini</header>
            <p>În aceasta pagina se pot vedea atat paginile care sunt în dashboard, cât și alte pagini cum ar fi:</p>
            <ul>
              <li>harta universitatii</li>
              <li>radio campus UNITBV</li>
              <li>scanare card diigtal student</li>
              <li>documente utile</li>
              <li>alte informatii utile</li>
              <li>optiunea de log-out</li>
            </ul>
            <img src={Pagini} alt="More pages" width="40%" height="40%" className="center-image"/>
        </section>
        <br /><br /><br />
        <section class="main-section" id="Card_digital">
          <header>Card digital</header>
          <p>În aceasta pagina se pot vedea atat informații legate de studentul autentificat, cât și un cod qr care dacă este scanat de un alt student poate vedea informațiile acestuia. Acest cod qr se regenerează din 5 în 5 minute.</p>
          <p>Tot în aceasta pagina se poate regăsi un alt cod qr prin intermediul căruia se poate face accesul în căminele în care se întrarea se face pe baza acestui cod.</p>
        </section>
        <br /><br /><br />
    </main>
      </MDBContainer>
    </>
  );
 
}