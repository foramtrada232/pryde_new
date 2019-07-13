import React from 'react';
import { Image, Col, Row, Container, InputGroup, FormControl } from 'react-bootstrap';
//Images
import heartbeat from './images/light_blue_heart_beat_icon.svg';
import search from './images/search.svg';
import atbirth from './images/atbirth.svg';
import child from './images/child.svg';
import const_img from './images/const.svg';
import serinze from './images/serinze.svg';
//Import component
import Specialities from './specialities';
export default class Nursing_list_page extends React.Component {

    render() {

        return (
            <div>
                <section className="page_breadcrumb">
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <div className="page_title">
                                    <h1>Nursing<Image src={heartbeat} alt="heart beat icon" height={20} width={50} /></h1>
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

                <Specialities/>

                <section className="family_doctor">
                    <Container>
                        <div className="section_title">
                            <h2 className="pb-0">Vaccination-child-vaccination<Image src={heartbeat} alt="heart beat icon" height={20} width={50} /></h2>
                        </div>
                        <Row>
                            <Col xl={8} lg={6} md={12}>
                                <div className="pain_mangement_main">
                                    <div className="pain_management baby_care_border">
                                        <p className="font_bold fs">BCG (BCG Vaccine) - Child Vaccination</p>
                                        <p>BCG Vaccine for Child: Endless waiting and multiple trips to a hospital / clinic can be exhausting and in many instances expensive. CallHealth provides BCG vaccination for Children within the comfort of your home at no additional cost. Our experienced nurses will ensure that these vaccinations are administered with utmost care. Reach out to us! <span className="blue_font">[more]</span></p>
                                        <p className="blue_price"><i class="fa fa-inr"></i> 460.27</p>
                                        <div className="doctor_details mt_2">
                                            <button className="ml-0">book an assessment</button>
                                        </div>
                                    </div>
                                    <div className="pain_management_list">
                                        <Row>
                                            <Col lg={4} md={4}>
                                                <a href="#" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                                    <Image src={atbirth} alt="line image" />
                                                    <p>At birth</p>
                                                </a>
                                            </Col>
                                            <Col lg={4} md={4}>
                                                <a href="#" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                                    <Image src={const_img} alt="line image" />
                                                    <p>Recommended at Birth</p>
                                                </a>
                                            </Col>
                                            <Col lg={4} md={4}>
                                                <a href="#" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                                    <Image src={child} alt="line image" />
                                                    <p>Given intradermally</p>
                                                </a>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>

                                <div className="pain_mangement_main">
                                    <div className="pain_management baby_care_border">
                                        <p className="font_bold fs">BCG (BCG Vaccine) - Child Vaccination</p>
                                        <p>BCG Vaccine for Child: Endless waiting and multiple trips to a hospital / clinic can be exhausting and in many instances expensive. CallHealth provides BCG vaccination for Children within the comfort of your home at no additional cost. Our experienced nurses will ensure that these vaccinations are administered with utmost care. Reach out to us! <span className="blue_font">[more]</span></p>
                                        <p className="blue_price"><i class="fa fa-inr"></i> 460.27</p>
                                        <div className="doctor_details mt_2">
                                            <button className="ml-0">book an assessment</button>
                                        </div>
                                    </div>
                                    <div className="pain_management_list">
                                        <Row>
                                            <Col lg={4} md={4}>
                                                <a href="#" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                                    <Image src={atbirth} alt="line image" />
                                                    <p>At birth</p>
                                                </a>
                                            </Col>
                                            <Col lg={4} md={4}>
                                                <a href="#" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                                    <Image src={const_img} alt="line image" />
                                                    <p>Recommended at Birth</p>
                                                </a>
                                            </Col>
                                            <Col lg={4} md={4}>
                                                <a href="#" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                                    <Image src={child} alt="line image" />
                                                    <p>Given intradermally</p>
                                                </a>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>

                                <div className="pain_mangement_main">
                                    <div className="pain_management baby_care_border">
                                        <p className="font_bold fs">BCG (BCG Vaccine) - Child Vaccination</p>
                                        <p>BCG Vaccine for Child: Endless waiting and multiple trips to a hospital / clinic can be exhausting and in many instances expensive. CallHealth provides BCG vaccination for Children within the comfort of your home at no additional cost. Our experienced nurses will ensure that these vaccinations are administered with utmost care. Reach out to us! <span className="blue_font">[more]</span></p>
                                        <p className="blue_price"><i class="fa fa-inr"></i> 460.27</p>
                                        <div className="doctor_details mt_2">
                                            <button className="ml-0">book an assessment</button>
                                        </div>
                                    </div>
                                    <div className="pain_management_list">
                                        <Row>
                                            <Col lg={4} md={4}>
                                                <a href="#" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                                    <Image src={atbirth} alt="line image" />
                                                    <p>At birth</p>
                                                </a>
                                            </Col>
                                            <Col lg={4} md={4}>
                                                <a href="#" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                                    <Image src={const_img} alt="line image" />
                                                    <p>Recommended at Birth</p>
                                                </a>
                                            </Col>
                                            <Col lg={4} md={4}>
                                                <a href="#" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                                    <Image src={child} alt="line image" />
                                                    <p>Given intradermally</p>
                                                </a>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={4} lg={6} md={12}>
                                <div className="pain_mangement_right">
                                    <div className="section_title">
                                        <h2>Popular with Pryde<Image src={heartbeat} alt="heart beat icon" height={20} width={50} /></h2>
                                    </div>

                                    <Row>
                                        <Col lg={12} md={6}>
                                            <div className="baby_care text-center">
                                                <Image src={serinze} />
                                                <p className="text_upper font_bold">NURSING CARE (BASIC NURSING) - 12 HOURS </p>
                                                <p><span className="blue_price" ><i class="fa fa-inr"></i> 1,200</span></p>
                                                <div className="doctor_details mt_2">
                                                    <button className="ml-0">Book an Assessment</button>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={12} md={6}>
                                            <div className="baby_care text-center">
                                                <Image src={serinze} />
                                                <p className="text_upper font_bold">POST SURGICAL CARE(ADVANCED NURSING) - 12 HOURS</p>
                                                <p><span className="blue_price" ><i class="fa fa-inr"></i> 1,200</span></p>
                                                <div className="doctor_details mt_2">
                                                    <button className="ml-0">Book an Assessment</button>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={12} md={6}>
                                            <div className="baby_care text-center">
                                                <Image src={serinze} />
                                                <p className="text_upper font_bold">MOTHER AND CHILD CARE(ADVANCED NURSING) - 12 HOURS</p>
                                                <p><span className="blue_price" ><i class="fa fa-inr"></i> 1,200</span></p>
                                                <div className="doctor_details mt_2">
                                                    <button className="ml-0">Book an Assessment</button>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={12} md={6}>
                                            <div className="baby_care text-center">
                                                <Image src={serinze} />
                                                <p className="text_upper font_bold">PALLIATIVE CARE / END OF LIFE CARE (ADVANCED NURSING) - 24 HOURS</p>
                                                <p><span className="blue_price" ><i class="fa fa-inr"></i> 1,200</span></p>
                                                <div className="doctor_details mt_2">
                                                    <button className="ml-0">Book an Assessment</button>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
               </div>
        )
    }
}



