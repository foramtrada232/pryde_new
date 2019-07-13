import React from 'react';
import { Image, Col, Row, Container, InputGroup, FormControl } from 'react-bootstrap';
// Images
import heartbeat from './images/light_blue_heart_beat_icon.svg';
import compare_lab1 from './images/compare_lab1.svg';
import compare_lab2 from './images/compare_lab2.svg';
import compare_lab3 from './images/compare_lab3.svg';


export default class Comparition_lab extends React.Component {

    render() {

        return (
            <div>
                <section className="page_breadcrumb">
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <div className="page_title">
                                    <h1>Comparison of Lab<Image src={heartbeat} alt="heart beat icon" /></h1>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className="d-flex flex-wrap align-content-center">
                                    <ul>
                                        <li>Patient</li>
                                        <li>Comparison of Lab</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="all_page_search_section">
                    <Container>
                        <label>Compare Lab</label>
                        <Row>
                            <div className="col-10">
                                <InputGroup><FormControl placeholder="Blood & Urine" /></InputGroup>
                            </div>
                            <div className="col-2">
                                <button className="btn search_btn m-0">Search</button>
                            </div>
                        </Row>
                    </Container>
                </section>
                <section className="lab_list">
                    <Container>
                            <div className="compare_lab_main_box">
                                <div className="lab_comapre_box">
                                    <div className="lab_compare_title_box">
                                        <Image src={compare_lab1} />
                                        <p>Satyam Pathology Laboratory</p>
                                    </div>
                                    <div className="compare_lab_content">
                                        <span className="font-weight-bold">Blood & Urine</span>
                                        <span className="float-right lab_report_price">Rs. 300</span>
                                        <p className="d-inline-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet est eu dolor </p>
                                        <hr />
                                        <span className="font-weight-bold">Call Now:</span>
                                        <p className="mb-3">079 2755 8936</p>
                                        <span className="font-weight-bold">Address:</span>
                                        <p>Shop No. 21, Satyam Shopping Centre, Bhimjipura Char Rasta New Wadaj Road Bhimjipura Ahmedabad, Gujarat 380013 India</p>
                                    </div>
                                </div>
                                <div className="lab_comapre_box">
                                    <div className="lab_compare_title_box">
                                        <Image src={compare_lab2} />
                                        <p className="mt-4">Parul Pathology Laboratory</p>
                                    </div>
                                    <div className="compare_lab_content">
                                        <span className="font-weight-bold">Blood & Urine</span>
                                        <span className="float-right lab_report_price">Rs. 150</span>
                                        <p className="d-inline-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet est eu dolor </p>
                                        <hr />
                                        <span className="font-weight-bold">Call Now:</span>
                                        <p className="mb-3">079 2755 8936</p>
                                        <span className="font-weight-bold">Address:</span>
                                        <p>Shop No. 21, Satyam Shopping Centre, Bhimjipura Char Rasta New Wadaj Road Bhimjipura Ahmedabad, Gujarat 380013 India</p>
                                    </div>
                                </div>
                                <div className="lab_comapre_box">
                                    <div className="lab_compare_title_box">
                                        <Image src={compare_lab3} />
                                        <p className="mt-4">Shreeji Pathology Laboratory</p>
                                    </div>
                                    <div className="compare_lab_content">
                                        <span className="font-weight-bold">Blood & Urine</span>
                                        <span className="float-right lab_report_price">Rs. 406</span>
                                        <p className="d-inline-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet est eu dolor </p>
                                        <hr />
                                        <span className="font-weight-bold">Call Now:</span>
                                        <p className="mb-3">079 2755 8936</p>
                                        <span className="font-weight-bold">Address:</span>
                                        <p>Shop No. 21, Satyam Shopping Centre, Bhimjipura Char Rasta New Wadaj Road Bhimjipura Ahmedabad, Gujarat 380013 India</p>
                                    </div>
                                </div>
                                <div className="lab_comapre_box">
                                    <div className="lab_compare_title_box">
                                        <Image src={compare_lab3} />
                                        <p className="mt-4">Shreeji Pathology Laboratory</p>
                                    </div>
                                    <div className="compare_lab_content">
                                        <span className="font-weight-bold">Blood & Urine</span>
                                        <span className="float-right lab_report_price">Rs. 406</span>
                                        <p className="d-inline-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet est eu dolor </p>
                                        <hr />
                                        <span className="font-weight-bold">Call Now:</span>
                                        <p className="mb-3">079 2755 8936</p>
                                        <span className="font-weight-bold">Address:</span>
                                        <p>Shop No. 21, Satyam Shopping Centre, Bhimjipura Char Rasta New Wadaj Road Bhimjipura Ahmedabad, Gujarat 380013 India</p>
                                    </div>
                                </div>
                                <div className="lab_comapre_box">
                                    <div className="lab_compare_title_box">
                                        <Image src={compare_lab3} />
                                        <p className="mt-4">Shreeji Pathology Laboratory</p>
                                    </div>
                                    <div className="compare_lab_content">
                                        <span className="font-weight-bold">Blood & Urine</span>
                                        <span className="float-right lab_report_price">Rs. 406</span>
                                        <p className="d-inline-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet est eu dolor </p>
                                        <hr />
                                        <span className="font-weight-bold">Call Now:</span>
                                        <p className="mb-3">079 2755 8936</p>
                                        <span className="font-weight-bold">Address:</span>
                                        <p>Shop No. 21, Satyam Shopping Centre, Bhimjipura Char Rasta New Wadaj Road Bhimjipura Ahmedabad, Gujarat 380013 India</p>
                                    </div>
                                </div>
                            </div>
                    </Container>
                </section>
               </div>
        )
    }
}



