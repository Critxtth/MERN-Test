import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/">Home</Link>

        <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">PointRD Classifier</a>
                <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded"
                        type="button"
                        data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
                        aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-0 mx-lg-1">
                            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                               href="/classifier/upload">Upload</a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                               href="/classifier/search">Classifier</a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">A
                                propos</a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                               href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    <hr />
  </header>
);

export default Header;
