import React from 'react';
import { Image, Col, Row, Container, InputGroup, FormControl } from 'react-bootstrap';
// Image
import heartbeat from './images/light_blue_heart_beat_icon.svg';
//Import Components
import Select from './search_special';
import Specialities from './specialities';

export default class Appoinment_booking_after_login extends React.Component {
    render() {

        return (
            <div>
                <section className="page_breadcrumb">
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <div className="page_title">
                                    <h1>Doctor Consultation<Image src={heartbeat} alt="heart beat icon" /></h1>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className="d-flex flex-wrap align-content-center">
                                    <ul>
                                        <li>Patient</li>
                                        <li>Doctor Consultation</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <Select />
                <Specialities/>
                <section className="book_appointment">
                    <Container>
                        <div className="section_title p-0">
                            <h2 className="pb-2">Book Your Appointment<Image src={heartbeat} alt="heart beat icon" /></h2>
                        </div>
                        <Row>
                            <Col xl={4} lg={6} className="mt-2">
                                <label>First Name</label>
                                <InputGroup><FormControl placeholder="Enter Your First Name" /></InputGroup>
                            </Col>
                            <Col xl={4} lg={6} className="mt-2">
                                <label>Middle Name</label>
                                <InputGroup><FormControl placeholder="Enter Your Middle Name" /></InputGroup>
                            </Col>
                            <Col xl={4} lg={6} className="mt-2">
                                <label>Last Name</label>
                                <InputGroup><FormControl placeholder="Enter Your Last Name" /></InputGroup>
                            </Col>
                            <Col xl={4} lg={6} className="mt-2">
                                <label>Date of Birth</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><i className="fa fa-calendar-o" aria-hidden="true"></i></span>
                                    </div>
                                    <input type="date" className="form-control" id="datepicker" placeholder="Date of Birth" aria-label="" aria-describedby="basic-addon1" />
                                </div>
                            </Col>
                            <Col xl={4} lg={6} className="mt-2">
                                <label>Age</label>
                                <InputGroup><FormControl placeholder="Enter Your Age" /></InputGroup>
                            </Col>
                            <Col xl={4} lg={6} className="mt-2">
                                <label>Contact Number</label>
                                <InputGroup><FormControl placeholder="Enter Your Contact Number" /></InputGroup>
                            </Col>
                            <Col xl={4} lg={6} className="mt-2">
                                <label>Email Address</label>
                                <InputGroup><FormControl placeholder="Enter Your Email Address" /></InputGroup>
                            </Col>
                            <Col xl={4} lg={6} className="mt-2">
                                <label>Gender</label>
                                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                    <label className="btn btn-light active">
                                        <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> Male
					                </label>
                                    <label className="btn btn-light">
                                        <input type="radio" name="options" id="option2" autoComplete="off" /> Female
				                	</label>
                                    <label className="btn btn-light">
                                        <input type="radio" name="options" id="option3" autoComplete="off" /> Other
				                	</label>
                                </div>
                            </Col>
                            <Col xl={4} lg={6} className="mt-2">
                                <label>Upload Previous History/Report/Rescription</label>
                                <div className="upload_btn">
                                    <input type="file" id="upload_file" style={{ display: 'none' }} />
                                    <label htmlFor="upload_file">Upload File</label>
                                </div>
                            </Col>
                            <Col xl={4} lg={6} className="mt-2">
                                <label>Department</label>
                                <select>
                                    <option defaultValue="Hospital">Hospital</option>
                                    <option defaultValue="Laboratory">Laboratory</option>
                                    <option defaultValue="Medical">Medical</option>
                                </select>
                            </Col>
                            <Col xl={4} lg={6} className="mt-2">
                                <label>Doctor</label>
                                <select>
                                    <option defaultValue="john Deo">Hospital</option>
                                    <option defaultValue="john Deo">Laboratory</option>
                                    <option defaultValue="john Deo">Medical</option>
                                </select>
                            </Col>
                        </Row>
                    </Container>
                  </section>
                </div>
        )
    }
}