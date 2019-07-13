import React from 'react';
import { Image, Col, Row, Container, InputGroup, FormControl } from 'react-bootstrap';
//Images
import heartbeat from './images/light_blue_heart_beat_icon.svg';
import search from './images/search.svg';
import doctor1 from './images/doctor-1.svg';
import doctor2 from './images/doctor-2.png';
import doctor3 from './images/doctor-3.png';
import line1 from './images/1.svg';
import line2 from './images/2.svg';
import line3 from './images/3.svg';
import line4 from './images/4.svg';
import line5 from './images/5.svg';

export default class Family_doctor extends React.Component {

    render() {

        return (
            <div>
                <section className="page_breadcrumb">
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <div className="page_title">
                                    <h1>Doctor Consultation<Image src={heartbeat} alt="heart beat icon" height={20} width={50} /></h1>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className="d-flex flex-wrap align-content-center" >
                                    <ul>
                                        <li>Patient</li>
                                        <li>Doctor Consultation</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="all_page_search_section">
                    <Container>
                        <label>See a Specialist from home within minutes.</label>
                        <div className="input_with_icont">
                            <InputGroup><FormControl placeholder="Search for Doctors across multiple specialities and more..." /></InputGroup>
                            <Image src={search} alt="searct_icon" />
                        </div>
                    </Container>
                </section>


                <section className="dermatology">
                    <Container>
                        <div className="section_title">
                            <h2 className="text-black">Family Doctor<Image src={heartbeat} alt="heart beat icon" height={20} width={50} /></h2>
                        </div>
                        <div className="dermatology_doctor_detail">
                            <Row>
                                <Col lg={4}>
                                    <div className="doctor_image">
                                        <Image src={doctor1} />
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <div className="doctor_details">
                                        <div className="doctor_name">
                                            <h4><span className="doctor_blue">Dr.</span> Archana Andavarapu</h4>
                                            <p>Dr. Archana Andavarapu - Consult A Pulmonologist Online Anytime | CallHealth, India</p>
                                        </div>
                                        <div className="doctor_overview">
                                            <h6>Doctor Overview</h6>
                                            <p>Dr. Archana Andavarapu is an academy-oriented Dermatologist and Cosmetologist who has 5 years of experience in the fields of Clinical and Cosmetic Dermatology with expertise in advanced Cosmetology, Venereology and Leprosy. He has presented and published various papers in the...</p>
                                        </div>
                                        <div className="doctor_consult">
                                            <p><strike><i class="fa fa-inr"></i> 500</strike><span className="blue_price">249</span></p>
                                            <span className="gray_save">you saved: <i class="fa fa-inr"></i> 251</span>
                                        </div>
                                        <a href="family_doctor_detail"><button type="button">Consult</button></a>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line1} alt="line image" />
                                        <p>Qualification:</p>
                                        <p>MBBS,MD (DVL)</p>
                                    </a>
                                </Col>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line2} alt="line image" />
                                        <p>Speciality:</p>
                                        <p>Dermatology</p>
                                    </a>
                                </Col>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line3} alt="line image" />
                                        <p>Years of Experience:</p>
                                        <p>5</p>
                                    </a>
                                </Col>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src="images/4.png" alt="line image" />
                                        <p>Available days:</p>
                                        <p>Mon - Sat</p>
                                    </a>
                                </Col>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line5} alt="line image" />
                                        <p>Available timings: </p>
                                        <p>	08:00 AM to 03:00 PM</p>
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <hr />
                    <Container>
                        <div className="dermatology_doctor_detail">
                            <Row>
                                <Col lg={4}>
                                    <div className="doctor_image">
                                        <Image src={doctor2} />
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <div className="doctor_details">
                                        <div className="doctor_name">
                                            <h4><span className="doctor_blue">Dr.</span> Archana Andavarapu</h4>
                                            <p>Dr. Archana Andavarapu - Consult A Pulmonologist Online Anytime | CallHealth, India</p>
                                        </div>
                                        <div className="doctor_overview">
                                            <h6>Doctor Overview</h6>
                                            <p>Dr. Archana Andavarapu is an academy-oriented Dermatologist and Cosmetologist who has 5 years of experience in the fields of Clinical and Cosmetic Dermatology with expertise in advanced Cosmetology, Venereology and Leprosy. He has presented and published various papers in the...</p>
                                        </div>
                                        <div className="doctor_consult">
                                            <p><strike><i class="fa fa-inr"></i> 500</strike><span className="blue_price">249</span></p>
                                            <span className="gray_save">you saved: <i class="fa fa-inr"></i> 251</span>
                                        </div>
                                        <a href="family_doctor_detail"><button type="button">Consult</button></a>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line1} alt="line image" />
                                        <p>Qualification:</p>
                                        <p>MBBS,MD (DVL)</p>
                                    </a>
                                </Col>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line2} alt="line image" />
                                        <p>Speciality:</p>
                                        <p>Dermatology</p>
                                    </a>
                                </Col>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line3} alt="line image" />
                                        <p>Years of Experience:</p>
                                        <p>5</p>
                                    </a>
                                </Col>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line4} alt="line image" />
                                        <p>Available days:</p>
                                        <p>Mon - Sat</p>
                                    </a>
                                </Col>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src="images/5.png" alt="line image" />
                                        <p>Available timings: </p>
                                        <p>	08:00 AM to 03:00 PM</p>
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <hr />
                    <Container>
                        <div className="dermatology_doctor_detail">
                            <Row>
                                <Col lg={4}>
                                    <div className="doctor_image">
                                        <Image src={doctor3} />
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <div className="doctor_details">
                                        <div className="doctor_name">
                                            <h4><span className="doctor_blue">Dr.</span> Archana Andavarapu</h4>
                                            <p>Dr. Archana Andavarapu - Consult A Pulmonologist Online Anytime | CallHealth, India</p>
                                        </div>
                                        <div className="doctor_overview">
                                            <h6>Doctor Overview</h6>
                                            <p>Dr. Archana Andavarapu is an academy-oriented Dermatologist and Cosmetologist who has 5 years of experience in the fields of Clinical and Cosmetic Dermatology with expertise in advanced Cosmetology, Venereology and Leprosy. He has presented and published various papers in the...</p>
                                        </div>
                                        <div className="doctor_consult">
                                            <p><strike><i class="fa fa-inr"></i> 500</strike><span className="blue_price">249</span></p>
                                            <span className="gray_save">you saved: <i class="fa fa-inr"></i> 251</span>
                                        </div>
                                        <a href="family_doctor_detail"><button type="button">Consult</button></a>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line1} alt="line image" />
                                        <p>Qualification:</p>
                                        <p>MBBS,MD (DVL)</p>
                                    </a>
                                </Col>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line2} alt="line image" />
                                        <p>Speciality:</p>
                                        <p>Dermatology</p>
                                    </a>
                                </Col>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line3} alt="line image" />
                                        <p>Years of Experience:</p>
                                        <p>5</p>
                                    </a>
                                </Col>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line4} alt="line image" />
                                        <p>Available days:</p>
                                        <p>Mon - Sat</p>
                                    </a>
                                </Col>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line5} alt="line image" />
                                        <p>Available timings: </p>
                                        <p>	08:00 AM to 03:00 PM</p>
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>
               </div>
        )
    }
}



