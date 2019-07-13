import React from 'react';
import { Image, Col, Row, Container } from 'react-bootstrap';
//Images
import heartbeat from './images/light_blue_heart_beat_icon.svg';
import search from './images/search.svg';
import equip1 from './images/equip_1.png';
import phone from './images/phone.png';
import select_home from './images/select_home.png';
import select_hos2 from './images/select_hos2.png';
//Import Component
import Specialities from './specialities';

export default class Medical_equipment_detail extends React.Component {

    render() {

        return (
            <div>
                {/* breadcrumb section starts here */}
                <section className="page_breadcrumb">
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <div className="page_title">
                                    <h1>Medical Equipment Supplies<Image src={heartbeat} alt="heart beat icon" /></h1>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className="d-flex flex-wrap align-content-center">
                                    <ul>
                                        <li>Patient</li>
                                        <li>Medical Equipment Supplies</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* breadcrumb section ends here */}
                {/* search section starts here */}
                <section className="all_page_search_section">
                    <Container>
                        <label>Medical Supplies at pocket-friendly prices</label>
                        <div className="input_with_icont">
                            <input type="text" className="form-control" placeholder="Search for Medical Equipment - Buying & Leasing" />
                            <Image src={search} alt="searct_icon" />
                        </div>
                    </Container>
                </section>
                {/* serch section ends here */}
                {/* speaciality section starts here */}
                <Specialities/>
                {/* speciality section ends here */}
                {/* medical equipment list section starts here */}
                <section className="dermatology medical_equip_list">
                    <Container>
                        <div className="dermatology_doctor_detail">
                            <Row>
                                <div className="col-lg-4">
                                    <div className="doctor_image">
                                        <Image src={equip1} />
                                    </div>
                                </div>
                                <Col lg={8}>
                                    <div className="doctor_details">
                                        <div className="doctor_name">
                                            <h4>Philips BiPAP A40</h4>
                                        </div>
                                        <div className="doctor_overview">
                                            <p>The BiPAP A40 ventilator is intended to provide invasive and non-invasive ventilator support to treat adult and paediatric patients weighing over 10 kg (22 lbs) with Obstructive Sleep Apnea (OSA), respiratory Insufficiency, or respiratory failure.</p>
                                            <p>It is intended to be used in home, institutional/hospital, and portable applications such as wheelchairs and guernseys....</p>
                                            <p>It is not intended to be used as a transport ventilator, and is not intended for life support.</p>
                                        </div>
                                        <div className="brand_section">
                                            <p><span>Brand: </span>Philips</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            {/* select location section starts */}
                            <div className="select_location">
                                <Row>
                                    <Col lg={6} className="select_location_part">
                                        <div className="spinner_sec">
                                            <label className="float-left">Select Quantity</label>
                                            <input className="float-right" type="number" defaultValue="1" min="0" max="500" step="1" />
                                        </div>
                                        <div className="spinner_sec">
                                            <label className="float-left">Requirement</label>
                                            <div className="float-right radio_sec">
                                                <Row className="m-0">
                                                    <div className="form-check col-6 p-0">
                                                        <input className="form-check-input" type="radio" name="gender" id="gender1" defaultValue="option1" />
                                                        <label className="form-check-label text-center" htmlFor="gender1">buy</label>
                                                    </div>
                                                    <div className="form-check col-6 p-0">
                                                        <input className="form-check-input" type="radio" name="gender" id="gender2" defaultValue="option2" defaultChecked />
                                                        <label className="form-check-label text-center" htmlFor="gender2">Rent</label>
                                                    </div>
                                                </Row>
                                            </div>
                                        </div>
                                        <div className="radio_sec2">
                                            <form className="row">
                                                <label className="col-lg-4 radio-inline">
                                                    <input type="radio" name="optradio" className="float-left" defaultChecked />Day
							                      </label>
                                                <label className="col-lg-4 radio-inline">
                                                    <input type="radio" name="optradio" className="float-left" />Week
							                    </label>
                                                <label className="col-lg-4 radio-inline">
                                                    <input type="radio" name="optradio" className="float-left" />Month
							                    </label>
                                            </form>
                                        </div>
                                        <div className="spinner_sec spinner_section">
                                            <label className="float-right spinn_label">1 Day (s) Package Selected</label>
                                            <input className="float-left" type="number" defaultValue="1" min="0" max="500" step="1" />
                                        </div>
                                    </Col>
                                    <Col lg={6} className="select_location_part part_border">
                                        <div className="location_select">
                                            <p className="location_heading text-center">Select Location</p>
                                            <div className="row m-0">
                                                <div className="form-check col-6">
                                                    <input className="form-check-input" type="radio" name="location" id="home" defaultValue="option1" />
                                                    <label className="form-check-label text-center" htmlFor="home">
                                                        <Image src={select_home} />
                                                        <p className="text-center radio_heading">Home</p>
                                                    </label>
                                                </div>
                                                <div className="form-check col-6">
                                                    <input className="form-check-input" type="radio" name="location" id="hospital" defaultValue="option2" defaultChecked />
                                                    <label className="form-check-label text-center" htmlFor="hospital">
                                                        <Image src={select_hos2} />
                                                        <p className="text-center radio_heading">Hospital</p>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            {/* select location section ends */}
                        </div>
                    </Container>
                </section>
                {/* medical equipment list section ends here */}
                {/* enquire section starts here */}
                <section className="enquire_section">
                    <Row>
                        <Col lg={6} className="enquire_part1">
                            <div className="enquire_btn">
                                <button className="btn">ENQUIRE</button>
                            </div>
                        </Col>
                        <Col lg={6} className="enquire_part2">
                            <Row className="enquire_row">
                                <Col xl={2} lg={3} className="text-center">
                                    <p className="or">or</p>
                                </Col>
                                <Col lg={1} md={6} sm={6}>
                                    <div className="phone_img">
                                        <Image src={phone} />
                                    </div>
                                </Col>
                                <Col lg={7} md={6} sm={6}>
                                    <div className="call_sec">
                                        <p className="call_us">call Us @</p>
                                        <p className="number">(+91) 91 33 55 77 99</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>
                {/* enquire section ends here */}
                {/* equipemnt tab section starts here */}
                <section className="medical_equip_section physio_tab_part">
                    <Container>
                        <div className="tab_part text-center">
                            <ul className="nav nav-tabs" role="tablist">
                                <li><a href="#description" role="tab" data-toggle="tab" className="active">product description</a></li>
                                <li><a href="#dimensions" role="tab" data-toggle="tab">dimensions</a></li>
                                <li><a href="#directions" role="tab" data-toggle="tab">directions for use</a></li>
                            </ul>
                            <div className="tab-content equip_detail_tab">
                                <div className="tab-pane active" id="description">
                                    <p>The BiPAP A40 ventilator is intended to provide invasive and non-invasive ventilator support to treat adult and paediatric patients weighing over 10 kg (22 lbs) with Obstructive Sleep Apnea (OSA), respiratory Insufficiency, or respiratory failure.</p>
                                    <p>It is intended to be used in home, institutional/hospital, and portable applications such as wheelchairs and guernseys.</p>
                                    <p>It is not intended to be used as a transport ventilator, and is not intended for life support.</p>
                                </div>
                                <div className="tab-pane" id="dimensions">
                                    <p>It is intended to be used in home, institutional/hospital, and portable applications such as wheelchairs and guernseys.</p>
                                    <p>The BiPAP A40 ventilator is intended to provide invasive and non-invasive ventilator support to treat adult and paediatric patients weighing over 10 kg (22 lbs) with Obstructive Sleep Apnea (OSA), respiratory Insufficiency, or respiratory failure.</p>
                                    <p>It is not intended to be used as a transport ventilator, and is not intended for life support.</p>
                                </div>
                                <div className="tab-pane" id="directions">
                                    <p>It is intended to be used in home, institutional/hospital, and portable applications such as wheelchairs and guernseys.</p>
                                    <p>It is not intended to be used as a transport ventilator, and is not intended for life support.</p>
                                    <p>The BiPAP A40 ventilator is intended to provide invasive and non-invasive ventilator support to treat adult and paediatric patients weighing over 10 kg (22 lbs) with Obstructive Sleep Apnea (OSA), respiratory Insufficiency, or respiratory failure.</p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                {/* equipment tab section ends here</section>  */}
            </div>
        )
    }
}



