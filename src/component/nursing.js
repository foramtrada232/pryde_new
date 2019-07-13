import React from 'react';
import { Image, Col, Row, Container, InputGroup, FormControl} from 'react-bootstrap';
//Images
import heartbeat from './images/light_blue_heart_beat_icon.svg';
import transactional from './images/transactional.svg';
import search from './images/search.svg';
import child from './images/child.svg';
import adult from './images/adult.svg';
import basic_nursing from './images/basic_nursing.svg';
import advance_nursing from './images/advance_nursing.svg';
import p_package from './images/p_package.svg';
import serinze from './images/serinze.svg';
import smart_patient from './images/smart_patient.svg';
import connect_with_doc from './images/connect-with-doc.svg';
import smart_pharmacy from './images/smart_pharmacy.svg';
import smart_pathology from './images/smart_pathology.svg';
import smart_radio from './images/smart-radio.svg';
import reports from './images/reports.svg';
import cloud_storage from './images/cloud-storage.svg';
import desk from './images/desk.svg';
import digital from './images/digital.svg';
import seamless from './images/seamless.svg';
import call_center from './images/call-center.svg';
import benefit_calender from './images/benefit-calender.svg';
import track from './images/track.svg';

export default class Nursing extends React.Component {

    render() {

        return (
            <div>
                <section className="page_breadcrumb">
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <div className="page_title">
                                    <h1>Nursing<Image src={heartbeat} alt="heart beat icon" /></h1>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className="d-flex flex-wrap align-content-center">
                                    <ul>
                                        <li>Patient</li>
                                        <li>Nursing</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="all_page_search_section">
                    <Container>
                        <label>Care & Support for your lobed ones.</label>
                        <div className="input_with_icont">
                            <InputGroup><FormControl placeholder="Search for Nursing Services and more…" /></InputGroup>

                            <Image src={search} alt="searct_icon" />
                        </div>
                    </Container>
                </section>

                <section className="nursing_main">
                    <Container>
                        <div className="section_title">
                            <h2>Nursing<Image src={heartbeat} alt="heart beat icon" /></h2>
                        </div>
                        <div className="specialities_toggle_menu">
                            <Row>
                                <Col lg={2} md={4} sm={6} className="border-right">
                                    <a href="#" className="feature_detail_card_blue blue_image">
                                        <Image src={transactional} alt="line image" />
                                        <hr />
                                        <p className="text-dark font_bold">Transactional</p>
                                    </a>
                                </Col>
                                <Col lg={2} md={4} sm={6} className="border-right">
                                    <a href="#" className="feature_detail_card_blue blue_image">
                                        <Image src={child} alt="line image" />
                                        <hr />
                                        <p className="text-dark font_bold">Child Vaccination</p>
                                    </a>
                                </Col>
                                <Col lg={2} md={4} sm={6} className="border-right">
                                    <a href="#" className="feature_detail_card_blue blue_image">
                                        <Image src={adult} alt="line image" />
                                        <hr />
                                        <p className="text-dark font_bold">Adult Vaccination</p>
                                    </a>
                                </Col>
                                <Col lg={2} md={4} sm={6} className="border-right">
                                    <a href="#" className="feature_detail_card_blue blue_image">
                                        <Image src={basic_nursing} alt="line image" />
                                        <hr />
                                        <p className="text-dark font_bold">Basic Nursing Care</p>
                                    </a>
                                </Col>
                                <Col lg={2} md={4} sm={6} className="border-right">
                                    <a href="#" className="feature_detail_card_blue blue_image">
                                        <Image src={advance_nursing} alt="line image" />
                                        <hr />
                                        <p className="text-dark font_bold">Advanced Nursing Care</p>
                                    </a>
                                </Col>
                                <Col lg={2} md={4} sm={6}>
                                    <a href="#" className="feature_detail_card_blue blue_image">
                                        <Image src={p_package} alt="line image" />
                                        <hr />
                                        <p className="text-dark font_bold">Rehabilitation Care</p>
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>
                {/* only class use here for background Image  */}
                <section className="specialities popular_spacing">
                    <Container>
                        <div className="section_title">
                            <h2>Popular with Pride<Image src={heartbeat} alt="heart beat icon" /></h2>
                        </div>
                        <div className="row mt-4">
                            <Col xl={3} lg={4} md={6}>
                                <div className="baby_care text-center">
                                    <Image src={serinze} />
                                    <p className="text_upper font_bold">NURSING CARE (BASIC NURSING) - 12 HOURS </p>
                                    <p><span className="blue_price" ><i class="fa fa-inr"></i> 1,200</span></p>
                                    <div className="doctor_details mt_2">
                                        <button className="mt-4 p-1 ml-0">Book an Assessment</button>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={4} md={6}>
                                <div className="baby_care text-center">
                                    <Image src={serinze} />
                                    <p className="text_upper font_bold">POST SURGICAL CARE(ADVANCED NURSING) - 12 HOURS</p>
                                    <p><span className="blue_price" ><i class="fa fa-inr"></i> 1,200</span></p>
                                    <div className="doctor_details mt_2">
                                        <button className="mt-0 p-1 ml-0">Book an Assessment</button>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={4} md={6}>
                                <div className="baby_care text-center">
                                    <Image src={serinze} />
                                    <p className="text_upper font_bold">MOTHER AND CHILD CARE(ADVANCED NURSING) - 12 HOURS</p>
                                    <p><span className="blue_price" ><i class="fa fa-inr"></i> 1,200</span></p>
                                    <div className="doctor_details mt_2">
                                        <button className="mt-0 p-1 ml-0">Book an Assessment</button>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={4} md={6}>
                                <div className="baby_care text-center">
                                    <Image src={serinze} />
                                    <p className="text_upper font_bold">PALLIATIVE CARE / END OF LIFE CARE (ADVANCED NURSING) - 24 HOURS</p>
                                    <p><span className="blue_price" ><i class="fa fa-inr"></i> 1,200</span></p>
                                    <div className="doctor_details mt_2">
                                        <button className="mt-0 p-1 ml-0">Book an Assessment</button>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </Container>
                </section>

                <section className="features_nursing">
                    <Container>
                        <div className="section_title">
                            <h2>Features<Image src={heartbeat} alt="heart beat icon" /></h2>
                        </div>
                        <Row>
                            <Col lg={4} md={6}>
                                <div className="feature_detail_card">
                                    <Image src={smart_patient} />
                                    <p className="font_bold">Smart Patient</p>
                                    <p>Patient can connect with each and every facility of the hospital i.e Pharmacy ,Pathology, Radiology , </p>
                                    <hr />
                                    <div className="doctor_details">
                                        <button className="mt-0 px-5 py-3 ml-0">Read More</button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="feature_detail_card">
                                    <Image src={connect_with_doc} />
                                    <p className="font_bold">Smart Doctor</p>
                                    <p>The end to end connectivity between the patient and Doctor where  both can do all things </p>
                                    <hr />
                                    <div className="doctor_details" />
                                    <button className="mt-0 px-5 py-3 ml-0">Read More</button>
                                </div>
                            </Col>

                            <Col lg={4} md={6}>
                                <div className="feature_detail_card">
                                    <Image src={desk} />
                                    <p className="font_bold">Unified Registration Desk</p>
                                    <p>With Pryde Unified Registration Desk for Hospitals , patient can register for themeselves, can </p>
                                    <hr />
                                    <div className="doctor_details">
                                        <button className="mt-0 px-5 py-3 ml-0">Read More</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4} md={6}>
                                <div className="feature_detail_card">
                                    <Image src={smart_pharmacy} />
                                    <p className="font_bold">Smart Pharmacy</p>
                                    <p>Pryde is dedicated to delivering a personalized, high-touch customer experience to help </p>
                                    <hr />
                                    <div className="doctor_details">
                                        <button className="mt-0 px-5 py-3 ml-0">Read More</button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="feature_detail_card">
                                    <Image src={smart_pathology} />
                                    <p className="font_bold">Smart Pathology</p>
                                    <p>Pryde Pathology Digital Health Services brings Patient as well as provider side to go online for </p>
                                    <hr />
                                    <div className="doctor_details">
                                        <button className="mt-0 px-5 py-3 ml-0">Read More</button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="feature_detail_card">
                                    <Image src={smart_radio} />
                                    <p className="font_bold">Smart Radiology</p>
                                    <p>Medical imaging is the technique and process of creating visual representations of the interior of </p>
                                    <hr />
                                    <div className="doctor_details">
                                        <button className="mt-0 px-5 py-3 ml-0">Read More</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    {/* </div> */}
                </section>

                <section className="specialities_blue w-100">
                    <Container>
                        <div className="section_title">
                            <h2 className="text-white">Benefits<Image src={heartbeat} alt="heart beat icon" /></h2>
                        </div>
                        <Row>
                            <Col xl={3} lg={4} md={6} sm={12} className="border border-left-0 border-top-0">
                                <div className="feature_detail_card_blue">
                                    <Image src={reports} />
                                    <hr />
                                    <p className="font_bold text-white">Advanced Reports And Analytics</p>
                                    <p>Smart hospital keeps all patient related data on healthcloud and generates alalytical reports</p>
                                </div>
                            </Col>
                            <Col xl={3} lg={4} md={6} sm={12} className="border border-left-0 border-top-0">
                                <div className="feature_detail_card_blue">
                                    <Image src={cloud_storage} />
                                    <hr />
                                    <p className="font_bold">Cloud Storage</p>
                                    <p>All the data stored on a cloud so that it can be accessed from anywhere. </p>
                                </div>
                            </Col>
                            <Col xl={3} lg={4} md={6} sm={12} className="border border-left-0 border-top-0">
                                <div className="feature_detail_card_blue">
                                    <Image src={digital} />
                                    <hr />
                                    <p className="font_bold">Digital Payment Enabled</p>
                                    <p>Digital mode of payment enables patients to pay bill online </p>
                                </div>
                            </Col>
                            <Col xl={3} lg={4} md={6} sm={12} className="border border-top-0 border-right-0">
                                <div className="feature_detail_card_blue">
                                    <Image src={seamless} />
                                    <hr />
                                    <p className="font_bold">Seamless Connectivity</p>
                                    <p>Patients can consult with doctors seamlessly via Telemedecine clinic app and it’s user friendly...</p>
                                </div>
                            </Col>
                            <Col xl={3} lg={4} md={6} sm={12} className="border border-left-0 border-bottom-0 border-top-0">
                                <div className="feature_detail_card_blue">
                                    <Image src={call_center} />
                                    <hr />
                                    <p className="font_bold">Inbound Call Center Services</p>
                                    <p>24*7 help desk solution for handling paitent queries. </p>
                                </div>
                            </Col>
                            <Col xl={3} lg={4} md={6} sm={12} className="border border-left-0 border-bottom-0 border-top-0">
                                <div className="feature_detail_card_blue">
                                    <Image src={benefit_calender} />
                                    <hr />
                                    <p className="font_bold">Single Calendar For Online And Walk-In-Patient</p>
                                    <p>All the appointments can be viewed on a single calander for both online patients as well as...</p>
                                </div>
                            </Col>
                            <Col xl={3} lg={4} md={6} sm={12} className="border border-left-0 border-bottom-0 border-top-0">
                                <div className="feature_detail_card_blue">
                                    <Image src={connect_with_doc} />
                                    <hr />
                                    <p className="font_bold">Connect With Any Hospital / Doctor</p>
                                    <p>Patients can communicate with any doctor and with any hospital/clinic by using online...</p>
                                </div>
                            </Col>
                            <Col xl={3} lg={4} md={6} sm={12}>
                                <div className="feature_detail_card_blue">
                                    <Image src={track} />
                                    <hr />
                                    <p className="font_bold">Live Tracking</p>
                                    <p>Patients can live track ambulance location with respect to their current location.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
               </div>
        )
    }
}



