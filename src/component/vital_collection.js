import React from 'react';
import { Image, Col, Row, Container } from 'react-bootstrap';
//Image
import calender from './images/calender.png';
import heartbeat from './images/light_blue_heart_beat_icon.svg';


export default class Vital_collection extends React.Component {

    render() {

        return (
            <div>
                {/* breadcrumb section starts here */}
                <section className="page_breadcrumb">
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <div className="page_title">
                                    <h1>Vital Collection<Image src={heartbeat} alt="heart beat icon" /></h1>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className="d-flex flex-wrap align-content-center">
                                    <ul>
                                        <li>Patient</li>
                                        <li>Vital Collection</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* breadcrumb section ends here */}
                {/* appointment booking section starts here */}
                <section className="video_consult_form">
                    <Container>
                        <Row>
                            <Col lg={4}>
                                <div className="form-group">
                                    <label for="firstname">Patient</label>
                                    <input type="text" className="form-control" id="firstname" placeholder="Mayur Mansukhbhai Babariya" />
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="form-group">
                                    <label for="middlename">Weight</label>
                                    <input type="text" className="form-control" id="middlename" placeholder="80 kg" />
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="form-group">
                                    <label for="lastname">Height</label>
                                    <input type="text" className="form-control" id="lastname" placeholder="160 cm" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <div className="form-group">
                                    <label for="contactnum">Doctor</label>
                                    <select className="form-control" id="contactnum">
                                        <option>John Deo</option>
                                        <option>John Deo</option>
                                    </select>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="form-group">
                                    <label>Date Of Birth</label>
                                    <div className="input_with_icont">
                                        <input type="text" className="form-control" id="datepicker1" placeholder="Select Date of Birth" />
                                        <Image src={calender} alt="searct_icon" />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="form-group">
                                    <label for="age">Age</label>
                                    <input type="text" className="form-control" id="age" placeholder="Enter Your Age" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <div className="form-group">
                                    <label for="emailadd">Diabetes Melites</label>
                                    <input type="email" className="form-control" id="emailadd" placeholder="2.31" />
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="form-group">
                                    <label for="age">Gender</label>
                                    <Row className="m-0">
                                        <div className="form-check col-4 p-0">
                                            <input className="form-check-input" type="radio" name="gender" id="gender1" value="option1" checked />
                                            <label className="form-check-label text-center" for="gender1">Male</label>
                                        </div>
                                        <div className="form-check col-4 p-0">
                                            <input className="form-check-input" type="radio" name="gender" id="gender2" value="option2" />
                                            <label className="form-check-label text-center" for="gender2">Female</label>
                                        </div>
                                        <div className="form-check col-4 p-0">
                                            <input className="form-check-input" type="radio" name="gender" id="gender3" value="option3" />
                                            <label className="form-check-label text-center" for="gender3">Other</label>
                                        </div>
                                    </Row>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="form-group">
                                    <label for="BP">Blood Pressure</label>
                                    <input type="email" className="form-control" id="BP" placeholder="less than 140 over 90" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <div className="form-group">
                                    <label for="HR">Heart Rates</label>
                                    <input type="text" className="form-control" id="HR" placeholder="60-99 breaths per minutes" />
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="form-group">
                                    <label for="RR">Repiratory Rates</label>
                                    <input type="text" className="form-control" id="RR" placeholder="12 16 breaths per minute" />
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="form-group">
                                    <label for="PO">Pulse Oximetry</label>
                                    <input type="text" className="form-control" id="PO" placeholder="95-100%" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <div className="form-group">
                                    <label for="dentin">Dentin</label>
                                    <input type="text" className="form-control" id="dentin" placeholder="70-10" />
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="form-group">
                                    <label for="cartilage">Cartilage</label>
                                    <input type="text" className="form-control" id="cartilage" placeholder="10-10" />
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="form-group">
                                    <label for="temp">Temperature(oral)</label>
                                    <input type="text" className="form-control" id="temp" placeholder="97.8'F-99'F" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <div className="form-group">
                                    <label for="carti">Cartilage</label>
                                    <input type="text" className="form-control" id="carti" placeholder="2-10" />
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="form-group">
                                    <label for="colaagen">Collagen</label>
                                    <input type="text" className="form-control" id="colaagen" placeholder="0-0" />
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="form-group">
                                    <label for="CB">Cortical Bone</label>
                                    <input type="text" className="form-control" id="CB" placeholder="70-10" />
                                </div>
                            </Col>
                        </Row>
                        <div className="submit_btn">
                            <button type="submit" className="btn">SUBMIT</button>
                        </div>
                    </Container>
                </section>
                {/* appointment booking section ends here */}
                {/* nurse form detail section starts here */}
                <section className="nurse_form_detail_section">
                    <Container>
                        <div className="form_detail_sec">
                            <Row className=" patient_detail_sec">
                                <div className="col-lg">
                                    <p><span>Patient:</span> Mayur Manshubhai Babariya</p>
                                    <p><span>Age:</span> 28</p>
                                    <p><span>Gender:</span> male</p>
                                    <p><span>Date:</span> 01/06/1993</p>
                                </div>
                                <Col lg={2} className=" detail_sec_btn">
                                    <button className="btn">Send Next</button>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4}>
                                    <div className="form_detail_box">
                                        <p><span>Temperature (Oral):</span> 97.8;F - 99’F</p>
                                        <p><span>Blood Pressure:</span> less than 140 over 90</p>
                                        <p><span>Dentin:</span> 70 - 10</p>
                                        <p><span>Ceramics:</span> 100 - 0</p>
                                        <p><span>Weight:</span> 80 kg</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="form_detail_box">
                                        <p><span>Heart Rate:</span> 60 - 99 breaths per minute</p>
                                        <p><span>Pulse Oximetry:</span> 95 100%</p>
                                        <p><span>Cortical Bone:</span> 70 - 10</p>
                                        <p><span>Collagen:</span> 0 - 0</p>
                                        <p><span>Height:</span> 160 cm</p>
                                    </div>
                                </Col>
                                <Col lg={4} className="detail_border">
                                    <div className="form_detail_box">
                                        <p><span>Respiratory Rate:</span> 12 -16 breaths per...</p>
                                        <p><span>Diabetes Mellitus:</span> 2.31</p>
                                        <p><span>Cartilage:</span> 2 - 70</p>
                                        <p><span>Ceramics:</span> 100 - 0</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="form_detail_sec second_sec">
                            <Row className="patient_detail_sec">
                                <div className="col-lg">
                                    <p><span>Patient:</span> Mayur Manshubhai Babariya</p>
                                    <p><span>Age:</span> 28</p>
                                    <p><span>Gender:</span> male</p>
                                    <p><span>Date:</span> 01/06/1993</p>
                                </div>
                                <Col lg={2} className=" detail_sec_btn">
                                    <button className="btn">Send Next</button>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4}>
                                    <div className="form_detail_box">
                                        <p><span>Temperature (Oral):</span> 97.8;F - 99’F</p>
                                        <p><span>Blood Pressure:</span> less than 140 over 90</p>
                                        <p><span>Dentin:</span> 70 - 10</p>
                                        <p><span>Ceramics:</span> 100 - 0</p>
                                        <p><span>Weight:</span> 80 kg</p>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="form_detail_box">
                                        <p><span>Heart Rate:</span> 60 - 99 breaths per minute</p>
                                        <p><span>Pulse Oximetry:</span> 95 100%</p>
                                        <p><span>Cortical Bone:</span> 70 - 10</p>
                                        <p><span>Collagen:</span> 0 - 0</p>
                                        <p><span>Height:</span> 160 cm</p>
                                    </div>
                                </Col>
                                <Col lg={4} className="detail_border">
                                    <div className="form_detail_box">
                                        <p><span>Respiratory Rate:</span> 12 -16 breaths per...</p>
                                        <p><span>Diabetes Mellitus:</span> 2.31</p>
                                        <p><span>Cartilage:</span> 2 - 70</p>
                                        <p><span>Ceramics:</span> 100 - 0</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>
                {/* nurse form detail section ends here */}
            </div>
            // </div>
        )
    }
}



