import React from 'react';
import { Image, Col, Row, Container, FormControl, InputGroup } from 'react-bootstrap';
// Images
import heartbeat from './images/light_blue_heart_beat_icon.svg';
import search from './images/search.svg';
import doctor1 from './images/doctor-1.svg';
import doctor2 from './images/doctor-2.svg';
import doctor3 from './images/doctor-3.svg';
import doctor4 from './images/doctor-4.svg';
import doctor5 from './images/doctor-5.svg';

export default class Medicine_supply extends React.Component {
    render() {

        return (
            <div>
                <div className="page_breadcrumb">
                    <Container>
                        <Row>
                            <Col xs lg="6" className="float-left">
                                <div className="page_title">
                                    <h5 className="font-weight-normal">Medicine Supply
                                        <Image
                                            src={heartbeat}
                                            height={25} width={60}
                                            className="d-inline-block align-top"
                                            alt="heart-beat"
                                        /></h5>
                                </div>
                            </Col>
                            <Col xs lg={6} className="float-right">
                                <div className="d-flex flex-wrap align-content-center">
                                    <ul>
                                        <li>Patient</li>
                                        <li>Medicine Supply</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <section className="all_page_search_section">
                    <Container>
                        <div className="search_second_opinion">
                            <h4 className="mb-4 font-weight-bold">Search Conditions</h4>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                            <p className="font-weight-bold mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <div className="input_with_icont">
                                <InputGroup className="mb-4">
                                    <FormControl
                                        placeholder="Search for conditions or doctors..."
                                    />
                                </InputGroup>
                                <Image src={search} alt="searct_icon" />
                            </div>
                        </div>
                    </Container>
                </section>
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
                <section className="medical_records">
                    <Container>
                        <div className="section_title">
                            <h2>Medical Records Collection<img src={heartbeat} alt="heart beat icon" height={20} width={50} /></h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velitesse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id estlaborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut oditaut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolorsit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autemvel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
			pariatur?</p>
                    </Container>
                </section>
            </div >
        )
    }
}