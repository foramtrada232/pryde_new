import React from 'react';
import {Image, Col, Row, Container, Form, InputGroup, FormControl } from 'react-bootstrap';
//Image
import calender from './images/calender.png';

export default class PatientRegister extends React.Component {

    render() {

        return (
            <div>
                <section className="doc_login_form">
                    <Container>
                        <Form className="form_register_section">
                            <p className="form_heading text-center">register as patient</p>
                            <Row>
                                <Col lg={6}>
                                    <div className="form-group">
                                        <label htmlFor="firstname">First Name</label>
                                        <InputGroup><FormControl placeholder="Enter Your First Name" /></InputGroup>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="form-group">
                                        <label htmlFor="middlename">Middle Name</label>
                                        <InputGroup><FormControl placeholder="Enter Your Middle Name" /></InputGroup>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                    <div className="form-group">
                                        <label htmlFor="lastname">Last Name</label>
                                        <InputGroup><FormControl placeholder="Enter Your Last Name" /></InputGroup>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="form-group">
                                        <label>Date Of Birth</label>
                                        <div className="input_with_icont">
                                            <input type="text" className="form-control" id="datepicker1" placeholder="Select Date of Birth" />
                                            <Image src={calender} alt="searct_icon" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                    <div className="form-group">
                                        <label htmlFor="age">Gender</label>
                                        <Row  className="m-0">
                                            <div className="form-check col-4 p-0">
                                                <input className="form-check-input" type="radio" name="gender" id="gender1" value="option1" defaultChecked />
                                                <label className="form-check-label text-center" htmlFor="gender1">Male</label>
                                            </div>
                                            <div className="form-check col-4 p-0">
                                                <input className="form-check-input" type="radio" name="gender" id="gender2" value="option2" />
                                                <label className="form-check-label text-center" htmlFor="gender2">Female</label>
                                            </div>
                                            <div className="form-check col-4 p-0">
                                                <input className="form-check-input" type="radio" name="gender" id="gender3" value="option3" />
                                                <label className="form-check-label text-center" htmlFor="gender3">Other</label>
                                            </div>
                                        </Row>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter Your  Email Address" name="email" />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                    <div className="form-group">
                                        <label htmlFor="contactnum">Contact Number</label>
                                        <InputGroup><FormControl placeholder="Enter Your Contact Number" /></InputGroup>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="form-group">
                                        <label htmlFor="pwd">Password</label>
                                        <input type="password" className="form-control" id="pwd" placeholder="Enter Your password" name="pwd" />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={6}>
                                    <div className="form-group">
                                        <label htmlFor="pwd">Re-enter Password</label>
                                        <input type="password" className="form-control" id="pwd" placeholder="Re-enter Password" name="pwd" />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <div className="col-12 form-check terms_condition">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        Accept <a href="#"> Terms & Conditions</a> and <a href="#"> Privacy Policy</a>
                                    </label>
                                </div>
                                <div className="col-12 register_btn">
                                    <button className="btn">Register</button>
                                </div>
                            </Row>
                        </Form>
                    </Container>
                </section>
            </div>
        )
    }
}



