import React, { Component } from 'react';
import {Navbar, Nav } from 'react-bootstrap';

export default class ReactBootstrapMenu extends Component {
    render() {
        return (
            <Navbar bg="light" variant="light">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#calendar">Calendar</Nav.Link>
                    <Nav.Link href="#gallery">Gallery</Nav.Link>
                </Nav>
                <Nav className="float-right">
                    <Nav.Link href="#login">Login</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}