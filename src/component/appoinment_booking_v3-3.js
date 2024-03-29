import React from 'react';
import { Image, Col, Row, Container } from 'react-bootstrap';
//Images
import heartbeat from './images/light_blue_heart_beat_icon.svg';
import doctor1 from './images/doctor-1.svg'
import doctor2 from './images/doctor-2.svg'
import doctor3 from './images/doctor-3.svg';
import line1 from './images/1.svg';
import line2 from './images/2.svg';
import line3 from './images/3.svg';
import line4 from './images/4.svg';
import line5 from './images/5.svg';
// Import Components
import Select from './search_special';
import Specialities from './specialities';


export default class Appoinment_booking_v3 extends React.Component {

	render() {

		return (
			<div>
				<section className="page_breadcrumb">
					<Container>
						<Row>
							<Col lg={7}>
								<div className="page_title">
									<h1>Doctor Consultation<Image src={heartbeat} alt="heart beat icon" /></h1>
								</div>
							</Col>
							<Col lg={5}>
								<div className="d-flex flex-wrap align-content-center" >
									<ul>
										<li>Patient</li>
										<li>Doctor Consultation</li>
									</ul>
								</div>
							</Col>
						</Row>
					</Container>
				</section>

				<Select />
				<Specialities />

				<section className="dermatology">
					<Container>
						<div className="section_title">
							<h2 className="text-black pb-0">Dermatology<Image src={heartbeat} alt="heart beat icon" /></h2>
						</div>
						<div className="dermatology_doctor_detail">
							<Row>
								<Col lg={4} md={12}>
									<div className="doctor_image">
										<Image src={doctor1} />
									</div>
								</Col>
								<Col lg={8} md={12}>
									<div className="doctor_details">
										<div className="doctor_name">
											<h4><span className="doctor_blue">Dr.</span> Archana Andavarapu</h4>
											<p>Dr. Archana Andavarapu - Consult A Pulmonologist Online Anytime | CallHealth, India</p>
										</div>
										<div className="doctor_overview">
											<h6>Doctor Overview</h6>
											<p>Dr. Archana Andavarapu is an academy-oriented Dermatologist and Cosmetologist who has 5 years of experience in the fields of Clinical and Cosmetic Dermatology with expertise in advanced Cosmetology, Venereology and Leprosy. He has presented and published various papers in the...</p>
										</div>
										<div className="doctor_consult">
											<p><strike>&#8377 500</strike><span className="blue_price">249</span></p>
											<span className="gray_save">you saved: &#8377 251</span>
										</div>
										<a href="appoinment_booking_v3-2"><button type="button">Consult</button></a>
									</div>
									<Row>
										<div className="col-xl col-lg-3 col-md-4 col-sm-6">
											<a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
												<Image src={line1} alt="line image" />
												<p>Qualification:</p>
												<p>MBBS,MD (DVL)</p>
											</a>
										</div>
										<div className="col-xl col-lg-3 col-md-4 col-sm-6">
											<a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
												<Image src={line2} alt="line image" />
												<p>Speciality:</p>
												<p>Dermatology</p>
											</a>
										</div>
										<div className="col-xl col-lg-3 col-md-4 col-sm-6">
											<a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
												<Image src={line3} alt="line image" />
												<p>Years of Experience:</p>
												<p>5</p>
											</a>
										</div>
										<div className="col-xl col-lg-3 col-md-4 col-sm-6">
											<a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
												<Image src={line4} alt="line image" />
												<p>Available days:</p>
												<p>Mon - Sat</p>
											</a>
										</div>
										<div className="col-xl col-lg-3 col-md-4 col-sm-6">
											<a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
												<Image src={line5} alt="line image" />
												<p>Available timings: </p>
												<p>	08:00 AM to 03:00 PM</p>
											</a>
										</div>
									</Row>
								</Col>
							</Row>
						</div>
					</Container>
					<hr />
					<Container>
						<div className="dermatology_doctor_detail">
							<Row>
								<Col lg={4} md={12}>
									<div className="doctor_image">
										<Image src={doctor2} />
									</div>
								</Col>
								<Col lg={8} md={12}>
									<div className="doctor_details">
										<div className="doctor_name">
											<h4><span className="doctor_blue">Dr.</span> Archana Andavarapu</h4>
											<p>Dr. Archana Andavarapu - Consult A Pulmonologist Online Anytime | CallHealth, India</p>
										</div>
										<div className="doctor_overview">
											<h6>Doctor Overview</h6>
											<p>Dr. Archana Andavarapu is an academy-oriented Dermatologist and Cosmetologist who has 5 years of experience in the fields of Clinical and Cosmetic Dermatology with expertise in advanced Cosmetology, Venereology and Leprosy. He has presented and published various papers in the...</p>
										</div>
										<div className="doctor_consult">
											<p><strike>&#8377 500</strike><span className="blue_price">249</span></p>
											<span className="gray_save">you saved: &#8377 251</span>
										</div>
										<a href="appoinment_booking_v3-2"><button type="button">Consult</button></a>
									</div>
									<Row>
										<Col xl lg={3} md={4} sm={6}>
											<a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
												<Image src={line1} alt="line image" />
												<p>Qualification:</p>
												<p>MBBS,MD (DVL)</p>
											</a>
										</Col>
										<Col xl lg={3} md={4} sm={6}>
											<a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
												<Image src={line2} alt="line image" />
												<p>Speciality:</p>
												<p>Dermatology</p>
											</a>
										</Col>
										<Col xl lg={3} md={4} sm={6}>
											<a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
												<Image src={line3} alt="line image" />
												<p>Years of Experience:</p>
												<p>5</p>
											</a>
										</Col>
										<Col xl lg={3} md={4} sm={6}>
											<a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
												<Image src={line4} alt="line image" />
												<p>Available days:</p>
												<p>Mon - Sat</p>
											</a>
										</Col>
										<Col xl lg={3} md={4} sm={6}>
											<a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
												<Image src={line5} alt="line image" />
												<p>Available timings: </p>
												<p>	08:00 AM to 03:00 PM</p>
											</a>
										</Col>
									</Row>
								</Col>
							</Row>

						</div>
					</Container>
					<hr />
					<Container>
						<div className="dermatology_doctor_detail">
							<Row>
								<Col lg={4} md={12}>
									<div className="doctor_image">
										<Image src={doctor3} />
									</div>
								</Col>
								<Col lg={8} md={12}>
									<div className="doctor_details">
										<div className="doctor_name">
											<h4><span className="doctor_blue">Dr.</span> Archana Andavarapu</h4>
											<p>Dr. Archana Andavarapu - Consult A Pulmonologist Online Anytime | CallHealth, India</p>
										</div>
										<div className="doctor_overview">
											<h6>Doctor Overview</h6>
											<p>Dr. Archana Andavarapu is an academy-oriented Dermatologist and Cosmetologist who has 5 years of experience in the fields of Clinical and Cosmetic Dermatology with expertise in advanced Cosmetology, Venereology and Leprosy. He has presented and published various papers in the...</p>
										</div>
										<div className="doctor_consult">
											<p><strike>&#8377 500</strike><span className="blue_price">249</span></p>
											<span className="gray_save">you saved: &#8377 251</span>
										</div>
										<a href="appoinment_booking_v3-2"><button type="button">Consult</button></a>
									</div>
									<Row>
										<Col xl lg={3} md={4} sm={6}>
											<a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
												<Image src={line1} alt="line image" />
												<p>Qualification:</p>
												<p>MBBS,MD (DVL)</p>
											</a>
										</Col>
										<Col xl lg={3} md={4} sm={6}>
											<a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
												<Image src={line2} alt="line image" />
												<p>Speciality:</p>
												<p>Dermatology</p>
											</a>
										</Col>
										<Col xl lg={3} md={4} sm={6}>
											<a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
												<Image src={line3} alt="line image" />
												<p>Years of Experience:</p>
												<p>5</p>
											</a>
										</Col>
										<Col xl lg={3} md={4} sm={6}>
											<a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
												<Image src={line4} alt="line image" />
												<p>Available days:</p>
												<p>Mon - Sat</p>
											</a>
										</Col>
										<Col xl lg={3} md={4} sm={6}>
											<a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
												<Image src={line5} alt="line image" />
												<p>Available timings: </p>
												<p>	08:00 AM to 03:00 PM</p>
											</a>
										</Col>
									</Row>
								</Col>
							</Row>

						</div>
					</Container>
				</section>
			</div>
		)
	}
}



