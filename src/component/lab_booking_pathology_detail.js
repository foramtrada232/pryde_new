import React from 'react';
import { Image, Col, Row, Container, InputGroup, FormControl} from 'react-bootstrap';
//Images
import heartbeat from './images/light_blue_heart_beat_icon.svg';
import about from './images/about.svg';
import edu from './images/edu.svg';
import medNo from './images/medNo.svg';
import doctor from './images/doctor.svg';
import doctor1 from './images/doctor-1.svg';
import search from './images/search.svg';


export default class Lab_booking_pathology_detail extends React.Component {

    render() {

        return (
            <div>
                <section className="page_breadcrumb">
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <div className="page_title">
                                    <h1>Lab-booking-[Pathologist]<Image src={heartbeat} alt="heart beat icon" /></h1>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className="d-flex flex-wrap align-content-center">
                                    <ul>
                                        <li>Doctor</li>
                                        <li>Lab-booking-[Pathologist]</li>
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
                            <InputGroup><FormControl placeholder="Search for Doctors across multiple specialities and more..." /></InputGroup>
                            <Image src={search} alt="searct_icon" />
                        </div>
                    </Container>
                </section>
                <section className="child_vaccination emo_detail_tab doc_profile">
                    <Container>
                        <div className="page_title">
                            <h1>Lab-booking-[Pathologist]<Image src={heartbeat} alt="heart beat icon" /></h1>
                        </div>
                        <div className="row flex-row-reverse">
                            <Col lg={8} className="emotional_row">
                                <Row>
                                    <Col lg={6}>
                                        <div className="doctor_image">
                                            <Image src={doctor1} />
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="doctor_details">
                                            <div className="doctor_name">
                                                <h4><span className="doctor_blue">Dr.</span> Archana Andavarapu</h4>
                                                <p className="doc_descr">Dr. Archana Andavarapu - Consult A Pulmonologist Online Anytime | CallHealth, India</p>
                                            </div>
                                            <div className="dermo_doc_part">
                                                <p className="derma_doc">Dermatology</p>
                                                <p className="derma_content">5 Years of Experience </p>
                                                <p className="derma_content">English, Hindi, Telugu, Tamil</p>
                                            </div>
                                            <div className="doctor_consult">
                                                <p className="doc_fee">Consultation fee :</p>
                                                <p><strike>₹500</strike><span className="blue_price"> ₹249</span></p>
                                                <span className="gray_save">you saved: ₹251</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={4} className="emotional_part">
                                <div className="row tab_ul_part text-center">
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li><a href="#about" role="tab" data-toggle="tab" className="active">
                                            <Image src={about} />
                                            <p className="bcg_tab_heading">About</p>
                                        </a></li>
                                        <li><a href="#edu" role="tab" data-toggle="tab">
                                            <Image src={edu} />
                                            <p className="bcg_tab_heading">Education</p>
                                        </a></li>
                                        <li><a href="#experience" role="tab" data-toggle="tab">
                                            <Image src={doctor} />
                                            <p className="bcg_tab_heading">Experience</p>
                                        </a></li>
                                        <li><a href="#medical" role="tab" data-toggle="tab" className="emotional_box_1">
                                            <Image src={medNo} className="emotional_img" />
                                            <p className="bcg_tab_heading">Medical Registration No.</p>
                                        </a></li>
                                    </ul>
                                </div>
                            </Col>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane active" id="about">
                                <div className="tab_content_part">
                                    <p className="emotional_tab_heading">About</p>
                                    <p>Dr. Archana Andavarapu is an academy-oriented Dermatologist & Cosmetologist who has 5 years of experience in the fields of Clinical & Cosmetic Dermatology with expertise in advanced Cosmetology, Venereology & Leprosy. He has presented & published various papers in the respective fields and has won a Gold Medal Post-graduation - 2015). The services offered are Skin biopsy, Electrocautery (removal of warts, skin tags, corns etc.), Chemical peeling, PRP (Platelet rich plasma - for hair treatment, Chronic non-healing ulcers, Facial rejuvenation), Derma rollers, Vitiligo surgeries, Nail surgeries & many more.</p>
                                </div>
                            </div>
                            <div className="tab-pane" id="edu">
                                <div className="tab_content_part">
                                    <p className="emotional_tab_heading">Education</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum lacus nec nisi viverra, sed lacinia eros cursus. Sed nec enim arcu. Maecenas nec ligula et velit tempus finibus non nec lectus. Pellentesque a tincidunt enim. Donec pretium id velit in pharetra. Fusce tempus, lorem quis egestas sodales, augue metus posuere ligula, vel pellentesque nisi leo vel nibh. Sed ac quam rhoncus, mattis lacus accumsan, lacinia ex. Sed commodo egestas erat, at elementum dolor posuere sed. Vivamus viverra id felis et gravida.</p>
                                </div>
                            </div>
                            <div className="tab-pane" id="experience">
                                <div className="tab_content_part">
                                    <p className="emotional_tab_heading">Experience</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum lacus nec nisi viverra, sed lacinia eros cursus. Sed nec enim arcu. Maecenas nec ligula et velit tempus finibus non nec lectus. Pellentesque a tincidunt enim. Donec pretium id velit in pharetra. Fusce tempus, lorem quis egestas sodales, augue metus posuere ligula, vel pellentesque nisi leo vel nibh. Sed ac quam rhoncus, mattis lacus accumsan, lacinia ex. Sed commodo egestas erat, at elementum dolor posuere sed. Vivamus viverra id felis et gravida.</p>
                                </div>
                            </div>
                            <div className="tab-pane" id="medical">
                                <div className="tab_content_part">
                                    <p className="emotional_tab_heading">Medical Registration No.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum lacus nec nisi viverra, sed lacinia eros cursus. Sed nec enim arcu. Maecenas nec ligula et velit tempus finibus non nec lectus. Pellentesque a tincidunt enim. Donec pretium id velit in pharetra. Fusce tempus, lorem quis egestas sodales, augue metus posuere ligula, vel pellentesque nisi leo vel nibh. Sed ac quam rhoncus, mattis lacus accumsan, lacinia ex. Sed commodo egestas erat, at elementum dolor posuere sed. Vivamus viverra id felis et gravida.</p>
                                </div>
                            </div>
                        </div>
                        <div className="emotional_radio_btn">
                            <Row  className="m-0">
                                <Col lg={1} md={2} sm={2} className="form-check radio_btn p-0">
                                    <input className="form-check-input" type="radio" name="audio" id="audio1" value="option1" checked />
                                    <label className="form-check-label text-center" for="audio1">Audio</label>
                                </Col>
                                <Col lg={1} md={2} sm={2} className="form-check radio_btn p-0">
                                    <input className="form-check-input" type="radio" name="audio" id="video1" value="option2" />
                                    <label className="form-check-label text-center" for="video1">Video</label>
                                </Col>
                                <div className="emotional_button">
                                    <button className="btn">CONSULT</button>
                                </div>
                            </Row>
                        </div>
                    </Container>
                </section>
            </div>
        )
    }
}



