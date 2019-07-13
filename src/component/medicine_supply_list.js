import React from 'react';
import '../../public/js/custom';
import '../../public/css/style_s.css'

import { Image, Button, Col, Row, Container, FormControl, InputGroup } from 'react-bootstrap';
// Images
import heartbeat from './images/light_blue_heart_beat_icon.svg';
import search from './images/search.svg';
import Specialities from './specialities';
// Import Components
export default class Medicine_supply_list extends React.Component {
    render() {

        return (
            <div>
                <div className="page_breadcrumb">
                    <Container>
                        <Row>
                            <Col xs lg="6" className="float-left">
                                <div className="page_title">
                                    <h5 className="font-weight-normal">Medicine Supply
                                        <Image
                                            src={heartbeat}
                                            height={20} width={50}
                                            className="d-inline-block align-top"
                                            alt="heart-beat"
                                        /></h5>
                                </div>
                            </Col>
                            <Col xs lg={6} className="float-right">
                                <div className="d-flex flex-wrap align-content-center">
                                    <ul>
                                        <li>Patient</li>
                                        <li>Medicine Supply</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="all_page_search_section">
                    <Container>
                        <label>Gone are the days, when you had to run around pharmacies</label>
                        <div className="input_with_icont">
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Search for Medicine and Medical Supplies and more..."
                                    aria-label="search anything"
                                />
                            </InputGroup>
                            <Image
                                src={search}
                                width="20"
                                height="20"
                                className="d-inline-block align-top"
                                alt="search icon"
                            />
                        </div>
                    </Container>
                </div>
                <Specialities />

                <section className="baby_care_title">
                    <Container>
                        <div className="section_title">
                            <h2 className=" pb-0">Baby Care<img src={heartbeat} alt="heart beat icon" width={50} height={20} /></h2>
                        </div>
                        <div className="pain_management baby_care_border">
                            <p className="font_bold fs">Protinex Fruit Mix 400gm</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia <span className="blue_font">[more]</span></p>
                            <p className="blue_price"><i class="fa fa-inr"></i> 600</p>
                            <div className="doctor_details mt_2">
                                <Button className="ml-0">Order Medicine</Button>
                            </div>
                        </div>
                        <hr />
                        <div className="pain_management baby_care_border">
                            <p className="font_bold fs">Protinex Fruit Mix 400gm</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia <span className="blue_font">[more]</span></p>
                            <p className="blue_price"><i class="fa fa-inr"></i> 600</p>
                            <div className="doctor_details mt_2">
                                <Button className="ml-0">Order Medicine</Button>
                            </div>
                        </div>
                        <hr />
                        <div className="pain_management baby_care_border">
                            <p className="font_bold fs">Protinex Fruit Mix 400gm</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia <span className="blue_font">[more]</span></p>
                            <p className="blue_price"><i class="fa fa-inr"></i> 600</p>
                            <div className="doctor_details mt_2">
                                <Button className="ml-0">Order Medicine</Button>
                            </div>
                        </div>
                    </Container>
                </section>

            </div >
        )
    }
}