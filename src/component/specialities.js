import React from 'react';
import { Image, Col, Row, Container } from 'react-bootstrap';
// Images
import heartbeat from './images/light_blue_heart_beat_icon.svg';
import specialities1 from './images/dermatology.svg';
import specialities2 from './images/ENT.svg';
import specialities3 from './images/dentistry.svg';
import specialities4 from './images/general_GP.svg';
import specialities5 from './images/medicine.svg';
import specialities6 from './images/Gastroenterology.svg';
import specialities7 from './images/nd.svg';
import specialities8 from './images/doctor.svg';
import specialities9 from './images/nurse.svg';
import specialities10 from './images/psychiatry.svg';
import specialities11 from './images/drug.svg';
import specialities12 from './images/syrings.svg';

export default class Specialities extends React.Component {
    constructor() {
		super();
		this.state = {
			shown: false,
		};
    }	
    toggle() {
		this.setState({
			shown: !this.state.shown
		});
	}

    render() {

        return (
            <div>
                <div className="specialities">
                    <Container>
                        <div className="section_title">
                            <h2>Specialities
                                <Image
                                    src={heartbeat}
                                    alt="heart beat icon"
                                    width="50"
                                    height="20"
                                />
                            </h2>
                            <div className="specialities_toggle_btn">
                                <a href="#"><i className="fa fa-caret-down" aria-hidden="true" onClick={this.toggle.bind(this)}></i></a>
                            </div>
                        </div>
                        {this.state.shown ?  <div className="specialities_toggle_menu" >
                            <Row  >
                                <Col lg={3} sm={6} className="border-right border-bottom">
                                    <a href="#" className="feature_detail_card_blue blue_image">
                                        <Image src={specialities1} alt="line image" />
                                        <hr />
                                        <p className="font-weight-bold text-dark">Dermatology</p>
                                    </a>
                                </Col>
                                <Col lg sm={6} className="border-right border-bottom">
                                    <a href="#" className="feature_detail_card_blue blue_image">
                                        <Image src={specialities2} alt="line image" />
                                        <hr />
                                        <p className="font-weight-bold text-dark">ENT</p>
                                    </a>
                                </Col>
                                <Col lg sm={6} className="border-right border-bottom">
                                    <a href="#" className="feature_detail_card_blue blue_image">
                                        <Image src={specialities3} alt="line image" />
                                        <hr />
                                        <p className="font-weight-bold text-dark">Dentistry</p>
                                    </a>
                                </Col>
                                <Col lg sm={6} className=" border-bottom border-right">
                                    <a href="#" className="feature_detail_card_blue blue_image">
                                        <Image src={specialities4} alt="line image" />
                                        <hr />
                                        <p className="font-weight-bold text-dark">General Physician - GP</p>
                                    </a>
                                </Col>
                                <Col lg sm={6} className="border-bottom">
                                    <a href="#" className="feature_detail_card_blue blue_image">
                                        <Image src={specialities5} alt="line image" />
                                        <hr />
                                        <p className="font-weight-bold text-dark">Internal Medicine</p>
                                    </a>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg sm={6} className="border-right border-bottom">
                                    <a href="#" className="feature_detail_card_blue blue_image">
                                        <Image src={specialities6} alt="line image" />
                                        <hr />
                                        <p className="font-weight-bold text-dark">Gastroenterology</p>
                                    </a>
                                </Col>
                                <Col lg sm={6} className="border-right border-bottom">
                                    <a href="#" className="feature_detail_card_blue blue_image">
                                        <Image src={specialities7} alt="line image" />
                                        <hr />
                                        <p className="font-weight-bold text-dark">Nutrition & Dietetics</p>
                                    </a>
                                </Col>
                                <Col lg sm={6} className=" border-bottom border-right">
                                    <a href="#" className="feature_detail_card_blue blue_image">
                                        <Image src={specialities8} alt="line image" />
                                        <hr />
                                        <p className="font-weight-bold text-dark">Obstetrics & Gynaecology</p>
                                    </a>
                                </Col>
                                <Col lg sm={6} className="border-right border-bottom">
                                    <a href="#" className="feature_detail_card_blue blue_image">
                                        <Image src={specialities9} alt="line image" />
                                        <hr />
                                        <p className="font-weight-bold text-dark">Paediatrics</p>
                                    </a>
                                </Col>
                                <Col lg sm={6} className="border-bottom">
                                    <a href="#" className="feature_detail_card_blue blue_image">
                                        <Image src={specialities10} alt="line image" />
                                        <hr />
                                        <p className="font-weight-bold text-dark">Psychiatry</p>
                                    </a>
                                </Col>
                                </Row>
                                <Row className="mr-auto">
                                <Col lg sm={6} className="border-right">
                                    <a href="#" className="feature_detail_card_blue blue_image">
                                        <Image src={specialities11} alt="line image" />
                                        <hr />
                                        <p className="font-weight-bold text-dark">Psychology</p>
                                    </a>
                                </Col>
                                <Col lg sm={6}>
                                    <a href="#" className="feature_detail_card_blue blue_image">
                                        <Image src={specialities12} alt="line image" />
                                        <hr />
                                        <p className="font-weight-bold text-dark">Pulmonology</p>
                                    </a>
                                </Col>
                            </Row> 
                        </div> : ''}
                      
                    </Container>
                </div>
            </div >
        )
    }
}