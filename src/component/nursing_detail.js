import React from 'react';
import { Image, Col, Row, Container, InputGroup, FormControl } from 'react-bootstrap';
//Images
import heartbeat from './images/light_blue_heart_beat_icon.svg';
import about from './images/about.svg';
import search from './images/search.svg';
import why from './images/why.svg';
import do_img from './images/do.svg';
import const_img from './images/const.svg';
import serinze from './images/serinze.svg';
//Import Component
import Specialities from './specialities';

export default class Nursing_detail extends React.Component {

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
                                <div className="d-flex flex-wrap align-content-center" >
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
                            <h2>BCG (BCG Vaccine) - Child Vaccination<Image src={heartbeat} alt="heart beat icon" /></h2>
                        </div>
                        <div className="family_doctor_des">
                            <Row>
                                <Col xl={4} lg={6}>
                                    <ul className="nav nav-tabs row details">
                                        <li className="col-md-6 col-sm-6 mb-3 nav-item active">
                                            <a className="tab_link" data-toggle="tab" href="#about">
                                                <Image src={about} />
                                                <p>What is this</p>
                                            </a>
                                        </li>
                                        <li className="col-md-6 col-sm-6 mb-3 nav-item">
                                            <a className="tab_link" data-toggle="tab" href="#education">
                                                <Image src={why} />
                                                <p>Why is it done</p>
                                            </a>
                                        </li>
                                        <li className="col-md-6 col-sm-6 mb-3 nav-item">
                                            <a className="tab_link" data-toggle="tab" href="#medicalRegNo">
                                                <Image src={do_img} />
                                                <p>Do's & Don'ts</p>
                                            </a>
                                        </li>
                                        <li className="col-md-6 col-sm-6 mb-3 nav-item">
                                            <a className="tab_link" data-toggle="tab" href="#Contra">
                                                <Image src={const_img} />
                                                <p>Contraindications</p>
                                            </a>
                                        </li>
                                    </ul>
                                </Col>
                                <Col xl={8} lg={6}>
                                    <div className="tab-content details">
                                        <div className="tab-pane active" id="about" >
                                            <span className="font_bold fs">BCG Vaccine for Child:</span>
                                            <span>Endless waiting and multiple trips to a hospital / clinic can be exhausting and in many instances expensive. CallHealth provides BCG vaccination for Children within the comfort of your home at no additional cost. Our experienced nurses will ensure that these vaccinations are administered with utmost care. Reach out to us!</span>
                                            <p className="blue_price"><i class="fa fa-inr"></i> 460.27</p>
                                            <div className="doctor_details mt_2">
                                                <button className="mt-5">Book an Assessment</button>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="education">
                                            <h3>Why is it done</h3>
                                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                        <div id="medicalRegNo" className="tab-pane">
                                            <h3>Do's & Don'ts</h3>
                                            <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        </div>
                                        <div id="Contra" className="tab-pane">
                                            <h3>Contraindications</h3>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                    </Container>
                </section>
                <section className="details_des_section">
                    <Container>
                        <Row>
                            <Col lg={6} md={6} className="border-right">
                                <p className="font_bold">Number of Doses :</p>
                                <ul>
                                    <li>At birth</li>
                                </ul>
                            </Col>
                            <Col lg={6} md={6}>
                                <p className="font_bold">Recommended For :</p>
                                <ul>
                                    <li>Recommended at Birth.</li>
                                    <li>Given intradermally.</li>
                                    <li>Sudden weight loss.</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* only class use here for background img  */}
                <section className="specialities py-5">
                    <Container>
                        <div className="section_title">
                            <h2>Popular with Pride<Image src={heartbeat} alt="heart beat icon" height={20} width={50} /></h2>
                        </div>
                        <Row>
                            <Col xl={3} lg={4} md={6}>
                                <div className="baby_care text-center">
                                    <Image src={serinze} />
                                    <p className="text_upper font_bold">NURSING CARE (BASIC NURSING) - 12 HOURS </p>
                                    <p><span className="blue_price" ><i class="fa fa-inr"></i> 1,200</span></p>
                                    <div className="doctor_details mt_2">
                                        <button className="mt-4 ml-0">Book an Assessment</button>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={4} md={6}>
                                <div className="baby_care text-center">
                                    <Image src={serinze} />
                                    <p className="text_upper font_bold">POST SURGICAL CARE(ADVANCED NURSING) - 12 HOURS</p>
                                    <p><span className="blue_price" ><i class="fa fa-inr"></i> 1,200</span></p>
                                    <div className="doctor_details mt_2">
                                        <button className="ml-0">Book an Assessment</button>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={4} md={6}>
                                <div className="baby_care text-center">
                                    <Image src={serinze} />
                                    <p className="text_upper font_bold">MOTHER AND CHILD CARE(ADVANCED NURSING) - 12 HOURS</p>
                                    <p><span className="blue_price" ><i class="fa fa-inr"></i> 1,200</span></p>
                                    <div className="doctor_details mt_2">
                                        <button className="ml-0">Book an Assessment</button>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={4} md={6}>
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
                    </Container>
                </section>
               </div>
        )
    }
}



