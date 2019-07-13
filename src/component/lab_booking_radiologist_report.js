import React from 'react';
import { Image, Col, Row, Container} from 'react-bootstrap';

import heartbeat from './images/light_blue_heart_beat_icon.svg';
import lab1 from './images/lab-1.svg';

export default class Lab_booking_radiologist extends React.Component {
    render() {

        return (
            <div>
                <div className="page_breadcrumb">
                    <Container>
                        <Row>
                            <Col xs lg="6" className="float-left">
                                <div className="page_title">
                                    <h5 className="font-weight-normal">Lab Booking [Radiologist]
                                        <Image
                                            src={heartbeat}
                                            width="50"
                                            height="20"
                                            className="d-inline-block align-top"
                                            alt="heart-beat"
                                        /></h5>
                                </div>
                            </Col>
                            <Col xs lg={6} className="float-right">
                                <div className="d-flex flex-wrap align-content-center">
                                    <ul>
                                        <li>Patient</li>
                                        <li>Lab Booking [Radiologist]</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <section className="lab_booking">
                    <Container>
                        <div className="section_title mt-3">
                            <h2 className="text-black">Lab Booking [Radiologist]<Image src={heartbeat} alt="heart beat icon"  height={25} width={60} /></h2>
                        </div>
                        <div className="dermatology_doctor_detail lab_detail">
                            <Row>
                                <Col lg={4}>
                                    <div className="lab_image mb-2">
                                        <Image src={lab1} />
                                    </div>
                                </Col>
                                <Col lg={8} className="mb-3">
                                    <div className="doctor_details">
                                        <div className="doctor_name">
                                            <h4>List of Report</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                        </div>
                                        <div className="doctor_overview">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor risus, mollis vitae dolor in, luctus pulvinar nunc. Donec bibendum nisl ac libero porta, vitae sodales nisl porttitor. Etiam erat est, congue vel finibus eget, lacinia at mi. Sed imperdiet dolor justo, at facilisis turpis venenatis quis. Praesent vehicula, est pellentesque sollicitudin laoreet, nibh diam volutpat nulla, vel vestibulum orci erat sit amet quam. Sed dui justo, imperdiet non porta at, hendrerit ac elit. </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={12}  className="doctor_overview">
                                    <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam commodo nibh sed odio placerat, at dapibus mauris scelerisque. Duis ullamcorper ullamcorper felis, sodales mollis ante eleifend feugiat. Curabitur hendrerit pulvinar quam, ut vestibulum lacus luctus non. Suspendisse potenti. Integer quis nisl eros. Nulla ultrices vel nisl in venenatis. Mauris tempus, felis mattis volutpat lacinia, massa eros accumsan risus, condimentum pharetra lacus metus ac urna. Aliquam erat volutpat. Nunc eget pulvinar massa. Nulla lacus justo, consequat quis feugiat eu, pellentesque id purus. Curabitur finibus eros id justo porta dignissim. </p>
                                </Col>
                                <Col xl={12} className="content_height">
                                    <p><span className="font-weight-bold">Center Phone Number:</span> 079 26304010, 079 26301222</p>
                                    <p><span className="font-weight-bold">Home Collection Facility:</span> Yes</p>
                                    <p><span className="font-weight-bold">Home Collection Charges:</span> Rs. 100.00/-</p>
                                    <p><span className="font-weight-bold">Home Collection Number:</span> 079 26304010, 079 26301222</p>
                                    <p><span className="font-weight-bold">Address:</span> A103/104/203, Aasthan Complex, Opposite Polytechnic, Panjara Pole, Ahmedabad, Gujarat-380015</p>
                                    <p><span className="font-weight-bold">Landmark:</span> Opposite Polytechnic</p>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>
                <section className="lab_report">
                    <Container>
                        <div className="doctor_name">
                            <h4>Lab Name 1</h4>
                        </div>
                        <Row>
                            <Col lg={6}>
                                <div className="report_type_box">
                                    <span className="font-weight-bold">Blood</span>
                                    <span className="float-right lab_report_price">Rs. 699</span>
                                    <p className="d-inline-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet est eu dolor </p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="report_type_box">
                                    <span className="font-weight-bold">Concussion</span>
                                    <span className="float-right lab_report_price">Rs. 100</span>
                                    <p className="d-inline-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet est eu dolor </p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="report_type_box">
                                    <span className="font-weight-bold">Blood & Urine</span>
                                    <span className="float-right lab_report_price">Rs. 300</span>
                                    <p className="d-inline-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet est eu dolor </p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="report_type_box">
                                    <span className="font-weight-bold">Alcohol-Induced Hangover</span>
                                    <span className="float-right lab_report_price">Rs. 212</span>
                                    <p className="d-inline-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet est eu dolor </p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="report_type_box">
                                    <span className="font-weight-bold">High Blood Pressure</span>
                                    <span className="float-right lab_report_price">Rs. 252</span>
                                    <p className="d-inline-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet est eu dolor </p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="report_type_box">
                                    <span className="font-weight-bold">Panic Attacks</span>
                                    <span className="float-right lab_report_price">Rs. 366</span>
                                    <p className="d-inline-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet est eu dolor </p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="report_type_box">
                                    <span className="font-weight-bold">Brain Tumor</span>
                                    <span className="float-right lab_report_price">Rs. 545</span>
                                    <p className="d-inline-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet est eu dolor </p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="report_type_box">
                                    <span className="font-weight-bold">Blood Clots</span>
                                    <span className="float-right lab_report_price">Rs. 951</span>
                                    <p className="d-inline-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet est eu dolor </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </div>
        )
    }
}