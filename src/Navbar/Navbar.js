import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="bg-white">
            <Navbar color="white" light expand="md" className="container p-4">
                <NavbarBrand href="/" className="nav-text-logo">LOGO</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/" className="text-dark pr-2 pl-2">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/" className="text-dark pr-2 pl-2">My Portfolio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/" className="text-dark pr-2 pl-2">Clients</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/" className="btn btn-outline-light text-dark pr-2 pl-2">Get in Touch</NavLink>
                        </NavItem>
                        
                       
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Example;