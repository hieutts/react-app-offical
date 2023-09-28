import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-social/bootstrap-social.css';



export default class Navigation extends Component {
    render() {
        return (
            <div className='bg-success'>
                <nav className="navbar navbar-dark navbar-expand-sm fixed-top bg-success text-white">
                    <div className="container">
                        <a className="navbar-brand col-12 col-sm-6" href="#"
                        >Ristorante Con Fusion</a
                        >
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#Navbar"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse row" id="Navbar">
                            <div className="col-1 col-sm-8 col-md-5"></div>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#"
                                    ><span className="fa fa-home fa-lg"></span>Home</a
                                    >
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"
                                    ><span className="fa fa-info fa-lg"></span>About</a
                                    >
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"
                                    ><span className="fa fa-list fa-lg"></span>Menu</a
                                    >
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"
                                    ><span className="fa fa-address-card fa-lg"></span>Contact</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}