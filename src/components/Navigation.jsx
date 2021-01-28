import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
// Setting up the navigation bar and links

function Navigation(props) {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Loaves and Fish</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <ul class="navbar-nav ml-auto">
                        <li
                            class={`nav-item ${props.location.pathname === "/" ? "active" : ""
                                }`}
                        >
                            <Link class="nav-link" to="/">
                                Home
                                <span class="sr-only">(current)</span>
                            </Link>
                        </li>

                        <li
                            class={`nav-item ${props.location.pathname === "/ViewNeeds" ? "active" : ""
                                }`}
                        >
                            <Link class="nav-link" to="/viewneeds">
                                View Needs
                                <span class="sr-only">(current)</span>
                            </Link>
                        </li>

                        <li
                            class={`nav-item ${props.location.pathname === "/SubmitNeed" ? "active" : ""
                                }`}
                        >
                            <Link class="nav-link" to="/submitneed">
                                Submit Need
                                <span class="sr-only">(current)</span>
                            </Link>
                        </li>

                        <li
                            class={`nav-item ${props.location.pathname === "/about" ? "active" : ""
                                }`}
                        >
                            <Link class="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                        <li
                            class={`nav-item ${props.location.pathname === "/contact" ? "active" : ""
                                }`}
                        >
                            <Link class="nav-link" to="/contact">
                                Contact
                            </Link>
                        </li>

                        <li
                            class={`nav-item ${props.location.pathname === "/Account" ? "active" : ""
                                }`}
                        >
                            <Link class="nav-link" to="/account">
                                Account
                                <span class="sr-only">(current)</span>
                            </Link>
                        </li>

                    </ul>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default withRouter(Navigation);