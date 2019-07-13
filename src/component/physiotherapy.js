import React from 'react';
import { Image, Col, Row, Container, Nav, Button, InputGroup, FormControl } from 'react-bootstrap';

import heartbeat from './images/dark_blue_heart_beat_icon.svg';
import search from './images/search.svg';
import therapy from './images/therapy.svg';
import pain from './images/pain.svg';
import joint from './images/joint.svg';
import p_care from './images/p_care.svg';
import post_sur from './images/post_sur.svg';
import exe_pre from './images/exe_pre.svg';
import p_package from './images/p_package.svg';



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

                <section className="physiotherapy_tab">
                    <Container>
                        <Nav variant="tabs" defaultActiveKey="/basic" justify className="text-center border-bottom">
                            <Nav.Item>
                                <Nav.Link eventKey="/basic" href="#basic">Physiotherapy-Basic</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="pain" href="#pain">Pain Management</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="join" href="#joint"> Joint Stiffness</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <div className="tab-content">
                            <div className="tab-pane active container" id="basic">
                                <Row>
                                    <Col xl={2} lg={3} md={4} sm={6}>
                                        <a href="physiotherapy_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                            <Image src={pain} alt="line image" />
                                            <p>Pain Management</p>
                                        </a>
                                    </Col>
                                    <Col xl={2} lg={3} md={4} sm={6}>
                                        <a href="physiotherapy_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                            <Image src={joint} alt="line image" />
                                            <p>Joint Stiffness</p>
                                        </a>
                                    </Col>
                                    <Col xl={2} lg={3} md={4} sm={6}>
                                        <a href="physiotherapy_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                            <Image src={p_care} alt="line image" />
                                            <p>Post Amputation Rehabilitation</p>
                                        </a>
                                    </Col>
                                    <Col xl={2} lg={3} md={4} sm={6}>
                                        <a href="physiotherapy_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                            <Image src={post_sur} alt="line image" />
                                            <p>Post Surgical Rehabilitation</p>
                                        </a>
                                    </Col>
                                    <Col xl={2} lg={3} md={4} sm={6}>
                                        <a href="physiotherapy_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                            <Image src={exe_pre} alt="line image" />
                                            <p>Exercise prescription</p>
                                        </a>
                                    </Col>
                                    <Col xl={2} lg={3} md={4} sm={6}>
                                        <a href="physiotherapy_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                            <Image src={p_package} alt="line image" />
                                            <p>Physiotherapy Package</p>
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                            <div className="tab-pane container" id="pain">
                                <Row>
                                    <Col xl={2} lg={3} md={4} sm={6}>
                                        <a href="physiotherapy_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                            <Image src={p_care} alt="line image" />
                                            <p>Post Amputation Rehabilitation</p>
                                        </a>
                                    </Col>
                                    <Col xl={2} lg={3} md={4} sm={6}>
                                        <a href="physiotherapy_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                            <Image src={post_sur} alt="line image" />
                                            <p>Post Surgical Rehabilitation</p>
                                        </a>
                                    </Col>
                                    <Col xl={2} lg={3} md={4} sm={6}>
                                        <a href="physiotherapy_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                            <Image src={exe_pre} alt="line image" />
                                            <p>Exercise prescription</p>
                                        </a>
                                    </Col>
                                    <Col xl={2} lg={3} md={4} sm={6}>
                                        <a href="physiotherapy_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                            <Image src={p_package} alt="line image" />
                                            <p>Physiotherapy Package</p>
                                        </a>
                                    </Col>
                                    <Col xl={2} lg={3} md={4} sm={6}>
                                        <a href="physiotherapy_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                            <Image src={pain} alt="line image" />
                                            <p>Pain Management</p>
                                        </a>
                                    </Col>
                                    <Col xl={2} lg={3} md={4} sm={6}>
                                        <a href="physiotherapy_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                            <Image src={joint} alt="line image" />
                                            <p>Joint Stiffness</p>
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                            <div className="tab-pane container" id="join">
                                <Row>
                                    <Col xl={2} lg={3} md={4} sm={6}>
                                        <a href="physiotherapy_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                            <Image src={pain} alt="line image" />
                                            <p>Pain Management</p>
                                        </a>
                                    </Col>
                                    <Col xl={2} lg={3} md={4} sm={6}>
                                        <a href="physiotherapy_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                            <Image src={joint} alt="line image" />
                                            <p>Joint Stiffness</p>
                                        </a>
                                    </Col>
                                    <Col xl={2} lg={3} md={4} sm={6}>
                                        <a href="physiotherapy_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                            <Image src={post_sur} alt="line image" />
                                            <p>Post Surgical Rehabilitation</p>
                                        </a>
                                    </Col>
                                    <Col xl={2} lg={3} md={4} sm={6}>
                                        <a href="physiotherapy_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                            <Image src={p_care} alt="line image" />
                                            <p>Post Amputation Rehabilitation</p>
                                        </a>
                                    </Col>
                                    <Col xl={2} lg={3} md={4} sm={6}>
                                        <a href="physiotherapy_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                            <Image src={exe_pre} alt="line image" />
                                            <p>Exercise prescription</p>
                                        </a>
                                    </Col>
                                    <Col xl={2} lg={3} md={4} sm={6}>
                                        <a href="physiotherapy_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                            <Image src={p_package} alt="line image" />
                                            <p>Physiotherapy Package</p>
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Container>
                </section>
                <section className="see_how_it_work">
                    <Container>
                        <div className="section_title">
                            <h2 className="text-black">See how it works<img src={heartbeat} alt="heart beat icon" /></h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                            ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                            aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                            sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
                            vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
		                    pariatur?</p>
                    </Container>
                </section>

                <section className="specialities">
                    <Container>
                        <div className="section_title">
                            <h2>Popular with Pride<Image src={heartbeat} width={50} height={20} alt="heart beat icon" /></h2>
                        </div>
                        <div className="popular_pryde_slider">
                                <div className="therapy_care text-center">
                                    <Image src={therapy} alt="therapy image" />
                                    <p className="text_upper font_bold">PHYSIOTHERAPY </p>
                                    <p className="text_upper font_bold">CARE- 7 DAYS</p>
                                    <p><strike className="float-left"><i class="fa fa-inr"></i> 3800</strike><span className="float-right blue_price" ><i class="fa fa-inr"></i> 3420</span></p>
                                    <span className="gray_save">You’ll Save: <i class="fa fa-inr"></i>380</span>
                                    <div className="doctor_details mt_2">
                                        <Button className="ml-0">Book an Assessment</Button>
                                    </div>
                                </div>
                                <div className="therapy_care text-center">
                                    <Image src={therapy} alt="therapy image" />
                                    <p className="text_upper font_bold">PHYSIOTHERAPY </p>
                                    <p className="text_upper font_bold">CARE- 7 DAYS</p>
                                    <p><strike className="float-left"><i class="fa fa-inr"></i> 3800</strike><span className="float-right blue_price" ><i class="fa fa-inr"></i> 12,870</span></p>
                                    <span className="gray_save">You’ll Save: <i class="fa fa-inr"></i>1,143</span>
                                    <div className="doctor_details mt_2">
                                        <Button className="ml-0">Book an Assessment</Button>
                                    </div>
                                </div>
                                <div className="therapy_care text-center">
                                    <Image src={therapy} alt="therapy image" />
                                    <p className="text_upper font_bold">PHYSIOTHERAPY </p>
                                    <p className="text_upper font_bold">CARE- 7 DAYS</p>
                                    <p><strike className="float-left"><i class="fa fa-inr"></i> 3800</strike><span className="float-right blue_price" ><i class="fa fa-inr"></i> 3420</span></p>
                                    <span className="gray_save">You’ll Save: <i class="fa fa-inr"></i>380</span>
                                    <div className="doctor_details mt_2">
                                        <Button className="ml-0">Book an Assessment</Button>
                                    </div>
                                </div>
                                <div className="therapy_care text-center">
                                    <Image src={therapy} alt="therapy image" />
                                    <p className="text_upper font_bold">PHYSIOTHERAPY </p>
                                    <p className="text_upper font_bold">CARE- 7 DAYS</p>
                                    <p><strike className="float-left">3800</strike><span className="float-right blue_price" >3420</span></p>
                                    <span className="gray_save">You’ll Save: ₹380</span>
                                    <div className="doctor_details mt_2">
                                        <Button className="ml-0">Book an Assessment</Button>
                                    </div>
                                </div>
                                <div className="therapy_care text-center">
                                    <Image src={therapy} alt="therapy image" />
                                    <p className="text_upper font_bold">PHYSIOTHERAPY </p>
                                    <p className="text_upper font_bold">CARE- 7 DAYS</p>
                                    <p><strike className="float-left">3800</strike><span className="float-right blue_price" >12,870</span></p>
                                    <span className="gray_save">You’ll Save: ₹1,143</span>
                                    <div className="doctor_details mt_2">
                                        <Button className="ml-0">Book an Assessment</Button>
                                    </div>
                                </div>
                                </div>
                    </Container>
                </section>
            </div >
        )
    }
}