import React from 'react';
import { Image, Col, Row, Container } from 'react-bootstrap';
//Image
import heartbeat from './images/light_blue_heart_beat_icon.svg';
import hospital_logo from './images/hospital_logo.png';

export default class EprescriptionV2 extends React.Component {

    render() {

        return (
            <div>
                <section className="page_breadcrumb">
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <div className="page_title">
                                    <h1>e-Prescription<Image src={heartbeat} alt="heart beat icon" /></h1>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className="d-flex flex-wrap align-content-center">
                                    <ul>
                                        <li>Doctor</li>
                                        <li>e-Prescription</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="e_prescription_section prescription_main_part presc_v2_sec">
                    <Container>
                        <div className="prescription_section prescriprion_sharing">
                            <div className="doc_desc presc_head_sec">
                                <Row>
                                    <Col xl={1} lg={2} md={2} sm={2}>
                                        <Image src={hospital_logo} />
                                    </Col>
                                    <Col xl={8} lg={10} md={10} sm={10} className="doctor_name">
                                        <h4><span className="doctor_blue">Dr.</span> Archana Andavarapu</h4>
                                        <p>Dr. Archana Andavarapu - Consult A Pulmonologist Online Anytime | CallHealth, India</p>
                                        <p><span className="presc_subhead">Qualification:</span> MBBS, MD (DVL)</p>
                                        <p><span className="presc_subhead">Speciality:</span> Dermatology</p>
                                    </Col>
                                    <Col xl={3} lg={12} md={12} sm={12} className="doctor_qualification">
                                        <p className="float-right">751 Victoria 123 Street, South Statue 204</p>
                                        <p className="float-right">Hometown, US 1234</p>
                                        <p className="float-right"><span className="presc_subhead">PH:</span> (207) 808 2014 2014</p>
                                        <p className="float-right"><span className="presc_subhead">FAX:</span> (207) 808 2015 2202</p>
                                    </Col>
                                </Row>
                            </div>
                            <div className="patient_detail_sec">
                                <p><span>Patient:</span> Mayur Manshubhai Babariya</p>
                                <p><span>Age:</span> 28</p>
                                <p><span>Weight:</span> 80 kg</p>
                                <p><span>Height:</span> 160 cm</p>
                                <p><span>Blood Pressure:</span> 140/90 mmHg</p>
                            </div>
                            <div className="medicine_list_part presc_detail_sec">
                                <Row className="medicine_search">
                                    <Col lg={5}>
                                        <input type="text" className="form-control" placeholder="Search for medicine..." />
                                    </Col>
                                    <Col lg={5}>
                                        <select className="form-control labSelect" id="doctor_select" placeholder="Search for lab">
                                            <option>Search for lab</option>
                                            <option>Dr. Archana Andavarapu</option>
                                        </select>
                                    </Col>
                                    <Col lg={2}>
                                        <div className="add_btn">
                                            <button className="btn">ADD</button>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="table presc_section1 table-responsive">
                                    <Row>
                                        <div className="t_title">Acetaminophen</div>
                                        <div className="t_line"></div>
                                        <div className="t_value"><input type="text" defaultValue="10" /></div>
                                        <div className="val_2"> _  </div>
                                        <div className="t_value val_2">
                                            <input type="text" defaultValue="1" /> -
					                    	<input type="text" defaultValue="0" /> -
					                    	<input type="text" defaultValue="1" />
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="t_title">Citalopram</div>
                                        <div className="t_line"></div>
                                        <div className="t_value"><input type="text" defaultValue="15" /></div>
                                        <div className="val_2"> _  </div>
                                        <div className="t_value val_2">
                                            <input type="text" defaultValue="1" /> -
					                    	<input type="text" defaultValue="1" /> -
					                    	<input type="text" defaultValue="1" />
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="t_title">Lexapro</div>
                                        <div className="t_line"></div>
                                        <div className="t_value"><input type="text" defaultValue="30" /></div>
                                        <div className="val_2"> _  </div>
                                        <div className="t_value val_2">
                                            <input type="text" defaultValue="1" /> -
					                    	<input type="text" defaultValue="0" /> -
					      	                <input type="text" defaultValue="0" />
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="t_title">Omeprazole</div>
                                        <div className="t_line"></div>
                                        <div className="t_value"><input type="text" defaultValue="10" /></div>
                                        <div className="val_2"> _  </div>
                                        <div className="t_value val_2">
                                            <input type="text" defaultValue="0" /> -
					                      	<input type="text" defaultValue="0" /> -
					                    	<input type="text" defaultValue="1" />
                                        </div>
                                    </Row>
                                </div>
                                <textarea className="form-control" rows="3" placeholder="Remark"></textarea>
                            </div>
                            <div className="table presc_section2 table-responsive">
                                <p>MediTrust Diagnostics Laboratories</p>
                                <Row>
                                    <div className="t_title">RAPID TB ANTIGEN MPT64</div>
                                    <div className="t_line"></div>
                                </Row>
                                <Row>
                                    <div className="t_title">RED BLOOD CELLS; RBC COUNT</div>
                                    <div className="t_line"></div>
                                </Row>
                                <Row>
                                    <div className="t_title">RED CELL DISTRIBUTION WIDTH; RDW </div>
                                    <div className="t_line"></div>
                                </Row>
                                <Row>
                                    <div className="t_title">RETICULOCYTE COUNT</div>
                                    <div className="t_line"></div>
                                </Row>
                                <Row>
                                    <div className="t_title">RETICULIN IgA ANTIBODY </div>
                                    <div className="t_line"></div>
                                </Row>
                            </div>
                        </div>
                    </Container>
                </section>
            </div>
        )
    }
}



