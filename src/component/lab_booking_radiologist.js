import React from 'react';
import { Image, Col, Row, Container, FormControl, InputGroup, Button } from 'react-bootstrap';

import heartbeat from './images/light_blue_heart_beat_icon.svg';
import lab1 from './images/lab-1.svg';
import lab2 from './images/lab-2.svg';
import lab3 from './images/lab-3.svg';

export default class Lab_booking_radiologist extends React.Component {
    constructor() {
		super();
		this.state = {
			shown: false,
		};
    }	
    hideMap() {
		this.setState({
			shown: !this.state.shown
		});
	}
    render() {

        return (
            <div>
                <div className="page_breadcrumb">
                    <Container>
                        <Row>
                            <Col xs lg="6" className="float-left">
                                <div className="page_title">
                                    <h5 className="font-weight-normal">Lab Booking [Radiologist]
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
                                        <li>Lab Booking [Radiologist]</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="search_clinic">
                    <Container>
                        <Row>
                            <Col md={10}>
                                <Row>
                                    <Col md>
                                        <p>Near by Pryde Clinic</p>
                                        <InputGroup>
                                            <FormControl
                                                placeholder="Search near by Pryde clinic"
                                                aria-label="search anything"
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col md>
                                        <p>City</p>
                                        <select>
                                            <option value="Ahmedabad">Ahmedabad</option>
                                            <option value="Rajkot">Rajkot</option>
                                            <option value="Jamnagar">Jamnagar</option>
                                            <option value="Morbi">Morbi</option>
                                        </select>
                                    </Col>
                                    <Col md>
                                        <p>Area</p>
                                        <select>
                                            <option value="">Shivranjani</option>
                                            <option value="">Nehrunagar</option>
                                            <option value="">Kalupur</option>
                                            <option value="">Chandlodiya</option>
                                        </select>
                                    </Col>
                                    <Col md>
                                        <p>Location</p>
                                        <InputGroup>
                                            <FormControl
                                                placeholder="X-ray Clinic, B-110, Doctor House,"
                                                aria-label="search anything"
                                            />
                                        </InputGroup>

                                    </Col>
                                </Row>
                            </Col>
                            <Col md={2}>
                                <Button className="search_btn">Search</Button>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                    {!this.state.shown ? <i className="fa fa-times-circle map_remove_icon" onClick={this.hideMap.bind(this)}></i> : <i className="fa fa-plus map_remove_icon"  onClick={this.hideMap.bind(this)}></i> } 
                         {!this.state.shown ? <div className="google_map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d236518.93920155888!2d70.65560237122777!3d22.
                                140900693945333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!
                                2sRajkot%2C+Gujarat!3m2!1d22.3038945!2d70.80215989999999!4m5!1s0x395838901ba8770d%3A0x68605fcbbea8c63b!2sGondal%
                                2C+Gujarat+360311!3m2!1d21.9618155!2d70.7988491!5e0!3m2!1sen!2sin!4v1560864027220!5m2!1sen!2sin" width="600" height="450" 
                                frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                            </div> : ''}
                    </Container>
                </div >
                <section className="lab_booking">
		<Container>
			<div className="section_title">
				<h2 className="text-black">Lab Booking [Radiologist]<Image src={heartbeat} alt="heart beat icon"  height={25} width={60}/></h2>
			</div>
			<div className="dermatology_doctor_detail lab_detail">
				<Row>
					<Col lg={4}>
						<div className="lab_image">
							<Image src={lab1}/>
						</div>
					</Col>
					<Col lg={8}>
						<div className="doctor_details">
							<div className="doctor_name">
								<h4>Lab Name 1</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
							</div>
							<div className="doctor_overview">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor risus, mollis vitae dolor in, luctus pulvinar nunc. Donec bibendum nisl ac libero porta, vitae sodales nisl porttitor. Etiam erat est, congue vel finibus eget, lacinia at mi. Sed imperdiet dolor justo, at facilisis turpis venenatis quis. Praesent vehicula, est pellentesque sollicitudin laoreet, nibh diam volutpat nulla </p>
							</div>
							<a href="lab_booking_pathology_report"><Button className="ml-0 px-5 py-3 mt-5" >Know More</Button></a>
						</div>
					</Col>
				</Row>
			</div>
		</Container>
        <div className="border-bottom"></div>
		<Container>
			<div className="dermatology_doctor_detail lab_detail">
				<div className="row">
					<Col lg={4}>
						<div className="lab_image">
							<Image src={lab2} />
						</div>
					</Col>
					<Col lg={8}>
						<div className="doctor_details">
							<div className="doctor_name">
								<h4>Lab Name 2</h4>
				        		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
							</div>
							<div className="doctor_overview">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor risus, mollis vitae dolor in, luctus pulvinar nunc. Donec bibendum nisl ac libero porta, vitae sodales nisl porttitor. Etiam erat est, congue vel finibus eget, lacinia at mi. Sed imperdiet dolor justo, at facilisis turpis venenatis quis. Praesent vehicula, est pellentesque sollicitudin laoreet, nibh diam volutpat nulla</p>
							</div>
							<a href="lab_booking_pathology_report"><Button className="ml-0 px-5 py-3 mt-5" >Know More</Button></a>
						</div>
					</Col>
				</div>
			</div>
        </Container>
        <div className="border-bottom"></div>
		<Container>
			<div className="dermatology_doctor_detail lab_detail">
				<div className="row">
					<Col lg={4}>
						<div className="lab_image">
							<Image src={lab3} />
						</div>
					</Col>
					<Col lg={8}>
						<div className="doctor_details">
							<div className="doctor_name">
								<h4>Lab Name 3</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
							</div>
							<div className="doctor_overview">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dolor risus, mollis vitae dolor in, luctus pulvinar nunc. Donec bibendum nisl ac libero porta, vitae sodales nisl porttitor. Etiam erat est, congue vel finibus eget, lacinia at mi. Sed imperdiet dolor justo, at facilisis turpis venenatis quis. Praesent vehicula, est pellentesque sollicitudin laoreet, nibh diam volutpat nulla,</p>
							</div>
							<a href="lab_booking_pathology_report"><Button className="ml-0 px-5 py-3 mt-5" >Know More</Button></a>
						</div>
					</Col>
				</div>
			</div>
        </Container>
	</section>
     </div>
     ) 
   }
}