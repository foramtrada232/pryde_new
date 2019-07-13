import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

// Component
import { Image, Col, Row, Container, Tab, Nav } from 'react-bootstrap';
import heartbeat from './images/dark_blue_heart_beat_icon.svg';
import landing_tab1 from './images/our_service1.svg';
import landing_tab2 from './images/our_service2.svg';
import landing_tab3 from './images/our_service3.svg';
import landing_tab4 from './images/our_service4.svg';
import landing_tab5 from './images/our_service5.svg';       
import landing_tab6 from './images/our_service6.svg';
import doctor1 from './images/doctor-1.svg';
import doctor2 from './images/doctor-2.svg';
import doctor3 from './images/doctor-3.svg';
import doctor4 from './images/doctor-4.svg';
import doctor5 from './images/doctor-5.svg';
import customer1 from './images/customer-1.svg';
import customer2 from './images/customer-2.svg';
import customer3 from './images/customer-3.svg';
import customer4 from './images/customer-4.svg';
import customer5 from './images/customer-5.svg';

export default class Landing_page extends React.Component {
  
    render() {

        return (
            <div>

                {/* banner section start */}
                <div className="banner_section">
                    <Container>
                        <Row>
                            <Col xl={7} lg={10}>
                                <h4>We give you the best!</h4>
                                <h2>
                                    <span>Medical Services</span>
                                    that you can trust
					            </h2>
                                <Image
                                    src={heartbeat}
                                    alt="image heart beat"
                                />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation
					            </p>
                                <a className="banner_btn" href="#">Know More</a>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* banner section end */}

                {/* our services section start */}
                <div className="our_services_section">
                    <Container>
                        <div className="section_title">
                            <h2>Our Services
                                <Image
                                    src={heartbeat}
                                    height={25} width={60}
                                    alt="heart beat"
                                />
                            </h2>
                        </div>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col xl={4}>
                                    <Nav className="form-row nav-tabs">
                                        <Nav.Item className="col-xl-6 col-sm-4 col-6 mb-2">
                                            <Nav.Link eventKey="first" className="tab_box d-flex flex-wrap align-content-md-center text-center">
                                                <Image src={landing_tab1} alt="tab icons" />
                                                <p>Doctor Consultation</p>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="col-xl-6 col-sm-4 col-6 mb-2">
                                            <Nav.Link eventKey="second" className="tab_box d-flex flex-wrap align-content-md-center text-center">
                                                <Image src={landing_tab2} alt="tab icons" />
                                                <p>Diagnostics & Imaging</p>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="col-xl-6 col-sm-4 col-6 mb-2">
                                            <Nav.Link eventKey="third" className="tab_box d-flex flex-wrap align-content-md-center text-center">
                                                <Image src={landing_tab3} alt="tab icons" />
                                                <p>Physiotherapy</p>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="col-xl-6 col-sm-4 col-6 mb-2">
                                            <Nav.Link eventKey="fourth" className="tab_box d-flex flex-wrap align-content-md-center text-center">
                                                <Image src={landing_tab4} alt="tab icons" />
                                                <p>Medicines & Medical Supplies</p>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="col-xl-6 col-sm-4 col-6 mb-2">
                                            <Nav.Link eventKey="fifth" className="tab_box d-flex flex-wrap align-content-md-center text-center">
                                                <Image src={landing_tab5} alt="tab icons" />
                                                <p>Nursing</p>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="col-xl-6 col-sm-4 col-6 mb-2">
                                            <Nav.Link eventKey="sixth" className="tab_box d-flex flex-wrap align-content-md-center text-center">
                                                <Image src={landing_tab6} alt="tab icons" />
                                                <p>My Wellness</p>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col xl={8} className="mb-2">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first" className="text-white">
                                            <Image src={landing_tab1} alt="tab icons" />
                                            <h3>Doctor Consultation</h3>
                                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second" className="text-white">
                                            <Image src={landing_tab2} alt="tab icons" />
                                            <h3>Diagnostics & Imaging</h3>
                                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third" className="text-white">
                                            <Image src={landing_tab3} alt="tab icons" />
                                            <h3>Physiotherapy</h3>
                                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fourth" className="text-white">
                                            <Image src={landing_tab4} alt="tab icons" />
                                            <h3>Medicines & Medical Supplies</h3>
                                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fifth" className="text-white">
                                            <Image src={landing_tab5} alt="tab icons" />
                                            <h3>Nursing</h3>
                                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="sixth" className="text-white">
                                            <Image src={landing_tab6} alt="tab icons" />
                                            <h3>My Wellness</h3>
                                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Container>
                </div>
                {/* our services section end */}
                {/* meet our doctor section start */}

                <div className="meet_our_doctors_section">
                    <div className="section_title">
                        <h2>Meet Our Doctors<Image src={heartbeat} height={25} width={60} alt="heart beat" /></h2>
                    </div>
                    <div className="doctor_slider">
                        <div className="single_doctor_detial text-center">
                            <a href="#">
                                <div className="image_box">
                                    <Image src={doctor1} alt="doctor image" />
                                </div>
                                <div className="text_content">
                                    <p>Dr. Archana Andavarapu - Consult A Pulmonologist Online Anytime | CallHealth, India</p>
                                    <span>MBBS, MD (Pulmonology)</span>
                                    <h6>Pulmonology</h6>
                                </div>
                            </a>
                        </div>
                        <div className="single_doctor_detial text-center">
                            <a href="#">
                                <div className="image_box">
                                    <Image src={doctor2} alt="doctor image" />
                                </div>
                                <div className="text_content">
                                    <p>Dr. Archana Andavarapu - Consult A Pulmonologist Online Anytime | CallHealth, India</p>
                                    <span>MBBS, MD (Pulmonology)</span>
                                    <h6>Pulmonology</h6>
                                </div>
                            </a>
                        </div>
                        <div className="single_doctor_detial text-center">
                            <a href="#">
                                <div className="image_box">
                                    <Image src={doctor3} alt="doctor image" />
                                </div>
                                <div className="text_content">
                                    <p>Dr. Archana Andavarapu - Consult A Pulmonologist Online Anytime | CallHealth, India</p>
                                    <span>MBBS, MD (Pulmonology)</span>
                                    <h6>Pulmonology</h6>
                                </div>
                            </a>
                        </div>
                        <div className="single_doctor_detial text-center">
                            <a href="#">
                                <div className="image_box">
                                    <Image src={doctor4} alt="doctor image" />
                                </div>
                                <div className="text_content">
                                    <p>Dr. Archana Andavarapu - Consult A Pulmonologist Online Anytime | CallHealth, India</p>
                                    <span>MBBS, MD (Pulmonology)</span>
                                    <h6>Pulmonology</h6>
                                </div>
                            </a>
                        </div>
                        <div className="single_doctor_detial text-center">
                            <a href="#">
                                <div className="image_box">
                                    <Image src={doctor5} alt="doctor image" />
                                </div>
                                <div className="text_content">
                                    <p>Dr. Archana Andavarapu - Consult A Pulmonologist Online Anytime | CallHealth, India</p>
                                    <span>MBBS, MD (Pulmonology)</span>
                                    <h6>Pulmonology</h6>
                                </div>
                            </a>
                        </div>
                        <div className="single_doctor_detial text-center">
                            <a href="#">
                                <div className="image_box">
                                    <Image src={doctor1} alt="doctor image" />
                                </div>
                                <div className="text_content">
                                    <p>Dr. Archana Andavarapu - Consult A Pulmonologist Online Anytime | CallHealth, India</p>
                                    <span>MBBS, MD (Pulmonology)</span>
                                    <h6>Pulmonology</h6>
                                </div>
                            </a>
                        </div>
                        <div className="single_doctor_detial text-center">
                            <a href="#">
                                <div className="image_box">
                                    <Image src={doctor2} alt="doctor image" />
                                </div>
                                <div className="text_content">
                                    <p>Dr. Archana Andavarapu - Consult A Pulmonologist Online Anytime | CallHealth, India</p>
                                    <span>MBBS, MD (Pulmonology)</span>
                                    <h6>Pulmonology</h6>
                                </div>
                            </a>
                        </div>
                        <div className="single_doctor_detial text-center">
                            <a href="#">
                                <div className="image_box">
                                    <Image src={doctor3} alt="doctor image" />
                                </div>
                                <div className="text_content">
                                    <p>Dr. Archana Andavarapu - Consult A Pulmonologist Online Anytime | CallHealth, India</p>
                                    <span>MBBS, MD (Pulmonology)</span>
                                    <h6>Pulmonology</h6>
                                </div>
                            </a>
                        </div>
                        <div className="single_doctor_detial text-center">
                            <a href="#">
                                <div className="image_box">
                                    <Image src={doctor4} alt="doctor image" />
                                </div>
                                <div className="text_content">
                                    <p>Dr. Archana Andavarapu - Consult A Pulmonologist Online Anytime | CallHealth, India</p>
                                    <span>MBBS, MD (Pulmonology)</span>
                                    <h6>Pulmonology</h6>
                                </div>
                            </a>
                        </div>
                        <div className="single_doctor_detial text-center">
                            <a href="#">
                                <div className="image_box">
                                    <Image src={doctor5} alt="doctor image" />
                                </div>
                                <div className="text_content">
                                    <p>Dr. Archana Andavarapu - Consult A Pulmonologist Online Anytime | CallHealth, India</p>
                                    <span>MBBS, MD (Pulmonology)</span>
                                    <h6>Pulmonology</h6>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                {/* meet our doctor section ends */}

                {/* our customer section start */}
                <section className="our_customer_section">
                    <div className="section_title">
                        <h2>Our Customers
                            <Image src={heartbeat} height={25} width={60} alt="heart beat" /></h2>
                    </div>
                    <div className="customer_slider">
                        <div className="single_customer_detial">
                            <a href="#">
                                <div className="image_box">
                                    <Image src={customer1} alt="customer logo" />
                                </div>
                            </a>
                        </div>
                        <div className="single_customer_detial">
                            <a href="#">
                                <div className="image_box">
                                    <Image src={customer2} alt="customer logo" />
                                </div>
                            </a>
                        </div>
                        <div className="single_customer_detial">
                            <a href="#">
                                <div className="image_box">
                                    <Image src={customer3} alt="customer logo" />
                                </div>
                            </a>
                        </div>
                        <div className="single_customer_detial">
                            <a href="#">
                                <div className="image_box">
                                    <Image src={customer4} alt="customer logo" />
                                </div>
                            </a>
                        </div>
                        <div className="single_customer_detial">
                            <a href="#">
                                <div className="image_box">
                                    <Image src={customer5} alt="customer logo" />
                                </div>
                            </a>
                        </div>
                        <div className="single_customer_detial">
                            <a href="#">
                                <div className="image_box">
                                    <Image src={customer1} alt="customer logo" />
                                </div>
                            </a>
                        </div>
                        <div className="single_customer_detial">
                            <a href="#">
                                <div className="image_box">
                                    <Image src={customer2} alt="customer logo" />
                                </div>
                            </a>
                        </div>
                        <div className="single_customer_detial">
                            <a href="#">
                                <div className="image_box">
                                    <Image src={customer3} alt="customer logo" />
                                </div>
                            </a>
                        </div>
                        <div className="single_customer_detial">
                            <a href="#">
                                <div className="image_box">
                                    <Image src={customer4} alt="customer logo" />
                                </div>
                            </a>
                        </div>
                        <div className="single_customer_detial">
                            <a href="#">
                                <div className="image_box">
                                    <Image src={customer5} alt="customer logo" />
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
                {/* our customer section ends */}
            </div >
        )
    }
}