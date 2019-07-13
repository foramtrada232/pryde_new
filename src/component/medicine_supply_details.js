import React from 'react';

import { Image, Button, Col, Row, Container, FormControl, InputGroup } from 'react-bootstrap';
// Images
import heartbeat from './images/light_blue_heart_beat_icon.svg';
import search from './images/search.svg';
import specialities1 from './images/medicine.svg';
import Specialities from './specialities';
// Import Components
export default class Medicine_supply extends React.Component {
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
                                            height={25} width={60}
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

                <div className="medicine_middle_class">
                    <Container>
                        <div className="section_title">
                            <h2 className="pb-0">Protinex Fruit Mix 400gm<Image src={heartbeat} height={25} width={60} alt="heart beat icon" /></h2>
                        </div>
                        <div className="medicine_content">
                            <span className="font_bold fs">What it Does:</span>
                            <span className="medicine_gray_font">1)Protinex powder is the ideal nutritional supplement to help fill up the protein gap in your daily diet. Protinex powder contains hydrolysed peanut Protein. This protein helps with digestion as well as prevents the deterioration of muscles and tissues and helps in boosting immunity. Protinex powder can be consumed by anyone over the age of</span>
                            <p className="medicine_gray_font">2) It is ideal for growing children and adults as well.</p>
                            <span className="medicine_gray_font"><span className="text-dark">Directions for use: </span>You can mix/take Protinex powder with a glass of milk or water. Drink one or two glasses a day for maximum effect. There are no side effects when using Protinex, but it is not recommended for users with a peanut allergy.</span>
                            <p className="blue_price"><i class="fa fa-inr"></i> 600</p>
                            <div className="doctor_details mt_2">
                                <Button className="ml-0 px-4">Order Medicine</Button>
                            </div>
                        </div>
                    </Container>
                </div>

                <div className="specialities pt-5 pb-5">
                    <Container>
                        <div className="section_title">
                            <h2>Similar Products<Image src={heartbeat} height={25} width={60} alt="heart beat icon" /></h2>
                        </div>
                        <Row>
                            <Col lg={4} md={6} sm={12}>
                                <div className="therapy_care text-center mb-5 mt-5">
                                    <Image src={specialities1} />
                                    <p className="text_upper font_bold">Prolyte Fizzs Powder </p>
                                    <p><strike className="float-left"><i class="fa fa-inr"></i>3800</strike><span className="float-right blue_price" ><i class="fa fa-inr"></i> 3420</span></p>
                                    <span className="gray_save">You’ll Save: <i class="fa fa-inr"></i>380</span>
                                    <div className="doctor_details mt_2">
                                        <Button className="ml-0 mt-3 px-4">Order Medicine</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <div className="therapy_care text-center mb-5 mt-5">
                                    <Image src={specialities1} />
                                    <p className="text_upper font_bold">Prolyte Fizzs Powder </p>
                                    <p><strike className="float-left"><i class="fa fa-inr"></i>3800</strike><span className="float-right blue_price" ><i class="fa fa-inr"></i> 12,870</span></p>
                                    <span className="gray_save">You’ll Save: <i class="fa fa-inr"></i>1,143</span>
                                    <div className="doctor_details mt_2">
                                        <Button className="ml-0 mt-3 px-4">Order Medicine</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <div className="therapy_care text-center mb-5 mt-5">
                                    <Image src={specialities1} />
                                    <p className="text_upper font_bold">Prolyte Fizzs Powder </p>
                                    <p><strike className="float-left"><i class="fa fa-inr"></i>3800</strike><span className="float-right blue_price" ><i class="fa fa-inr"></i> 3420</span></p>
                                    <span className="gray_save">You’ll Save: <i class="fa fa-inr"></i>380</span>
                                    <div className="doctor_details mt_2">
                                        <Button className="ml-0 mt-3 px-4">Order Medicine</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div >
        )
    }
}