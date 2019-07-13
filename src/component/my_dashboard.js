import React from 'react';
import { Image, Col, Row, Container, Card, Accordion } from 'react-bootstrap';

import heartbeat from './images/light_blue_heart_beat_icon.svg';

export default class My_dashboard extends React.Component {
    render() {

        return (
            <div>
                <div className="page_breadcrumb">
                    <Container>
                        <Row>
                            <Col xs lg="6" className="float-left">
                                <div className="page_title">
                                    <h5 className="font-weight-normal">My Dashboard
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
                                        <li>My Dashboard</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <section className="dashboard">
                    <Container>
                        <Row>
                            <Col xl={4} lg={6} md={12} className="border p-0">
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                            My Patient Features
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <ul>
                                                    <li>Feature 1</li>
                                                    <li>Feature 1</li>
                                                    <li>Feature 1</li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                            My History
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <ul>
                                                    <li>My Prescription</li>
                                                    <li>My Report</li>
                                                    <li>My Calendar</li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                            <Col xl={8} lg={6} md={12}>
                                <div id="calender_dashboard">
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div >
        )
    }
}