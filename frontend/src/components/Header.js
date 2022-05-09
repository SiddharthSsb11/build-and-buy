import React from "react";
import { useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { logout } from '../actions/userActions';
import SearchBox from './SearchBox'
//import { Link } from "react-router-dom";

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  /* const userDetails = useSelector((state) => state.userDetails);
  const {user} = userDetails; */

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/'); 
  }

  //<Nav className = 'ml-auto'>
  return (
    <header>
      <Navbar
        bg="primary"
        variant="dark"
        expand="lg"
        collapseOnSelect
        className="navbar-dark bg-primary"
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
            <i className="fa-solid fa-gamepad" style={{marginRight:"0.5rem"}}></i>Build-&-Buy
            </Navbar.Brand>
          </LinkContainer>
          <SearchBox/>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}> Logout </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  {/* <LinkContainer to='admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer> */}
                  <LinkContainer to='admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
