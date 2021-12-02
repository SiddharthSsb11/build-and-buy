import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {

    //<Nav className = 'ml-auto'>
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect className="navbar-dark bg-primary">
        <Container>
          
          <Navbar.Brand href='/'>Build-&-Buy</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse className = 'justify-content-end' id='basic-navbar-nav'>
            <Nav>
              <Nav.Link href='/cart'>
                <i className='fas fa-shopping-cart'></i> Cart
              </Nav.Link>
              <Nav.Link href='/login'>
                <i className='fas fa-user'></i> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </header>
  )
}

export default Header