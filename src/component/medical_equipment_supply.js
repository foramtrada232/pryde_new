import React from 'react';
import { Image, Col, Row, Container, InputGroup, FormControl } from 'react-bootstrap';
// Images
import heartbeat from './images/light_blue_heart_beat_icon.svg';
import search from './images/search.svg';
import medical_tab1 from './images/medical_tab1.png';
import medical_tab2 from './images/medical_tab2.png';
import medical_tab5 from './images/medical_tab5.png';
import medical_tab6 from './images/medical_tab6.png';
import nursing4 from './images/nursing4.png';
import nursing6 from './images/nursing6.png';


export default class Medical_equipment_supply extends React.Component {

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
                                <div className="d-flex flex-wrap align-content-center" >
                                    <ul>
                                        <li>Patient</li>
                                        <li>Medical Equipment Supplies</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* breadcrumb section ends here search section starts here */}
                <section className="all_page_search_section">
                    <Container>
                        <label>Medical Supplies at pocket-friendly prices</label>
                        <div className="input_with_icont">
                            <InputGroup><FormControl placeholder="Search for Medical Equipment - Buying & Leasing" /></InputGroup>
                            <Image src={search} alt="searct_icon" />
                        </div>
                    </Container>
                </section>
                {/* serch section ends here */}
                 {/* medical equipment tab section starts here */}
                <section className="medical_equip_section physio_tab_part">
                    <Container>
                        <div className="tab_part text-center">
                            <ul className="nav nav-tabs" role="tablist">
                                <li><a href="#home" role="tab" data-toggle="tab" className="active">Home care equipment</a></li>
                                <li><a href="#surgical" role="tab" data-toggle="tab">Surgical and Consumables/Disposables</a></li>
                                <li><a href="#hospital" role="tab" data-toggle="tab">hospital needs</a></li>
                                <li><a href="#dental" role="tab" data-toggle="tab">Dental equipment</a></li>
                                <li><a href="#gym" role="tab" data-toggle="tab">GYM/Fitness Equipment</a></li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="home">
                                    <Row>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box">
                                                    <Image src={medical_tab1} />
                                                    <p className="tab_heading">Resipotary Care</p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box">
                                                    <Image src={medical_tab2} />
                                                    <p className="tab_heading1">Sleep Therapy</p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box" style={{padding:'20px 10px'}}>
                                                    <Image src={nursing4} />
                                                    <p className="tab_heading">Geriatric Care and Mobility Care</p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box">
                                                    <Image src={nursing6} />
                                                    <p className="tab_heading">Orthopedic and Physio Care</p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box">
                                                    <Image src={medical_tab5} />
                                                    <p className="tab_heading">Cardiac Care</p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box" style={{padding: 40}}>
                                                    <Image src={medical_tab6} />
                                                    <p className="tab_heading">Others</p>
                                                </div>
                                            </a>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="tab-pane" id="surgical">
                                    <Row>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box" style={{padding:'20px 10px'}}>
                                                    <Image src={nursing4} />
                                                    <p className="tab_heading">Geriatric Care and Mobility Care</p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box">
                                                    <Image src={nursing6} />
                                                    <p className="tab_heading">Orthopedic and Physio Care</p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box">
                                                    <Image src={medical_tab1} />
                                                    <p className="tab_heading">Resipotary Care</p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box">
                                                    <Image src={medical_tab2} />
                                                    <p className="tab_heading1">Sleep Therapy</p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box">
                                                    <Image src={medical_tab5} />
                                                    <p className="tab_heading">Cardiac Care</p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box" style={{padding: 40}}>
                                                    <Image src={medical_tab6} />
                                                    <p className="tab_heading">Others</p>
                                                </div>
                                            </a>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="tab-pane" id="hospital">
                                    <Row>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box">
                                                    <Image src={medical_tab1} />
                                                    <p className="tab_heading">Resipotary Care</p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box">
                                                    <Image src={medical_tab2} />
                                                    <p className="tab_heading1">Sleep Therapy</p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box">
                                                    <Image src={medical_tab5} />
                                                    <p className="tab_heading">Cardiac Care</p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box" style={{padding:'20px 10px'}}>
                                                    <Image src={nursing4} />
                                                    <p className="tab_heading">Geriatric Care and Mobility Care</p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box">
                                                    <Image src={nursing6} />
                                                    <p className="tab_heading">Orthopedic and Physio Care</p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box" style={{padding: 40}}>
                                                    <Image src={medical_tab6} />
                                                    <p className="tab_heading">Others</p>
                                                </div>
                                            </a>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="tab-pane" id="dental">
                                    <Row>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box">
                                                    <Image src={medical_tab1} />
                                                    <p className="tab_heading">Resipotary Care</p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box">
                                                    <Image src={medical_tab2} />
                                                    <p className="tab_heading1">Sleep Therapy</p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box" style={{padding:'20px 10px'}}>
                                                    <Image src={nursing4} />
                                                    <p className="tab_heading">Geriatric Care and Mobility Care</p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box">
                                                    <Image src={nursing6} />
                                                    <p className="tab_heading">Orthopedic and Physio Care</p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box">
                                                    <Image src={medical_tab5} />
                                                    <p className="tab_heading">Cardiac Care</p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box" style={{padding: 40}}>
                                                    <Image src={medical_tab6} />
                                                    <p className="tab_heading">Others</p>
                                                </div>
                                            </a>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="tab-pane" id="gym">
                                    <Row>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box">
                                                    <Image src={medical_tab1} />
                                                    <p className="tab_heading">Resipotary Care</p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box">
                                                    <Image src={nursing6} />
                                                    <p className="tab_heading">Orthopedic and Physio Care</p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box">
                                                    <Image src={medical_tab5} />
                                                    <p className="tab_heading">Cardiac Care</p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box">
                                                    <Image src={medical_tab2} />
                                                    <p className="tab_heading1">Sleep Therapy</p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box" style={{padding:'20px 10px'}}>
                                                    <Image src={nursing4} />
                                                    <p className="tab_heading">Geriatric Care and Mobility Care</p>
                                                </div>
                                            </a>
                                        </Col>
                                        <Col lg={2} md={2} className="p-10 tab_main_box">
                                            <a href="medical_equipment_list">
                                                <div className="tab_box" style={{padding: 40}}>
                                                    <Image src={medical_tab6} />
                                                    <p className="tab_heading">Others</p>
                                                </div>
                                            </a>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
                {/* medical equipment tab section ends here */}
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



