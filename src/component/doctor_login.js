import React from 'react';
import { Container, InputGroup, FormControl } from 'react-bootstrap';


export default class Doctor_login extends React.Component {

	render() {

		return (
			<div>
				<section className="doctor_login">
					<Container>
						<div className="doctor_login_box">
							<h3>Login as doctor</h3>
							<p>Email Address</p>
							<div className="input_with_icont">
							<InputGroup><FormControl placeholder="Enter Your Email Address" /></InputGroup>
							<i className="fa fa-envelope-o" aria-hidden="true"></i>
							</div>
							<p>Phone Number</p>
							<div className="input_with_icont">
							<InputGroup><FormControl placeholder="Enter Your Phone Number" /></InputGroup>
							<i className="fa fa-phone" aria-hidden="true"></i>
							</div>
							<p>Password</p>
							<div className="input_with_icont">
							<input className="form-control" type="password" name="doctor_password" placeholder="Enter Your Password" />
							<i className="fa fa-lock" aria-hidden="true"></i>
							</div>
							<button className="login_btn">Login</button>
							<hr />
							<a href="doctor_register" className="float-left navy_blue_font">New User? Register Now</a>
							<a href="forgot_password" className="float-right blue_font">Forgot Password?</a>
						</div>
					</Container>
				</section>
			</div>
		)
	}
}



