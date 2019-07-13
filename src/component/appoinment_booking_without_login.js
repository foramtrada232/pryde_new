import React from 'react';
import { Image, Col, Row, Container, FormControl, InputGroup} from 'react-bootstrap';
//Image
import heartbeat from './images/light_blue_heart_beat_icon.svg';
//Import Components
import Select from './search_special';
import Specialities from './specialities';
import Pick_Date_Time from './pick_date_and_time';

export default class Appoinment_booking_without_login extends React.Component {

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
                <Specialities />

                <section className="book_appointment">
                    <Container>
                        <div className="section_title">
                            <h2>Book Your Appointment<Image src={heartbeat} alt="heart beat icon" /></h2>
                        </div>
                        <Row>
                            <Col xl={4} lg={6} className="mb-3">
                                <label>First Name</label>
                                <InputGroup  >
                                    <FormControl placeholder="Enter Your First Name" />
                                </InputGroup>
                            </Col>
                            <Col xl={4} lg={6} className="mb-3">
                                <label>Middle Name</label>
                                <InputGroup>
                                    <FormControl placeholder="Enter Your Middle Name" />
                                </InputGroup>
                            </Col>
                            <Col xl={4} lg={6} className="mb-3">
                                <label>Last Name</label>
                                <InputGroup>
                                    <FormControl placeholder="Enter Your Last Name" />
                                </InputGroup>
                            </Col>
                            <Col xl={4} lg={6} className="mb-3">
                                <label>Date of Birth</label>
                                <div className="input-group">
                                    {/* <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><i className="fa fa-calendar-o" aria-hidden="true"></i></span>
                                    </div> */}
                                    <InputGroup>
                                        <i className="fa fa-calendar-o" aria-hidden="true"></i>
                                        <FormControl placeholder="Date Of Birth" aria-label="" aria-describedby="basic-addon1" />
                                    </InputGroup>
                                </div>
                            </Col>
                            <Col xl={4} lg={6} className="mb-3">
                                <label>Age</label>
                                <InputGroup>
                                    <FormControl placeholder="Enter Your Age" />
                                </InputGroup>
                            </Col>
                            <Col xl={4} lg={6} className="mb-3">
                                <label>Contact Number</label>
                                <InputGroup>
                                    <FormControl placeholder="Enter Your Contact Number" />
                                </InputGroup>
                            </Col>
                            <Col xl={4} lg={6} className="mb-3">
                                <label>Email Address</label>
                                <InputGroup>
                                    <FormControl placeholder="Enter Your Email Address" />
                                </InputGroup>
                            </Col>
                            <Col xl={4} lg={6} className="mb-3">
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
                            <Col xl={4} lg={6} className="mb-3">
                                <label>Upload Previous History/Report/Rescription</label>
                                <div className="upload_btn">
                                    {/* <FormGroup>
                                        <ControlLabel htmlFor="fileUpload" style={{ cursor: "pointer" }}><h3><Label bsStyle="success">Add file</Label></h3>
                                            <FormControl
                                                id="fileUpload"
                                                type="file"
                                                accept=".pdf"
                                                onChange={this.addFile}
                                                style={{ display: "none" }}
                                            />
                                        </ControlLabel>
                                    </FormGroup> */}
                                    <input type="file" id="upload_file" style={{ display: 'none' }} />
                                    <label htmlFor="upload_file">Upload File</label>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
               
                  <Pick_Date_Time />                  

                <section className="tc_apply">
                    <Container>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" defaultValue="" id="i_agree" style={{ display: 'none' }} />
                            <label className="form-check-label" htmlFor="i_agree">I agree all the <a href="#" className="blue_font">Terms & Conditions</a></label>
                        </div>
                        <div className="doctor_details mt-3">
                            <button type="button">submit</button>
                        </div>
                    </Container>
                </section>
            </div>
        )
    }
}



