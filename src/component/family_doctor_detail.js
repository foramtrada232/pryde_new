import React from 'react';
import { Image, Col, Row, Container } from 'react-bootstrap';
//Images
import heartbeat from './images/light_blue_heart_beat_icon.svg';
import doctor1 from './images/doctor-1.svg';
import doctor from './images/doctor.svg';
import about from './images/about.svg';
import edu from './images/edu.svg';
import medNo from './images/medNo.svg';
// Import Components
import Select from './search_special';
import Specialities from './specialities';

export default class Family_doctor_detail extends React.Component {

	render() {

		return (
			<div>
			
				<section className="page_breadcrumb">
					<Container>
						<Row>
							<Col lg={7}>
								<div className="page_title">
									<h1>Family Doctor<Image src={heartbeat} alt="heart beat icon" height={20} width={50} /></h1>
								</div>
							</Col>
							<Col lg={5}>
								<div className="d-flex flex-wrap align-content-center" >
									<ul>
										<li>Patient</li>
										<li>Family Doctor</li>
									</ul>
								</div>
							</Col>
						</Row>
					</Container>
				</section>

				<Select/>
				<Specialities/>

				<section className="family_doctor">
					<Container>
						<div className="section_title">
							<h2>Family Doctor<Image src={heartbeat} alt="heart beat icon" height={20} width={50} /></h2>
						</div>
						<div className="family_doctor_des">
							<Row>
								<Col lg={4}>
									<ul className="nav nav-tabs row">
										<li className="col-xl-6 col-md-6 mb-3 nav-item">
											<a className="tab_link active" data-toggle="tab" href="#about">
												<Image src={about} />
												<p>About</p>
											</a>
										</li>
										<li className="col-xl-6 col-md-6 mb-3 nav-item">
											<a className="tab_link" data-toggle="tab" href="#education">
												<Image src={edu} />
												<p>Education</p>
											</a>
										</li>
										<li className="col-xl-6 col-md-6 mb-3 nav-item">
											<a className="tab_link" data-toggle="tab" href="#experiance">
												<Image src={doctor} />
												<p>Experiance</p>
											</a>
										</li>
										<li className="col-xl-6 col-md-6 mb-3 nav-item">
											<a className="tab_link" data-toggle="tab" href="#medicalRegNo">
												<Image src={medNo} />
												<p>Medical Registration No.</p>
											</a>
										</li>
									</ul>
								</Col>
								<Col lg={4} md={6}>
									<div className="doctor_image doctor_profile">
										<Image src={doctor1} />
									</div>
								</Col>
								<Col lg={4} md={6}>
									<div className="doctor_details">
										<div className="doctor_name">
											<h4><span className="doctor_blue">Dr.</span> Archana Andavarapu</h4>
											<p>Dr. Archana Andavarapu - Consult A Pulmonologist Online Anytime | CallHealth, India</p>
										</div>
										<div className="doctor_overview">
											<h6>Derminology</h6>
											<p>5 Years of Experience</p>
											<p>English, Hindi, Telugu, Tamil</p>
										</div>
										<div className="doctor_consult">
											<h6>Consultation fee:</h6>
											<p><strike><i class="fa fa-inr"></i> 500</strike><span className="blue_price">249</span></p>
											<span className="gray_save">you saved: <i class="fa fa-inr"></i> 251</span>
										</div>
									</div>
								</Col>
							</Row>
						</div>
						<div className="tab-content">
							<div className="tab-pane active" id="about" >
								<h3>About</h3>
								<p>Dr. Archana Andavarapu is an academy-oriented Dermatologist & Cosmetologist who has 5 years of experience in the fields of Clinical & Cosmetic Dermatology with expertise in advanced Cosmetology, Venereology & Leprosy. He has presented & published various papers in the respective fields and has won a Gold Medal Post-graduation - 2015). The services offered are Skin biopsy, Electrocautery (removal of warts, skin tags, corns etc.), Chemical peeling, PRP (Platelet rich plasma - for hair treatment, Chronic non-healing ulcers, Facial rejuvenation), Derma rollers, Vitiligo surgeries, Nail surgeries & many more.</p>
							</div>
							<div className="tab-pane" id="education">
								<h3>Education</h3>
								<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							</div>
							<div id="experiance" className="tab-pane">
								<h3>Experiance</h3>
								<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
							</div>
							<div id="medicalRegNo" className="tab-pane">
								<h3>Medical Registration No.</h3>
								<p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
							</div>
						</div>
						<div className="radio_form">
							<Row>
								<div className="form-check mt_2">
									<input className="form-check-input" type="radio" name="consult" id="video" defaultValue="option1" defaultChecked />
									<label className="form-check-label text-center" htmlFor="video">Video</label>
								</div>
								<div className="form-check mt_2 mr_2">
									<input className="form-check-input" type="radio" name="consult" id="audio" defaultValue="option1" defaultChecked />
									<label className="form-check-label text-center" htmlFor="audio">Audio</label>
								</div>
								<div className="doctor_details mt_2">
									<a href="appoinment_booking_v3-2"><button className="px_2">consult</button></a>
								</div>
							</Row>
						</div>
					</Container>
				</section>
			</div>
		)
	}
}



