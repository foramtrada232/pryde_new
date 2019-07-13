import React from 'react';
import { Image, Col, Row, Container } from 'react-bootstrap';
// Images
import heartbeat from './images/light_blue_heart_beat_icon.svg';
import search from './images/search.svg';
import calender from './images/calender.png';
//Import Component
import Specialities from './specialities';

export default class VideoConsult extends React.Component {
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
                <section className="all_page_search_section">
                    <Container>
                        <label>See a Specialist from home within minutes.</label>
                        <div className="input_with_icont">
                            <input type="text" className="form-control" placeholder="Search for Doctors across multiple specialities and more..." />
                            <Image src={search} alt="searct_icon" />
                        </div>
                    </Container>
                </section>
                <Specialities/>
                <section className="video_consult_form">
                    <Container>
                        <div className="page_title">
                            <h1>Video Consultation Appointment  <Image src={heartbeat} alt="heart beat icon" /></h1>
                        </div>
                        <Row>

                            <Col lg={4}>
                                <div className="form-group">
                                    <label htmlFor="firstname">First Name</label>
                                    <input type="text" className="form-control" id="firstname" placeholder="Enter Your First Name" />
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="form-group">
                                    <label htmlFor="middlename">Middle Name</label>
                                    <input type="text" className="form-control" id="middlename" placeholder="Enter Your Middle Name" />
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="form-group">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input type="text" className="form-control" id="lastname" placeholder="Enter Your Last Name" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
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
                                    <label htmlFor="age">Age</label>
                                    <input type="text" className="form-control" id="age" placeholder="Enter Your Age" />
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="form-group">
                                    <label htmlFor="contactnum">Contact Number</label>
                                    <input type="email" className="form-control" id="contactnum" placeholder="Enter Your Contact Number" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <div className="form-group">
                                    <label htmlFor="emailadd">Email Address</label>
                                    <input type="email" className="form-control" id="emailadd" placeholder="Enter Your Email Address" />
                                </div>
                            </Col>
                            <Col lg={4} >
                            <label>Gender</label>
                                   <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-light active">
                                    <input type="radio" name="gender" id="gender1" autoComplete="off" defaultChecked /> Male
					                </label>
                                <label className="btn btn-light">
                                    <input type="radio" name="gender" id="gender2" autoComplete="off" /> Female
				                	</label>
                                <label className="btn btn-light">
                                    <input type="radio" name="gender" id="gender3" autoComplete="off" /> Other
				                	</label>
                            </div>
                            </Col>
                            <Col lg={4}>
                                <div className="form-group">
                                    <label htmlFor="doctor_select" className="control-label">Video Consultation with Doctor</label>
                                    <select className="form-control" id="doctor_select">
                                        <option>Dr. Archana Andavarapu</option>
                                        <option>Dr. Archana Andavarapu</option>
                                    </select>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="pick_date_time">
                    <Container>
                        <div className="date_heading">
                            <div className="main">
                                <div className="page_title">
                                    <h1>Pick a Date</h1>
                                </div>
                                <div className="page_link">
                                    <a href="#">Next 7 Days</a>
                                </div>
                            </div>
                        </div>
                        <div className="row date_div">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="date" id="date1" defaultValue="option1" />
                                <label className="form-check-label" htmlFor="date1">TODAY<h1>15</h1></label>

                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="date" id="date2" defaultValue="option2" defaultChecked />
                                <label className="form-check-label" htmlFor="date2">TOMORROW<h1>16</h1></label>

                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="date" id="date3" defaultValue="option3" />
                                <label className="form-check-label" htmlFor="date3">TUESDAY<h1>17</h1></label>

                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="date" id="date4" defaultValue="option4" />
                                <label className="form-check-label" htmlFor="date4">WEDNESDAY<h1>18</h1></label>

                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="date" id="date5" defaultValue="option5" />
                                <label className="form-check-label" htmlFor="date5">THURSDAY<h1>19</h1></label>

                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="date" id="date6" defaultValue="option6" />
                                <label className="form-check-label" htmlFor="date6">FRIDAY<h1>20</h1></label>

                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="date" id="date7" defaultValue="option7" />
                                <label className="form-check-label" htmlFor="date7">SATURDAY<h1>15</h1></label>

                            </div>
                        </div>
                        <div className="time_heading">
                            <div className="page_title">
                                <h1>Pick a Time</h1>
                            </div>
                        </div>
                        <div className="time_radio_btn">
                            <Row>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="time" id="time1" defaultValue="option1" />
                                    <label className="form-check-label" htmlFor="time1">10AM - 11AM</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="time" id="time2" defaultValue="option2" />
                                    <label className="form-check-label" htmlFor="time2">11AM - 12AM</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="time" id="time3" defaultValue="option3" defaultChecked />
                                    <label className="form-check-label" htmlFor="time3">12PM - 1PM</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="time" id="time4" defaultValue="option4" />
                                    <label className="form-check-label" htmlFor="time4">1PM - 2PM</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="time" id="time5" defaultValue="option5" />
                                    <label className="form-check-label" htmlFor="time5">2PM - 3PM</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="time" id="time6" defaultValue="option6" />
                                    <label className="form-check-label" htmlFor="time6">3PM - 4PM</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="time" id="time7" defaultValue="option7" />
                                    <label className="form-check-label" htmlFor="time7">4PM - 5PM</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="time" id="time8" defaultValue="option8" />
                                    <label className="form-check-label" htmlFor="time8">5PM - 6PM</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="time" id="time9" defaultValue="option9" />
                                    <label className="form-check-label" htmlFor="time9">6PM - 7PM</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="time" id="time10" defaultValue="option10" />
                                    <label className="form-check-label" htmlFor="time10">7PM - 8PM</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="time" id="time11" defaultValue="option11" />
                                    <label className="form-check-label" htmlFor="time11">8PM - 9PM</label>
                                </div>
                            </Row>
                        </div>
                    </Container>
                </section>
                <section className="terms_condition">
                    <Container>
                        <Row>
                            <div className="col-12 form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    I agree all the <a href="#"> Terms & Conditions</a>
                                </label>
                            </div>
                            <div className="col-12 submit_btn">
                                <button type="submit" className="btn">SUBMIT</button>
                            </div>
                        </Row>
                    </Container>
                </section>
               </div>
        )
    }
}