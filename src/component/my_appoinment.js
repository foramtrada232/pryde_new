import React from 'react';
import { Image, Col, Row, Container } from 'react-bootstrap';

import heartbeat from './images/light_blue_heart_beat_icon.svg';

export default class My_appoinment extends React.Component {
    render() {

        return (
            <div>
                <div className="page_breadcrumb">
                    <Container>
                        <Row>
                            <Col xs lg="6" className="float-left">
                                <div className="page_title">
                                    <h5 className="font-weight-normal">My Appointment
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
                                        <li>My Appointment</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <section className="appointment_calendar">
                    <Container>
                        <div id="calendar"></div>
                    </Container>
                </section>


            </div >
        )
    }
}