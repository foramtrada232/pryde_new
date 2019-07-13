import React from 'react';
import { Image, Col, Row, Container } from 'react-bootstrap';
//Image
import heartbeat from './images/light_blue_heart_beat_icon.svg';
//Import components
import Select from './search_special';
import Specialities from './specialities';
export default class Appoinment_booking_v1 extends React.Component {

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
			</div>
		)
	}
}



