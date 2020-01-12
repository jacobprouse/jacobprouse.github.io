import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import '../styles/nav.scss';


class NavBar extends React.Component {
    render() {
        // auto hiding nav bar with implementation from https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
        if (typeof window !== 'undefined') {
            let prevScrollpos = window.pageYOffset;
            window.onscroll = function () {
            const maxScroll = document.body.clientHeight - window.innerHeight;
            let currentScrollPos = window.pageYOffset;
            if (
                (maxScroll > 0 && prevScrollpos > currentScrollPos && prevScrollpos <= maxScroll) 
                || (maxScroll <= 0 && prevScrollpos > currentScrollPos)
                || (prevScrollpos <= 0 && currentScrollPos <= 0)
                ) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-5.0rem";
            }
            prevScrollpos = currentScrollPos;
            }
        }
        return (
            <div>
                <Navbar fixed="top" bg="#282c34" variant="dark" id="navbar" expand="lg">
                    <Navbar.Brand href="/#home">Jacob Prouse</Navbar.Brand>
                    <div className="icon-container">
                    <a href="https://github.com/jacobprouse" target="_" ><FontAwesomeIcon className="social-icon" icon={faGithub} /></a>
                    <a href="https://linkedin.com/in/jacobprouse" target="_" className="social-icon"><FontAwesomeIcon className="social-icon" icon={faLinkedin} /></a>
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
                    <Nav ml="auto">
                        <Nav.Link href="/#about">About</Nav.Link>
                        <Nav.Link href="/#work">Experience</Nav.Link>
                        <Nav.Link href="/#projects">Projects</Nav.Link>
                        <Nav.Link href="/#contact">Contact</Nav.Link>
                        <Form inline>
                            <a target="blank" type="application/pdf" href="/documents/resume.pdf"><Button id="portfolio-btn">Resume</Button></a>
                        </Form>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default NavBar