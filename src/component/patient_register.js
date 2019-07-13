import React from 'react';
import { Col, Row, Container, InputGroup, FormControl, Button } from 'react-bootstrap';

export default class Patient_register extends React.Component {

    render() {

        return (
            <div>

                <section className="registration_form">
                    <Container>
                        <div className="register_box">
                            <h4>Register as Patient</h4>
                            <Row>
                                <Col lg={6} md={6} className="mt-2">
                                    <label>First Name</label>
                                    <div className="input_with_icont">
                                        <InputGroup>
                                            <FormControl
                                                placeholder="Enter Your First Name"
                                            />
                                        </InputGroup>
                                        <i className="fa fa-user-o" aria-hidden="true"></i>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} className="mt-2">
                                    <label>Middle Name</label>
                                    <div className="input_with_icont">
                                        <InputGroup>
                                            <FormControl
                                                placeholder="Enter Your Middle Name"
                                            />
                                        </InputGroup>
                                        <i className="fa fa-user-o" aria-hidden="true"></i>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} className="mt-3">
                                    <label>Last Name</label>
                                    <div className="input_with_icont">
                                        <InputGroup>
                                            <FormControl
                                                placeholder="Enter Your Last Name"
                                            />
                                        </InputGroup>
                                        <i className="fa fa-user-o" aria-hidden="true"></i></div>
                                </Col>
                                <Col lg={6} md={6} className="mt-3">
                                    <label>Date of Birth</label>
                                    <div className="input_with_icont">
                                        <InputGroup>
                                            <FormControl
                                                placeholder="Date Of Birth"
                                            />
                                        </InputGroup>
                                        <i className="fa fa-calendar-o" aria-hidden="true"></i>
                                        </div>
                                </Col>
                                <Col lg={6} md={6} className="mt-2 ">
                                    <label>Gender</label>
                                    <div className="btn-group btn-group-toggle w-100" data-toggle="buttons">
                                        <label className="btn btn-light active">
                                            <input type="radio" name="options" id="option1" autoComplete="off" /> Male
							</label>
                                        <label className="btn btn-light">
                                            <input type="radio" name="options" id="option2" autoComplete="off" /> Female
							</label>
                                        <label className="btn btn-light">
                                            <input type="radio" name="options" id="option3" autoComplete="off" /> Other
							</label>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} className="mt-2">
                                    <label>Email Address</label>
                                    <div className="input_with_icont">
                                    <InputGroup>
                                        <FormControl
                                            placeholder="Enter Your Email Address"
                                        />
                                    </InputGroup>
                                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} className="mt-3">
                                    <label>Contact Number</label>
                                    <div className="input_with_icont">
                                    <InputGroup>
                                        <FormControl
                                            placeholder="Enter Your Contact Number"
                                        />
                                    </InputGroup>
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} className="mt-3">
                                    <label>Password</label>
                                <div className="input_with_icont">
                                    <InputGroup>
                                        <FormControl
                                            placeholder="Enter Your Password"
                                        />
                                    </InputGroup>
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} className="mt-4">
                                    <label>Re-enter Password</label>
                                    <div className="input_with_icont">
                                    <InputGroup>
                                        <FormControl
                                            placeholder="Re-enter Password"
                                        />
                                    </InputGroup>
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                    </div>
                                </Col>
                                <Col lg={12} md={12} className="mt-4">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" value="" id="i_agree" />
                                        <label className="form-check-label" htmlFor="i_agree">Accept <a className="blue_font" href="">Terms and Conditions </a> And <a className="blue_font" href="">Privacy Policy</a> </label>
                                    </div>
                                </Col>
                                <Col lg={12} md={12} className="mt-3">
                                    <a href="validate_OTP.html" className="w-100"><button>Register</button></a>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>

            </div>
        )
    }
}



