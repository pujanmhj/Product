import React from 'react'
import nab from '../Lib/menu';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
 function NavBar() {
  return (
    <div>
     <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">WHEELER NPL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="ms-auto text-center">
            {
            nab.map((menu,id)=>{
            return (
                <div>
                    {

                    menu.subNav.length == 0 ?
                     <Nav.Link key={id} href={menu.path}>{menu.name}</Nav.Link>
                    :                 
                    <NavDropdown title={menu.name} id="basic-nav-dropdown">
                    {
                        menu.subNav.map((menu2,id2)=>{
                            return(
                                <div>
                                    <NavDropdown.Item key={`${id2}`} href={`${menu2.path}`}>{menu2.name}</NavDropdown.Item>
                                    {
                                        menu.subNav.length -1 !== id2 &&
                                        <NavDropdown.Divider />

                                    }
                                </div>
                            )
                        })
                    }
                    </NavDropdown>
                    }
                </div>
            )
        })
 }
    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    </div>
  )
}
export default NavBar;




