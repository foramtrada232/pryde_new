import React from 'react';
import { Image, Col, Row, Container, FormControl, InputGroup } from 'react-bootstrap';
// Images
import heartbeat from './images/dark_blue_heart_beat_icon.svg';
import search from './images/search.svg';
import specialities1 from './images/medicine.svg';
import specialities2 from './images/otc.svg';
import specialities3 from './images/baby_care.svg';
import specialities4 from './images/p_care.svg';
import specialities5 from './images/Gastroenterology.svg';

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
                <section class="specialities">
                    <Container>
                        <div class="section_title">
                            <h2>Specialities<Image src={heartbeat} alt="heart beat icon"  height={25} width={60} /></h2>
                        </div>
                        <div class="specialities_toggle_menu">
                            <Row>
                                <Col xl={2} lg={3} md={4} sm={6}>
                                    <a href="#" class="speciality_menu_links d-flex flex-wrap align-content-center">
                                        <Image src={specialities1} alt="line image" />
                                        <p>Prescription Medicines</p>
                                    </a>
                                </Col>
                                <Col xl={2} lg={3} md={4} sm={6}>
                                    <a href="#" class="speciality_menu_links d-flex flex-wrap align-content-center">
                                        <Image src={specialities2} alt="line image" />
                                        <p>Over The Counter (OTC)</p>
                                    </a>
                                </Col>
                                <Col xl={2} lg={3} md={4} sm={6}>
                                    <a href="#" class="speciality_menu_links d-flex flex-wrap align-content-center">
                                        <Image src={specialities3} alt="line image" />
                                        <p>Baby Care</p>
                                    </a>
                                </Col>
                                <Col xl={2} lg={3} md={4} sm={6}>
                                    <a href="#" class="speciality_menu_links d-flex flex-wrap align-content-center">
                                        <Image src={specialities4} alt="line image" />
                                        <p>Personal Care</p>
                                    </a>
                                </Col>
                                <Col xl={2} lg={3} md={4} sm={6}>
                                    <a href="#" class="speciality_menu_links d-flex flex-wrap align-content-center">
                                        <Image src={specialities5} alt="line image" />
                                        <p>Medical & Surgical Devices</p>
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>
                <section class="see_how_it_work">
                    <Container>
                        <div class="section_title">
                            <h2 class="text-black">See how it works<Image src={heartbeat} alt="heart beat icon"  height={25} width={60} /></h2>
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
            </div >
        )
    }
}