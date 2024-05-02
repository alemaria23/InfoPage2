import { MDBContainer } from "mdb-react-ui-kit";
import NavbarComponent from "../components/NavbarComponents";
import "../Elearning.sass";

export default function Elearning() {

  return (
    <>
      <NavbarComponent props={"e"} />
      <MDBContainer fluid className="body">
      <nav id="navbar">
        <header>E-learning</header>
        <ul>
            <li>
                <a class="nav-link" href="#Tablou_de_bord">Tablou de bord</a>
            </li>
            <li>
                <a class="nav-link" href="#Arhiva">Arhiva</a>
            </li>
            <li>
                <a class="nav-link" href="#Documentatie">Documentatie</a>
            </li>
            <li>
                <a class="nav-link" href="#Notificari">Notificari</a>
            </li>
            <li>
                <a class="nav-link" href="#Mesaje">Mesaje</a>
            </li>
            <li>
                <a class="nav-link" href="#Meniu_profil">Meniu profil</a>
            </li>
            <li>
                <a class="nav-link" href="#Cursurile_mele">Cursurile mele</a>
            </li>
        </ul>
    </nav>
    <main id="main-doc">
        <section class="main-section" id="Tablou_de_bord">
          <br />
            <header>Tablou de bord</header>
            <p>Tabloul de bord este pagina principala a interfetei E-learning. Aici se pot observa urmatoarele: </p>
            <ul>
              <li>Arhiva</li>
              <li>Documentatia pentru cadre didactice si pentru studenti</li>
              <li>Tabloul de notificari</li>
              <li>Tabloul de mesaje</li>
              <li>Meniul profilului de student</li>
              <li>Cursurile mele</li>
            </ul>
        </section>
        <section class="main-section" id="Arhiva">
          <header>Arhiva</header>
          <p>Arhiva se poate gasi in coltul din stanga sus. Dupa ce veti apasa butonul, veti putea vedea arhiva din ultimii 5 ani.</p>
          <p>In functie de ce materiale aveti nevoie, apasati pe anul universitar corespunzator.</p>
          <p>Dupa aceea vi se va deschide un nou tablou de bord, dar de data aceasta cu materialele si cursurile din anul universitar selectat.</p>
        </section>
        <section class="main-section" id="Documentatie">
          <header>Documentatie</header>
          <p>Documentatia existenta este atat pentru cadrele didactice, cat si pentru studenti. Aceasta se gaseste in partea stanga a paginii, sub meniul principal.</p>
          <p>Documentatie consta in: </p>
          <ol>
            <li>Cadre Didactice</li>
            <ul>
            <li>Ghid Elearning</li>
            <li>Utilizare videoconferinta</li>
            <li>Ghd videoconferinta cu participanti existenti</li>
            <li>Ghid utilizare turnitin</li>
            <li>Ghid evaluare-notare generala</li>
            <li>Inscriere colectiva pe baza listei de email-uri</li>
            <li>Ghid utilizare grupuri</li>
          </ul>
          <li>Studenti</li>
          <ul>
            <li>Ghid Elearning</li>
            <li>Ghid utiizare turnitin</li>
            <li>Utilizare videoconferinta</li>
            <li>Responsabili e-learning programe de studii cu frecventa</li>
          </ul>
          </ol>
        </section>
        <section class="main-section" id="Notificari">
          <header>Tabloul de notificari</header>
          <p>Tabloul de notificari se afla in partea dreapta a paginii de Elearning.</p>
          <p>Aici se vor regasi notificari legate de: </p>
          <ul>
            <li>Notarea sarcinilor de lucru</li>
            <li>Raspusnurile dintr-un forum la care ati luat parte in cadrul unui curs</li>
            <li>etc.</li>
          </ul>
        </section>
        <section class="main-section" id="Mesaje">
          <header>Tabloul de mesaje</header>
          <p>Tabloul de mesaje se afla tot in partea dreapta a paginii de Elearning, langa butonul de notificari.</p>
          <p>Aici puteti vorbi atat cu profesori, cat si cu alti studenti.</p>
        </section>
        <section class="main-section" id="Meniu_profil">
          <header>Meniul studentului</header>
          <p>Meniul studentului se afla in coltul dreapta sus. Atunci cand apasati butonul, va vor aparea urmatoarele: </p>
          <ul>
            <li>Profil</li>
            <p>Aici veti regasi urmatoarele sectiuni: </p>
            <ul type="circle">
              <li>Detalii utilizator</li>
              <li>Detalii curs</li>
              <li>Diverse</li>
              <li>Rapoarte</li>
              <li>Activitatea de conectare</li>
              <li>Aplicatia mobila</li>
            </ul>
            <li>Note</li>
            <p>Aici veti regasi notele de la toate sarcinile de lucru de la toate cursurile la care luati parte.</p>
            <li>Calendar</li>
            <p>Aici veti gasi toate datele limita ale sarcinilor de lucru sub forma unui calendar.</p>
            <li>Fisiere private</li>
            <p>Aici veti regasi toate fisierele voastre private pe care le-ati incarcat pe platforma.</p>
            <li>Rapoarte</li>
            <p>Aici veti regasi rapoarte personalizate.</p>
            <li>Preferinte</li>
            <p>Aici veti regasi preferintele voastre legate de cont si de bloguri.</p>
            <p>Tot din aceasta sectiune puteti sa schimbati aceste preferinte.</p>
            <li>Delogare</li>
          </ul>
        </section>
        <section class="main-section" id="Cursurile_mele">
          <header>Cursurile mele</header>
          <p>Aceasta sectiune se afla sub sectiunea "Anunturi pentru comunitatea de utilizatori elearning.unitbv.ro".</p>
          <p>Aici puteti vedea toate cursurile pe care le aveti in anul universitar curent si puteti accesa materialele pe care profesorii le pun la dispozitie pentru studenti.</p>
        </section>
        </main>
      </MDBContainer>
    </>
  );
}