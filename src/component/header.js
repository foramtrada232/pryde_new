import React from 'react';
import { Image, Button, Nav, Navbar, NavDropdown, Col, Row, InputGroup, FormControl} from 'react-bootstrap';
import Logo from './images/prydeLogo.svg';
import search from './images/search.svg';


export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="header">

                    <div className="header_content">
                        <div className="logo">
                            <a href="index.html" >
                                <Image
                                    src={Logo}
                                    alt="logo_image"
                                />
                            </a>
                        </div>
                        <div className="header_menu">
                            <Navbar collapseOnSelect expand="xl">
                                <Navbar.Toggle aria-controls="#responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="navbar-nav justify-content-end">
                                        <Nav.Item>
                                        <Nav.Link href="#">Home</Nav.Link>
                                        </Nav.Item>
                                        <NavDropdown id="navbardrop_patient" className="mydropdown" title="Patient">
                                            <Row className="m-0">
                                                <Col xl={6} className="p-0">
                                                    <NavDropdown.Item href="doctor_consulatation.html">Doctor Consultation</NavDropdown.Item>
                                                    <NavDropdown.Item href="searchClinic.html">Search Clinic</NavDropdown.Item>
                                                    <NavDropdown.Item href="my_appointment.html">My Appointment</NavDropdown.Item>
                                                    <NavDropdown.Item href="family_doctor.html">Family Doctor</NavDropdown.Item>
                                                    <NavDropdown.Item href="lab_booking_radiology.html">Radiologist - Lab Booking</NavDropdown.Item>
                                                    <NavDropdown.Item href="lab_booking_pathology.html">Pathologist - Lab Booking</NavDropdown.Item>
                                                    <NavDropdown.Item href="physiotherapy.html">Physiotherapy</NavDropdown.Item>
                                                    <NavDropdown.Item href="nursing.html">Nursing</NavDropdown.Item>
                                                    <NavDropdown.Item href="emotional_wellbeing.html">Emotional Wellbeing</NavDropdown.Item>
                                                </Col>
                                                <Col xl={6} className="p-0">
                                                    <NavDropdown.Item href="secondOpinion.html">Second Opinion</NavDropdown.Item>
                                                    <NavDropdown.Item href="follow_Up_Consultation.html">Follow Up Consultation</NavDropdown.Item>
                                                    <NavDropdown.Item href="medicine_supply.html">Medicine Supply</NavDropdown.Item>
                                                    <NavDropdown.Item href="index1.html">Medical Equipment Supply</NavDropdown.Item>
                                                    <NavDropdown.Item href="index2.html">New Born Baby & Mother Care at Home</NavDropdown.Item>
                                                    <NavDropdown.Item href="index3.html">Smart Ambulance</NavDropdown.Item>
                                                    <NavDropdown.Item href="index4.html">AI Based Patient Summary & Suggestions</NavDropdown.Item>
                                                    <NavDropdown.Item href="index5.html">Online Payment Mechanism</NavDropdown.Item>
                                                    <NavDropdown.Item href="index6.html">eHR at Patient</NavDropdown.Item>
                                                </Col>
                                            </Row>
                                        </NavDropdown>
                                        <NavDropdown id="navbardrop_doctor" title="Doctor">
                                            <NavDropdown.Item href="index7.html">OPD Scheduler</NavDropdown.Item>
                                            <NavDropdown.Item href="index8.html">IPD Scheduler</NavDropdown.Item>
                                            <NavDropdown.Item href="index9.html">Doctor Calendar</NavDropdown.Item>
                                            <NavDropdown.Item href="index10.html">Doctor Profile</NavDropdown.Item>
                                            <NavDropdown.Item href="index11.html">Online Consultation</NavDropdown.Item>
                                            <NavDropdown.Item href="index12.html">Share Prescription</NavDropdown.Item>
                                            <NavDropdown.Item href="index13.html">Syncing with Patient Calendar</NavDropdown.Item>
                                            <NavDropdown.Item href="index14.html">Patient Conversation from OPD to IPD</NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown id="navbardrop_individual_OPD" title="Individual OPD">
                                            <NavDropdown.Item href="index15.html">Vitals for Walk-in , Online & Offfline Patient</NavDropdown.Item>
                                            <NavDropdown.Item href="index16.html">Scan Prescription/Report for Non-registered Patient</NavDropdown.Item>
                                            <NavDropdown.Item href="index17.html">Booking Slot / Doctor's Appointment</NavDropdown.Item>
                                            <NavDropdown.Item href="patient_register.html">Patient Registration</NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown id="product_and_services" title="Product & Services">
                                            <NavDropdown.Item href="index18.html">Smart Discovery</NavDropdown.Item>
                                            <NavDropdown.Item href="index19.html">Smart OPD</NavDropdown.Item>
                                            <NavDropdown.Item href="index20.html">Smart IPD</NavDropdown.Item>
                                            <NavDropdown.Item href="index21.html">Smart Remote Patient</NavDropdown.Item>
                                            <NavDropdown.Item href="index22.html">Smart Ambulance</NavDropdown.Item>
                                            <NavDropdown.Item href="index23.html">Smart Health Care</NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Item>

                                        <Nav.Link href="index24.html">About Us</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>

                                        <Nav.Link href="index25.html">Contact Us</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <Navbar className="login_register">
                                <Nav>
                                    <NavDropdown id="navbardrop_register" title="Register For Free">
                                        <NavDropdown.Item href="doctor_register.html">Register as Doctor</NavDropdown.Item>
                                        <NavDropdown.Item href="patient_register.html">Register as Patient</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown id="navbardrop_login" title="Login">
                                        <NavDropdown.Item href="doctor_login.html">Login as Doctor</NavDropdown.Item>
                                        <NavDropdown.Item href="patient_login.html">Login as Patient</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar>
                        </div>
                    </div>
                    <div className="right_side_search">
                        <div className="side_search_content text-white">
                            <a className="search_control_btn" href="#">
                                <Image
                                    src={search}
                                    alt="icon search" />
                            </a>
                            <div className="scroll_for_mobile">
                                <h6>Search Anything:</h6>
                                <p>We provide the most full medical services, so every person could have the opportunity</p>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Search anything here..."
                                        aria-label="search anything"
                                    />
                                </InputGroup>
                                <Button className="side_search_btn">Search</Button>
                                <h6>Opening Hours:</h6>
                                <p>These are our normal opening hours. When we are closed can be found here.</p>
                                <div className="working_days_and_time">
                                    <span className="float-left">Monday - Saturday</span>
                                    <span className="float-right">8.30 – 17.00</span>
                                </div>
                                <hr />
                                <div className="working_days_and_time">
                                    <span className="float-left">Sunday</span>
                                    <span className="float-right">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}