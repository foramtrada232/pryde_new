import React from 'react';
import { Container } from 'react-bootstrap';

export default class Pick_Date_Time extends React.Component {
    render() {

        return (
            <div>
              	<section className="appointment_calendar_1 border-top border-bottom">
					<Container>
						<h5 className="pick_date">Pick a Date</h5>
						<div id='calendar'>
						</div>
					</Container>
					<Container>
						<h5 className="pick_date pick_date_margin_top">Pick a Time</h5>
						<div className="select_date_appoinment">
							<div className="form-check">
								<input className="form-check-input" type="radio" name="time" id="first" defaultValue="first" defaultChecked />
								<label className="form-check-label text-center" htmlFor="first">10AM - 11AM</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="radio" name="time" id="second" defaultValue="second" />
								<label className="form-check-label text-center" htmlFor="second">11AM - 12PM</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="radio" name="time" id="third" defaultValue="third" />
								<label className="form-check-label text-center" htmlFor="third">12PM - 01PM</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="radio" name="time" id="four" defaultValue="four" />
								<label className="form-check-label text-center" htmlFor="four">02PM - 03PM</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="radio" name="time" id="five" defaultValue="five" />
								<label className="form-check-label text-center" htmlFor="five">02PM - 03PM</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="radio" name="time" id="six" defaultValue="six" />
								<label className="form-check-label text-center" htmlFor="six">03PM - 04PM</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="radio" name="time" id="seven" defaultValue="seven" />
								<label className="form-check-label text-center" htmlFor="seven">04PM - 05PM</label>
							</div>
							<div className="form-check ">
								<input className="form-check-input" type="radio" name="time" id="eight" defaultValue="eight" />
								<label className="form-check-label text-center" htmlFor="eight">05PM - 06PM</label>
							</div>
							<div className="form-check ">
								<input className="form-check-input" type="radio" name="time" id="nine" defaultValue="nine" />
								<label className="form-check-label text-center" htmlFor="nine">06PM - 07PM</label>
							</div>
							<div className="form-check ">
								<input className="form-check-input" type="radio" name="time" id="ten" defaultValue="ten" />
								<label className="form-check-label text-center" htmlFor="ten">07PM - 08PM</label>
							</div>
							<div className="form-check ">
								<input className="form-check-input" type="radio" name="time" id="eleven" defaultValue="eleven" />
								<label className="form-check-label text-center" htmlFor="eleven">08PM - 09PM</label>
							</div>
						</div>
					</Container>
				</section>
            </div >
        )
    }
}