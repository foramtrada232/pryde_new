import React from 'react';
import { Image, Col, Row, Container,InputGroup, FormControl } from 'react-bootstrap';

import heartbeat from './images/dark_blue_heart_beat_icon.svg';
import physi1 from './images/physi1.svg';
import physi2 from './images/physi2.svg';
import physi3 from './images/physi3.svg';
import search from './images/search.svg';
import therapy from './images/therapy.svg';

export default class Physiotherapy_list extends React.Component {
    render() {

        return (
            <div>
                <div className="page_breadcrumb">
                    <Container>
                        <Row>
                            <Col xs lg="6" className="float-left">
                                <div className="page_title">
                                    <h5 className="font-weight-normal">Physiotherapy
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
                                        <li>Physiotherapy</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <section className="all_page_search_section">
                    <Container>
                        <label>Physio plans that won't hold you back!</label>
                        <div className="input_with_icont">
                            <InputGroup>
                                <FormControl
                                    placeholder="Search for Physiotherapy Services and more…"
                                />
                            </InputGroup>
                            <Image src={search} alt="searct_icon" />
                        </div>
                    </Container>
                </section>
                <section className="family_doctor">
                    <Container>
                        <div className="section_title">
                            <h2>Physiotherapy-basic-pain-management<Image src={heartbeat} alt="heart beat icon" /></h2>
                        </div>
                        <Row>
                            <Col xl={8} lg={6} md={12}>
                                <div className="pain_mangement_main">
                                    <div className="pain_management baby_care_border">
                                        <p className="font_bold fs">Pain management services</p>
                                        <p>Pain management services: A lingering back pain, a frozen shoulder, knee pain, neck pain or any joint or muscle pain that might be caused by Osteo Arthritis or any other underlying medical condition needs to be immediately dealt with. You can now get treated within the comfort of your home, by certified, specialized and experienced physiotherapists. Pain can interfere in our daily work and can be a constant source of irritation if unresolved. Hence, seek timely help.<span className="blue_font">[more]</span></p>
                                        <p className="blue_price"><i class="fa fa-inr"></i> 460.27</p>
                                        <div className="doctor_details mt_2">
                                            <button>book an assessment</button>
                                        </div>
                                    </div>
                                    <div className="pain_management_list">
                                        <Row>
                                            <Col lg={4} md={4}>
                                                <a href="physiotherapy_list_detail.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                                    <Image src={physi1} alt="line image" />
                                                    <p>Stretching</p>
                                                </a>
                                            </Col>
                                            <Col lg={4} md={4}>
                                                <a href="physiotherapy_list_detail.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                                    <Image src={physi2} alt="line image" />
                                                    <p>Taping</p>
                                                </a>
                                            </Col>
                                            <Col lg={4} md={4}>
                                                <a href="physiotherapy_list_detail.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                                    <Image src={physi3} alt="line image" />
                                                    <p>Unconsciousness</p>
                                                </a>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>

                                <div className="pain_mangement_main">
                                    <div className="pain_management baby_care_border">
                                        <p className="font_bold fs">Pain management services</p>
                                        <p>Pain management services: A lingering back pain, a frozen shoulder, knee pain, neck pain or any joint or muscle pain that might be caused by Osteo Arthritis or any other underlying medical condition needs to be immediately dealt with. You can now get treated within the comfort of your home, by certified, specialized and experienced physiotherapists. Pain can interfere in our daily work and can be a constant source of irritation if unresolved. Hence, seek timely help.<span className="blue_font">[more]</span></p>
                                        <p className="blue_price"><i class="fa fa-inr"></i> 460.27</p>
                                        <div className="doctor_details mt_2">
                                            <button>book an assessment</button>
                                        </div>
                                    </div>
                                    <div className="pain_management_list">
                                        <Row>
                                            <Col lg={4} md={4}>
                                                <a href="physiotherapy_list_detail.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                                    <Image src={physi1} alt="line image" />
                                                    <p>Stretching</p>
                                                </a>
                                            </Col>
                                            <Col lg={4} md={4}>
                                                <a href="physiotherapy_list_detail.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                                    <Image src={physi2} alt="line image" />
                                                    <p>Taping</p>
                                                </a>
                                            </Col>
                                            <Col lg={4} md={4}>
                                                <a href="physiotherapy_list_detail.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                                    <Image src={physi3} alt="line image" />
                                                    <p>Unconsciousness</p>
                                                </a>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>

                            </Col>

                            <Col xl={4} lg={6} md={12}>
                                <div className="pain_mangement_right">
                                    <div className="section_title">
                                        <h2>Popular with Pryde<Image src={heartbeat} alt="heart beat icon" /></h2>
                                    </div>

                                    <Row>
                                        <Col lg={12} md={6}>
                                            <div className="baby_care text-center">
                                                <Image src={therapy} />
                                                <p className="text_upper font_bold">PHYSIOTHERAPY CARE- 7 DAYS</p>
                                                <p><strike className="float-left"><i class="fa fa-inr"></i> 3800</strike><span className="float-right blue_price" ><i class="fa fa-inr"></i> 3420</span></p>
                                                <span className="gray_save">You’ll Save: <i class="fa fa-inr"></i>380</span>
                                                <div className="doctor_details mt_2">
                                                    <button>Book an Assessment</button>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={12} md={6}>
                                            <div className="baby_care text-center">
                                                <Image src={therapy} />
                                                <p className="text_upper font_bold">PHYSIOTHERAPY CARE- 30 DAYS</p>
                                                <p><strike className="float-left"><i class="fa fa-inr"></i> 3800</strike><span className="float-right blue_price" ><i class="fa fa-inr"></i> 3420</span></p>
                                                <span className="gray_save">You’ll Save: <i class="fa fa-inr"></i>380</span>
                                                <div className="doctor_details mt_2">
                                                    <button>Book an Assessment</button>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={12} md={6}>
                                            <div className="baby_care text-center">
                                                <Image src={therapy} />
                                                <p className="text_upper font_bold">PHYSIOTHERAPY CARE- 7 DAYS</p>
                                                <p><strike className="float-left"><i class="fa fa-inr"></i> 3800</strike><span className="float-right blue_price" ><i class="fa fa-inr"></i> 3420</span></p>
                                                <span className="gray_save">You’ll Save: <i class="fa fa-inr"></i>380</span>
                                                <div className="doctor_details mt_2">
                                                    <button>Book an Assessment</button>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div >
        )
    }
}