import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdown,
} from 'mdb-react-ui-kit';

// Consider using useEffect to fetch initial data or perform side effects
// ...

export default function NavbarComponent() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light" fixed="top">
      <MDBContainer fluid>

        <MDBDropdown>
          <MDBDropdownToggle tag="a" className="nav-link" role="button">
            Info Page
          </MDBDropdownToggle>
          <MDBDropdownMenu>
            <MDBDropdownItem link href="/Mobile">Aplicatie</MDBDropdownItem>
            <MDBDropdownItem link href="/Intranet">Intranet</MDBDropdownItem>
            <MDBDropdownItem link href="/Elearning">E-learning</MDBDropdownItem>
            <MDBDropdownItem link href="/Mail">Mail</MDBDropdownItem>
            <MDBDropdownItem link href="/Ticket">Ticket</MDBDropdownItem>
          </MDBDropdownMenu>
        </MDBDropdown>

        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenNav(!openNav)}
        >
          <MDBIcon icon="bars" />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={openNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="/">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/Contact">Contact Us</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                href="https://www.unitbv.ro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                University Website
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                href="https://tsg.unitbv.ro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TSG
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
