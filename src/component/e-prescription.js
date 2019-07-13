import React from 'react';
import { Image, Col, Row, Container, InputGroup, FormControl } from 'react-bootstrap';
//Image
import heartbeat from './images/light_blue_heart_beat_icon.svg';

export default class Eprescription extends React.Component {

    render() {

        return (
            <div>
                <section className="page_breadcrumb">
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <div className="page_title">
                                    <h1>e-Prescription<Image src={heartbeat} alt="heart beat icon" height={20} width={50} /></h1>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className="d-flex flex-wrap align-content-center">
                                    <ul>
                                        <li>Patient</li>
                                        <li>e-Prescription</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="container">
                    <div className="doctor_prescription border">
                        <div className="doctor_name float-left">
                            <h4><span className="doctor_blue">Dr.</span> Archana Andavarapu</h4>
                            <p>Dr. Archana Andavarapu - Consult A Pulmonologist Online Anytime | CallHealth, India</p>
                        </div>
                        <div className="quali float-right">
                            <p>Qualification: MBBS, MD (DVL)</p>
                            <p>Speciality: Dermatology</p>
                        </div>
                        <div className="line_before">
                            <InputGroup><FormControl placeholder="Search for medicine..." /></InputGroup>
                        </div>
                        <div className="index_medicine">
                            <span className="medicine_name">Medicine 1 gfhrthrthfg</span>
                            <span className="line"><hr /></span>
                            <span className="medicine_count">10</span>
                        </div>
                        <div className="index_medicine">
                            <span className="medicine_name">Medicine 2</span>
                            <span className="line"><hr /></span>
                            <span className="medicine_count">15</span>
                        </div>
                        <div className="index_medicine">
                            <span className="medicine_name">Medicine 3 </span>
                            <span className="line"><hr /></span>
                            <span className="medicine_count">10</span>
                        </div>
                        <div className="index_medicine">
                            <span className="medicine_name">Medicine 4 </span>
                            <span className="line"><hr /></span>
                            <span className="medicine_count">30</span>
                        </div>
                    </div>
                </section>
               </div>
        )
    }
}



