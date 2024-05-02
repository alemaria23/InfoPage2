import { MDBContainer } from "mdb-react-ui-kit";
import NavbarComponent from "../components/NavbarComponents";
import FooterComponent from "../components/FooterComponent";
import "../Intranet.sass";

export default function Intranet() {

  return (
    <>
      <NavbarComponent props={"e"} />
      <MDBContainer fluid className="body">
      <nav id="navbar">
        <header>Intranet</header>
        <ul>
            <li>
                <a class="nav-link" href="#Ce_este_intranetul?">Ce este intranetul?</a>
            </li>
            <li>
                <a class="nav-link" href="#Evaluare_cadre_didactice">Evaluare cadre didactice</a>
            </li>
            <li>
                <a class="nav-link" href="#Decontare_abonamente">Decontare abonamente</a>
            </li>
            <li>
                <a class="nav-link" href="#Adaugare_cont_bancar">Adaugare cont bancar</a>
            </li>
            <li>
                <a class="nav-link" href="#Gasire_mail_cadru_didactic">Gasire mail cadru didactic</a>
            </li>
            <li>
                <a class="nav-link" href="#Burse">Burse</a>
            </li>
            <li>
                <a class="nav-link" href="#Plata_camin_si_taxe">Plata camin si taxe</a>
            </li>
        </ul>
    </nav>
    <main id="main-doc">
        <section class="main-section" id="Ce_este_intranetul?">
        <br />
            <header>Ce este intranetul?</header>
            <p>Intranetul este o platforma care faciliteaza comunicarea la nivel intern in cadrul comunitatii universitare.</p>
            <p>Accesul pe platforma se face utilizant adresa de mail institutional si parola acestuia.</p>
            <p>Odata intrati pe intranet, putem vedea avizierul care arata informatii despre:</p>
            <ol>
                <li>Orar si examene</li>
                <li>Meniu cantina</li>
                <li>Stiri si evenimente UNITBV</li>
                <li>Stiri si evenimente facultate</li>
                <li>Anunturi intranet</li>
                <li>Platformele UNITBV</li>
                <li>Note</li>
                <li>Burse</li>
                <li>Taxe</li>
                <li>Notificari Student@UNITBV</li>
                <li>La indemana</li>
                <li>Medii</li>
                <li>Tutoriale UNITBV</li>
                <li>Tur virtual UNITBV</li>
            </ol>

        </section>
        <section class="main-section" id="Evaluare_cadre_didactice">
            <header>Evaluare cadre didactice</header>
            <p>Evaluarea cadrelor didactice se face in sectiunea "Calitate" la fiecare final de semestru.</p>
            <p>Acolo veti gasi un tabel cu toti profesorii cu care ati sustinut cursuri, seminare si laboratoare in semestrul respectiv, fiecare avand cate un cod specific.</p>
            <p>Introduceti codul profesorului pe care doriti sa il evaluati in spatiul destinat acestuia si apasati butonul "Evaluare". Dupa aceea va trebui sa completati un chestionar care cuprinde atat intrebari cu valori de la 1 la 5, cat si doua intrebari cu rasuns liber.</p>
            <p>Apasati butonul "Trimite evaluarea" pentru a vi se salva raspunsurile si pentru a se trimite cate decanat.</p>
        </section>
        <section class="main-section" id="Decontare_abonamente">
            <header>Decontare abonamente</header>
            <p>Pagina de decontare abonamente se afla in sectiunea "Facultate". Va trebui sa va adaugati contul bancar (vezi urmatoarea sectiune) astfel incat banii decontati sa va poata fi virati in cont. Acest lucru se face prin accesarea sectiunii "Notele si bursele mele" care se afla in sectiunea "Facultate"</p>
            <p>Reveniti in pagina de decontare si introduceti datele despre seria abonamentului, ruta abonamentului, tipul abonamentului, data/perioada si valoarea in lei a acestuia.</p>
            <p>Dupa aceea apasati butonul "Genereaza fisa de decontare" de mai jos. Printati fisa generata si mergeti la punctul de decontare destinat facultatii voastre.</p>
        </section>
        <section class="main-section" id="Adaugare_cont_bancar">
            <header>Adaugare cont bancar</header>
            <p>Pentru a va adauga contul bancar trebuie sa mergeti in sectiunea "Burse" care se afla in sectiunea "Notele si bursele mele". Completati in spatiile destinate banca, IBAN-ul si incarcati extrasul vostru de cont.</p>
            <p>Apasati butonul "Salveaza cont" pentru a salva datele introduse anterior.</p>
        </section>
        <section class="main-section" id="Gasire_mail_cadru_didactic">
            <header>Gasire mail cadru didactic</header>
            <p>documentatie ....</p>
        </section>
        <section class="main-section" id="Burse">
          <header>Burse</header>
          <p>Va puteti vedea bursele in sectiunea "Notele si bursele mele" din sectiunea "Facultate". Acestea vor aparea intr-un tabel in functie de anul de studiu si semestru.</p>
        </section>
        <section class="main-section" id="Plata_camin_si_taxe">
          <header>Plata camin si taxe</header>
          <p>Plata caminului si a taxei de scolarizare se face din sectiunea "Taxele mele" din sectiunea "Facultate".</p>
          <p>In sectiunea taxei de camin veti regasi un tabel in care vi se va arata suma pe care trebuie sa o platti in fiecare luna si data scadenta. Aceasta trebuie platita integral in fiecare luna.</p>
          <p>Plata se face prin apasarea casutei din coloana "Plateste online!". Dupa aceea va v-a aparea la finalul tabelului, in partea dreapta, textul "Plateste online!" scris cu albastru pe care trebuie sa faceti click.</p>
          <p>Veti fi redirectionati pe pagina de plata online unde va trebui sa introduceti datele cardului necesare pentru a efectua plata.</p>
          <br></br><br></br>
          <p>In sectiunea platii taxei de scolarizare care se afla sub cea de plata a taxei de camin, veti regasi un tabel in care vi se va arata suma de plata a intregii taxe si data scadenta pentru plata totala a acesteia.</p>
          <p>Spre deosebire de taxa de camin, taxa de scolarizare poate fi platita partial, trebuind sa introduceti ce suma doriti sa achitati. Acestu lucru nu inseamna ca taxa nu poate fi platita intregral intr-o singura transa.</p>
        </section>
        <br /><br /><br />
    </main>
      </MDBContainer>
    </>
  );
}