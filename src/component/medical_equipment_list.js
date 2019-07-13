import React from 'react';
import { Image, Col, Row, Container, InputGroup, FormControl } from 'react-bootstrap';
//Images
import heartbeat from './images/light_blue_heart_beat_icon.svg';
import search from './images/search.svg';
import equip1 from './images/equip_1.png';
import equip2 from './images/equip_2.png';
import equip3 from './images/equip_3.png';
//Import Component
import Specialities from './specialities';

export default class Medical_equipment_list extends React.Component {

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
                                <div className="d-flex flex-wrap align-content-center"  >
                                    <ul>
                                        <li>Patient</li>
                                        <li>Medical Equipment Supplies</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/*  breadcrumb section ends here */}
                {/*  search section starts here */}
                <section className="all_page_search_section">
                    <Container>
                        <label>Medical Supplies at pocket-friendly prices</label>
                        <div className="input_with_icont">
                            <InputGroup><FormControl placeholder="Search for Medical Equipment - Buying & Leasing" /></InputGroup>
                            <Image src={search} alt="searct_icon" />
                        </div>
                    </Container>
                </section>
                {/*  serch section ends here */}
                {/*  speaciality section starts here */}
                <Specialities />
                {/*  speciality section ends here */}
                {/*  medical equipment list section starts here */}
                <section className="dermatology medical_equip_list">
                    <Container>
                        <div className="dermatology_doctor_detail">
                            <Row>
                                <Col lg={4}>
                                    <div className="doctor_image">
                                        <Image src={equip1} />
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <div className="doctor_details">
                                        <div className="doctor_name">
                                            <h4><a href="medical_equipment_detail">Philips BiPAP A40</a></h4>
                                        </div>
                                        <div className="doctor_overview">
                                            <p>The BiPAP A40 ventilator is intended to provide invasive and non-invasive ventilator support to treat adult and paediatric patients weighing over 10 kg (22 lbs) with Obstructive Sleep Apnea (OSA), respiratory Insufficiency, or respiratory failure.</p>
                                            <p>It is intended to be used in home, institutional/hospital, and portable applications such as wheelchairs and guernseys....</p>
                                        </div>
                                        <div className="brand_section">
                                            <p><span>Brand: </span>Philips</p>
                                            <p><span>Rental / Sale / Both : </span>Rental,SaleSale,</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>
                <hr />
                <section className="dermatology medical_equip_list">
                    <Container>
                        <div className="dermatology_doctor_detail">
                            <Row>
                                <Col lg={4}>
                                    <div className="doctor_image">
                                        <Image src={equip2} />
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <div className="doctor_details">
                                        <div className="doctor_name">
                                            <h4><a href="medical_equipment_detail">Philips BiPAP S/TC Series (IN1061x)</a></h4>
                                        </div>
                                        <div className="doctor_overview">
                                            <p>Aligned with the same platform as our System One sleep therapy technology, the Philips Respironics BiPAP S/T Non-Invasive ventilator offers a straightforward user interface and integrated heated humidification for easy set-up and management.</p>
                                        </div>
                                        <div className="brand_section">
                                            <p><span>Brand: </span>Philips</p>
                                            <p><span>Rental / Sale / Both : </span>Rental,SaleSale,</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>
                <hr />
                <section className="dermatology medical_equip_list">
                    <Container>
                        <div className="dermatology_doctor_detail">
                            <Row>
                                <Col lg={4}>
                                    <div className="doctor_image">
                                        <Image src={equip3} />
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <div className="doctor_details">
                                        <div className="doctor_name">
                                            <h4><a href="medical_equipment_detail">Philips Dream station Auto CPAP (INX500S15)</a></h4>
                                        </div>
                                        <div className="doctor_overview">
                                            <p>The Philips Respirations Dream Station systems deliver positive airway pressure therapy for the treatment of Obstructive Sleep Apnoea in spontaneously breathing patients weighing over 30 kg (66 lbs).</p>
                                            <p>It can be used at home or within a hospital/institutional environment.</p>
                                        </div>
                                        <div className="brand_section">
                                            <p><span>Brand: </span>Philips</p>
                                            <p><span>Rental / Sale / Both : </span>Rental,SaleSale,</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>
                <hr />
                {/*  medical equipment list section ends here */}
                <section className="how_it_works_part">
                    <Container>
                        <div className="page_title">
                            <h1>See how it works<Image src={heartbeat} alt="heart beat icon" /></h1>
                        </div>
                        <p className="how_works_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
            aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                        pariatur?</p>
                    </Container>
                </section>
            </div>
        )
    }
}



