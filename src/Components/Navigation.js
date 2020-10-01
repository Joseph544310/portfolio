import React, { useState } from 'react'
import { Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
    const [expanded, setExpanded] = useState(false);
    const clickHandler = () => {
        window.scrollTo(0, 0);
        setExpanded(false);
    }
    return (
        <Navbar expand="md" fixed="top" expanded={expanded}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/" exact activeClassName="active" onClick={clickHandler}>About</NavLink>
                    <NavLink to="/Education" exact activeClassName="active" onClick={clickHandler}>Education</NavLink>
                    <NavLink to="/Projects" exact activeClassName="active" onClick={clickHandler}>Projects</NavLink>
                    <NavLink to="/Experience" exact activeClassName="active" onClick={clickHandler}>Experience</NavLink>
                    <NavLink to="/Contact" exact activeClassName="active" onClick={clickHandler}>Contact Me</NavLink>
                </Nav>
            </Navbar.Collapse>
            {/*<span id="languages">
                <button id="english" onClick={props.setEnglish}></button>
                <button id="french" onClick={props.setFrench}></button>
            </span>*/}
        </Navbar>
        );
};

export default Navigation;