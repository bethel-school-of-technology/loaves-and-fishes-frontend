import React from "react";
import { Link, withRouter } from "react-router-dom";
// Setting up the navigation bar and links
function Navigation(props) {
    return (
        <div className="navigation">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link class="navbar-brand" to="/">
                    Loaves and Fish
                </Link>
                <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigatoin"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarresponsive">
                    <ul class="navbar-nav ml-auto">
                        <li
                        class={`nav-item ${
                            props.location.pathname === "/" ? "active" : ""
                        }`}
                        >
                            <Link class="nav-link" to="/">
                                Home
                                <span class="sr-only">(current)</span>
                            </Link>
                        </li>

                        <li
                        class={`nav-item ${
                            props.location.pathname === "/ViewNeeds" ? "active" : ""
                        }`}
                        >
                            <Link class="nav-link" to="/viewneeds">
                                View Needs
                                <span class="sr-only">(current)</span>
                            </Link>
                        </li>

                        <li
                        class={`nav-item ${
                            props.location.pathname === "/SubmitNeed" ? "active" : ""
                        }`}
                        >
                            <Link class="nav-link" to="/submitneed">
                                Submit Need
                                <span class="sr-only">(current)</span>
                            </Link>
                        </li>

                        <li
                            class={`nav-item ${
                                props.location.pathname === "/about" ? "active" : ""
                            }`}
                        >
                            <Link class="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                        <li
                            class={`nav-item ${
                                props.location.pathname === "/contact" ? "active" : ""
                            }`}
                        >
                            <Link class="nav-link" to="/contact">
                                Contact
                            </Link>
                        </li>

                        <li
                        class={`nav-item ${
                            props.location.pathname === "/Account" ? "active" : ""
                        }`}
                        >
                            <Link class="nav-link" to="/account">
                                Account
                                <span class="sr-only">(current)</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navigation);