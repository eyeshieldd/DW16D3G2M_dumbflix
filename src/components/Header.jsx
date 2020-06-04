import React from 'react';
import '../App.css';
import logo from '../images/logo.png'; // Tell webpack this JS file uses this image
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Button,
} from 'reactstrap';

const Header = (props) => {

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarToggler />
                <Collapse navbar>
                    <Nav className="mr-auto App-font" navbar>
                        <NavItem >
                            <NavLink href="/components/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">TV Shows</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Movies</NavLink>
                        </NavItem>

                        <img src={logo} alt="Logo" className="center" />
                        <Button color="danger" size="sm" className="btn-reg">Login</Button>{' '}
                        <Button size="sm" className="btn-login">Register</Button>{' '}

                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
export default Header;