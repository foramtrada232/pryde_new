import React from 'react';
import { Image, Col, Row, Container, Nav, Button, Tab, InputGroup, FormControl } from 'react-bootstrap';

import heartbeat from './images/dark_blue_heart_beat_icon.svg';
import Specialities from './specialities';
import about from './images/about.svg';
import why from './images/why.svg';
import differ from './images/differentiator.svg';
import does from './images/do.svg';
import search from './images/search.svg';
import therapy from './images/therapy.svg';
export default class Physiotherapy_list_detail extends React.Component {
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
                <Specialities />
                <div className="family_doctor_des">
                    <Container>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col xl={4}>
                                    <Nav className="form-row nav-tabs">
                                        <Nav.Item className="col-xl-6 col-sm-4 col-6 mb-2">
                                            <Nav.Link eventKey="first" className="tab_box d-flex flex-wrap align-content-md-center">
                                                <Image src={about} alt="tab icons" />
                                                <p>What is this</p>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="col-xl-6 col-sm-4 col-6 mb-2">
                                            <Nav.Link eventKey="second" className="tab_box d-flex flex-wrap align-content-md-center">
                                                <Image src={why} alt="tab icons" />
                                                <p>Why is it done</p>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="col-xl-6 col-sm-4 col-6 mb-2">
                                            <Nav.Link eventKey="third" className="tab_box d-flex flex-wrap align-content-md-center">
                                                <Image src={differ} alt="tab icons" />
                                                <p>Differentiators</p>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="col-xl-6 col-sm-4 col-6 mb-2">
                                            <Nav.Link eventKey="fourth" className="tab_box d-flex flex-wrap align-content-md-center">
                                                <Image src={does} alt="tab icons" />
                                                <p>Do's & Don'ts</p>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col xl={8} className="mb-2">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <span className="font_bold fs">Pain management services:</span>
                                            <span>A lingering back pain, a frozen shoulder, knee pain, neck pain or any joint or muscle pain that might be caused by Osteo Arthritis or any other underlying medical condition needs to be immediately dealt with. You can now get treated within the comfort of your home, by certified, specialized and experienced physiotherapists. Pain can interfere in our daily work and can be a constant source of irritation if unresolved. Hence, seek timely help.</span>
                                            <p className="blue_price"><i class="fa fa-inr"></i> 600</p>
                                            <div className="doctor_details mt_2">
                                                <Button>Book an Assessment</Button>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <h3>Why is it done</h3>
                                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <h3>Differentiators</h3>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fourth">
                                            <h3>Do's & Don'ts</h3>
                                            <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col >
                            </Row >
                        </Tab.Container >
                    </Container>
                </div>
                <section class="details_des_section">
                    <Container>
                        <Row>
                            <Col lg={6} md={6} className="border-right">
                                <p class="font_bold">Techniques Used :</p>
                                <ul>
                                    <li>Electro-therapy like IFT, TENS and cryotherapy</li>
                                    <li>Stretching</li>
                                    <li>Muscle strengthening</li>
                                    <li>Biomechanical correction</li>
                                    <li>Taping</li>
                                </ul>
                            </Col>
                            <Col lg={6} md={6}>
                                <p class="font_bold">Special Precautions :</p>
                                <ul>
                                    <li>Consistent pain for 24 hours.</li>
                                    <li>Unconsciousness.</li>
                                    <li>Sudden weight loss.</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section class="specialities">
                    <Container>
                        <div class="section_title">
                            <h2>Popular with Pride<Image src={heartbeat} width={50} height={20} alt="heart beat icon" /></h2>
                        </div>
                        <Row>
                            <Col lg={4} md={6} sm={12}>
                                <div class="therapy_care text-center">
                                    <Image src={therapy} alt="therapy image" />
                                    <p class="text_upper font_bold">PHYSIOTHERAPY </p>
                                    <p class="text_upper font_bold">CARE- 7 DAYS</p>
                                    <p><strike class="float-left"><i class="fa fa-inr"></i> 3800</strike><span class="float-right blue_price" ><i class="fa fa-inr"></i> 3420</span></p>
                                    <span class="gray_save">You’ll Save: <i class="fa fa-inr"></i>380</span>
                                    <div class="doctor_details mt_2">
                                        <Button className="ml-0">Book an Assessment</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <div class="therapy_care text-center">
                                    <Image src={therapy} alt="therapy image" />
                                    <p class="text_upper font_bold">PHYSIOTHERAPY </p>
                                    <p class="text_upper font_bold">CARE- 7 DAYS</p>
                                    <p><strike class="float-left"><i class="fa fa-inr"></i> 3800</strike><span class="float-right blue_price" ><i class="fa fa-inr"></i> 12,870</span></p>
                                    <span class="gray_save">You’ll Save: <i class="fa fa-inr"></i>1,143</span>
                                    <div class="doctor_details mt_2">
                                        <Button className="ml-0">Book an Assessment</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <div class="therapy_care text-center">
                                    <Image src={therapy} alt="therapy image" />
                                    <p class="text_upper font_bold">PHYSIOTHERAPY </p>
                                    <p class="text_upper font_bold">CARE- 7 DAYS</p>
                                    <p><strike class="float-left"><i class="fa fa-inr"></i> 3800</strike><span class="float-right blue_price" ><i class="fa fa-inr"></i> 3420</span></p>
                                    <span class="gray_save">You’ll Save: <i class="fa fa-inr"></i>380</span>
                                    <div class="doctor_details mt_2">
                                        <Button className="ml-0">Book an Assessment</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div >
        )
    }
}