import React from 'react';
import { Image, Col, Row, Container } from 'react-bootstrap';
//Images
import heartbeat from './images/light_blue_heart_beat_icon.svg';
import hospital_logo from './images/hospital_logo.png';


export default class Radiologist extends React.Component {

    render() {

        return (
            <div>
                <section class="page_breadcrumb">
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <div class="page_title">
                                    <h1>e-Prescription<Image src={heartbeat} alt="heart beat icon" /></h1>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div class="d-flex flex-wrap align-content-center">
                                    <ul>
                                        <li>Doctor</li>
                                        <li>e-Prescription</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section class="e_prescription_section prescription_main_part">
                    <Container>
                        <div class="share_button_section">
                            <div class="share_btn">
                                <button class="btn active">Shared to Pathologist</button>
                                <button class="btn">Shared to Radiologist</button>
                            </div>
                        </div>
                        <div class="prescription_section prescriprion_sharing">
                            <div class="doc_desc presc_head_sec">
                                <Row>
                                    <Col xl={1} lg={2} md={2} sm={2}>
                                        <Image src={hospital_logo} />
                                    </Col>
                                    <div class="col-xl-8 col-lg-10 col-md-10 col-sm-10 doctor_name">
                                        <h4><span class="doctor_blue">Dr.</span> Archana Andavarapu</h4>
                                        <p>Dr. Archana Andavarapu - Consult A Pulmonologist Online Anytime | CallHealth, India</p>
                                        <p><span class="presc_subhead">Qualification:</span> MBBS, MD (DVL)</p>
                                        <p><span class="presc_subhead">Speciality:</span> Dermatology</p>
                                    </div>
                                    <div class="col-xl-3 col-lg-12 col-md-12 col-sm-12 doctor_qualification">
                                        <p class="float-right">751 Victoria 123 Street, South Statue 204</p>
                                        <p class="float-right">Hometown, US 1234</p>
                                        <p class="float-right"><span class="presc_subhead">PH:</span> (207) 808 2014 2014</p>
                                        <p class="float-right"><span class="presc_subhead">FAX:</span> (207) 808 2015 2202</p>
                                    </div>
                                </Row>
                            </div>
                            <div class="patient_detail_sec">
                                <p><span>Patient:</span> Mayur Manshubhai Babariya</p>
                                <p><span>Age:</span> 28</p>
                                <p><span>Weight:</span> 80 kg</p>
                                <p><span>Height:</span> 160 cm</p>
                                <p><span>Blood Pressure:</span> 140/90 mmHg</p>
                            </div>
                            <div class="medicine_list_part presc_detail_sec">
                                <div class="row medicine_search">
                                    <Col lg={4}>
                                        <input type="text" class="form-control" placeholder="Search for medicine..." />
                                    </Col>
                                    <Col lg={4}>
                                        <select class="form-control" id="doctor_select" placeholder="Search for lab">
                                            <option>Search for lab</option>
                                            <option>Dr. Archana Andavarapu</option>
                                        </select>
                                    </Col>
                                    <Col lg={4}>
                                        <input type="text" class="form-control" placeholder="Remark" />
                                    </Col>
                                </div>
                                <div class="table presc_section1">
                                    <Row>
                                        <div class="t_title">Acetaminophen</div>
                                        <div class="t_line"></div>
                                        <div class="t_value">10</div>
                                        <div class="val_2"> _  </div>
                                        <div class="t_value val_2">1-0-1</div>
                                    </Row>
                                    <Row>
                                        <div class="t_title">Citalopram</div>
                                        <div class="t_line"></div>
                                        <div class="t_value">15</div>
                                        <div class="val_2"> _  </div>
                                        <div class="t_value val_2">0-1-1</div>
                                    </Row>
                                    <Row>
                                        <div class="t_title">Lexapro</div>
                                        <div class="t_line"></div>
                                        <div class="t_value">10</div>
                                        <div class="val_2"> _  </div>
                                        <div class="t_value val_2">0-0-1</div>
                                    </Row>
                                    <Row>
                                        <div class="t_title">Omeprazole</div>
                                        <div class="t_line"></div>
                                        <div class="t_value">30</div>
                                        <div class="val_2"> _  </div>
                                        <div class="t_value val_2">1-1-0</div>
                                    </Row>
                                </div>
                            </div>
                            <div class="table presc_section2">
                                <p>MediTrust Diagnostics Laboratories</p>
                                <Row>
                                    <div class="t_title">RAPID TB ANTIGEN MPT64</div>
                                    <div class="t_line"></div>
                                </Row>
                                <Row>
                                    <div class="t_title">RED BLOOD CELLS; RBC COUNT</div>
                                    <div class="t_line"></div>
                                </Row>
                                <Row>
                                    <div class="t_title">RED CELL DISTRIBUTION WIDTH; RDW </div>
                                    <div class="t_line"></div>
                                </Row>
                                <Row>
                                    <div class="t_title">RETICULOCYTE COUNT</div>
                                    <div class="t_line"></div>
                                </Row>
                                <Row>
                                    <div class="t_title">RETICULIN IgA ANTIBODY </div>
                                    <div class="t_line"></div>
                                </Row>
                            </div>
                        </div>
                    </Container>
                </section>
            </div>
        )
    }
}



