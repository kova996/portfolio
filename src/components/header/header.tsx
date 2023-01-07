import "./header.style.css";
import React from "react";

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavButton,
    NavButtonLink
} from "./header-elements";

export const Header = () => {

    return (
        <header>
            <Nav>
                <NavLink to="/">Icon</NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/">Home</NavLink>
                </NavMenu>
                <NavButton>
                    <NavButtonLink to="/test">Sign In</NavButtonLink>
                </NavButton>
            </Nav>
        </header>
    );
}