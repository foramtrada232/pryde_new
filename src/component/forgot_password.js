import React from 'react';
import { Container, InputGroup, FormControl } from 'react-bootstrap';


export default class Forgot_password extends React.Component {

    render() {

        return (
            <div>
                <section class="doctor_login">
                    <Container>
                        <div class="doctor_login_box">
                            <h4>Forgot Password</h4>
                            <p>Email Address</p>
                            <div className="input_with_icont">
                            <InputGroup><FormControl placeholder="Enter Your Email Address" /></InputGroup>
                            <i class="fa fa-envelope-o" aria-hidden="true"></i>
                            </div>
                            <p>Phone Number</p>
                            <div className="input_with_icont">
                            <InputGroup><FormControl placeholder="Enter Your Phone Number" /></InputGroup>
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            </div>
                            <a class="w-100" href="validate_OTP"><button class="login_btn">OK</button></a>
                        </div>
                    </Container>
                </section>

               </div>
        )
    }
}



