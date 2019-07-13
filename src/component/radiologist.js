import React from 'react';
import { Image, Col, Row, Container } from 'react-bootstrap';
//Images
import heartbeat from './images/light_blue_heart_beat_icon.svg';
import search from './images/search.svg';
import doctor1 from './images/doctor-1.svg';
import doctor2 from './images/doctor-2.png';
import doctor3 from './images/doctor-3.png';
import line1 from './images/1.svg';
import line2 from './images/2.svg';
import line3 from './images/3.svg';
import line4 from './images/4.svg';
import line5 from './images/5.svg';

export default class Radiologist extends React.Component {

	render() {

		return (
			<div>
				<section className="page_breadcrumb">
					<Container>
						<Row>
							<Col lg={7}>
								<div className="page_title">
									<h1>Lab Booking [Radiologist]<Image src={heartbeat} alt="heart beat icon" /></h1>
								</div>
							</Col>
							<Col lg={5}>
								<div className="d-flex flex-wrap align-content-center" >
									<ul>
										<li>Doctor</li>
										<li>Lab Booking [Radiologist]</li>
									</ul>
								</div>
							</Col>
						</Row>
					</Container>
				</section>

				<section className="all_page_search_section">
					<Container>
						<label>See a Specialist from home within minutes.</label>
						<div className="input_with_icont">
							<input type="text" className="form-control" placeholder="Search for Doctors across multiple specialities and more..." />
							<Image src={search} alt="searct_icon" />
						</div>
					</Container>
				</section>
				<section className="dermatology">
					<Container>
						<div className="section_title">
							<h2 className="text-black">Radiologist<Image src={heartbeat} alt="heart beat icon" /></h2>
						</div>
						<div className="dermatology_doctor_detail">
							<Row>
								<Col lg={4}>
									<div className="doctor_image">
										<Image src={doctor1} />
									</div>
								</Col>
								<Col lg={8}>
									<div className="doctor_details">
										<div className="doctor_name">
											<h4><span className="doctor_blue">Dr.</span> Archana Andavarapu</h4>
											<p>Dr. Archana Andavarapu - Consult A Pulmonologist Online Anytime | CallHealth, India</p>
										</div>
										<div className="doctor_overview">
											<h6>Doctor Overview</h6>
											<p>Dr. Archana Andavarapu is an academy-oriented Dermatologist and Cosmetologist who has 5 years of experience in the fields of Clinical and Cosmetic Dermatology with expertise in advanced Cosmetology, Venereology and Leprosy. He has presented and published various papers in the... </p>
										</div>
										<div className="doctor_consult">
											<p><strike>&#8377 500</strike><span className="blue_price">249</span></p>
											<span className="gray_save">you saved: &#8377 251</span>
										</div>
										<button type="button">Consult</button>
									</div>
								</Col>
							</Row>
							<Row>
								<div className="col-lg derma_box">
									<div className="dermatology_info text-center">
										<Image src={line1} alt="line image" />
										<p>Qualification:</p>
										<p>MBBS,MD (DVL)</p>
									</div>
								</div>
								<div className="col-lg derma_box">
									<div className="dermatology_info text-center">
										<Image src={line2} alt="line image" />
										<p>Speciality:</p>
										<p>Dermatology</p>
									</div>
								</div>
								<div className="col-lg derma_box">
									<div className="dermatology_info text-center">
										<Image src={line3} alt="line image" />
										<p>Years of Experience:</p>
										<p>5</p>
									</div>
								</div>
								<div className="col-lg derma_box">
									<div className="dermatology_info text-center">
										<Image src={line4} alt="line image" />
										<p>Available days:</p>
										<p>Mon - Sat</p>
									</div>
								</div>
								<div className="col-lg derma_box">
									<div className="dermatology_info text-center">
										<Image src={line5} alt="line image" />
										<p>Available timings: </p>
										<p>	08:00 AM to 03:00 PM</p>
									</div>
								</div>
							</Row>
						</div>
					</Container>
					<hr />
					<Container>
						<div className="dermatology_doctor_detail">
							<Row>
								<Col lg={4}>
									<div className="doctor_image">
										<Image src={doctor2} />
									</div>
								</Col>
								<Col lg={8}>
									<div className="doctor_details">
										<div className="doctor_name">
											<h4><span className="doctor_blue">Dr.</span> Archana Andavarapu</h4>
											<p>Dr. Archana Andavarapu - Consult A Pulmonologist Online Anytime | CallHealth, India</p>
										</div>
										<div className="doctor_overview">
											<h6>Doctor Overview</h6>
											<p>Dr. Archana Andavarapu comes with a good academic knowledge and experience in Skin Rejuvenation, pigmentation, hair-fall, skin biopsy, Electrocautery (removal of warts, skin tags, corns etc.), Chemical peeling, PRP (Platelet rich plasma- for hair treatment, Chronic non-healing...</p>
										</div>
										<div className="doctor_consult">
											<p><strike>&#8377 500</strike><span className="blue_price">249</span></p>
											<span className="gray_save">you saved: &#8377 251</span>
										</div>
										<button type="button">Consult</button>
									</div>
								</Col>
							</Row>
							<Row>
								<div className="col-lg derma_box">
									<div className="dermatology_info text-center">
										<Image src={line1} alt="line image" />
										<p>Qualification:</p>
										<p>MBBS,MD (DVL)</p>
									</div>
								</div>
								<div className="col-lg derma_box">
									<div className="dermatology_info text-center">
										<Image src={line2} alt="line image" />
										<p>Speciality:</p>
										<p>Dermatology</p>
									</div>
								</div>
								<div className="col-lg derma_box">
									<div className="dermatology_info text-center">
										<Image src={line3} alt="line image" />
										<p>Years of Experience:</p>
										<p>6</p>
									</div>
								</div>
								<div className="col-lg derma_box">
									<div className="dermatology_info text-center">
										<Image src={line4} alt="line image" />
										<p>Available days:</p>
										<p>Mon - Sat</p>
									</div>
								</div>
								<div className="col-lg derma_box">
									<div className="dermatology_info text-center">
										<Image src={line5} alt="line image" />
										<p>Available timings: </p>
										<p>	04:30 AM to 08:30 PM</p>
									</div>
								</div>
							</Row>
						</div>
					</Container>
					<hr />
					<Container>
						<div className="dermatology_doctor_detail">
							<Row>
								<Col lg={4}>
									<div className="doctor_image">
										<Image src={doctor3} />
									</div>
								</Col>
								<Col lg={8}>
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
										<button type="button">Consult</button>
									</div>
								</Col>
							</Row>
							<Row>
								<div className="col-lg derma_box">
									<div className="dermatology_info text-center">
										<Image src={line1} alt="line image" />
										<p>Qualification:</p>
										<p>MBBS,MD (DVL)</p>
									</div>
								</div>
								<div className="col-lg derma_box">
									<div className="dermatology_info text-center">
										<Image src={line2} alt="line image" />
										<p>Speciality:</p>
										<p>Dermatology</p>
									</div>
								</div>
								<div className="col-lg derma_box">
									<div className="dermatology_info text-center">
										<Image src={line3} alt="line image" />
										<p>Years of Experience:</p>
										<p>5</p>
									</div>
								</div>
								<div className="col-lg derma_box">
									<div className="dermatology_info text-center">
										<Image src={line4} alt="line image" />
										<p>Available days:</p>
										<p>Mon - Sat</p>
									</div>
								</div>
								<div className="col-lg derma_box">
									<div className="dermatology_info text-center">
										<Image src={line5} alt="line image" />
										<p>Available timings: </p>
										<p>	08:00 AM to 03:00 PM</p>
									</div>
								</div>
							</Row>
						</div>
					</Container>
				</section>
			</div>
		)
	}
}



