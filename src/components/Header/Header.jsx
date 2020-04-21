import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.imgHeader}>
                <img src='https://cdn.worldvectorlogo.com/logos/react-native-firebase-1.svg'/>
            </div>

        </header>
    )
};

export default Header;


{/*
<Navbar>
    <Container>
        <Nanvbar.brand href="/">
            <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
            />
        </Nanvbar.brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="/"> Home </Nav.Link>

            </Nav>

        </Navbar.Collapse>
    </Container>
</Navbar>*/
}
