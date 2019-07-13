import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

export default class Validate_otp extends React.Component {
    render() {

        return (
            <div>
                <section className="doctor_login">
                    <div className="container">
                        <div className="doctor_login_box otp_box">
                            <h3 className="text-center">Validate OTP</h3>
                            <div className="otp">
                                <p className="text-center">A One Time Passcode has been sent to <span className="font-weight-bold">Your Email Address</span></p>
                                <p className="text-center">Please enter the OTP below to verify Your Email Address. If you cannot see the email from as in your inbox,make sure to check your SPAM folder.</p>
                                <div className="validate_otp">
                                    <InputGroup>
                                        <FormControl
                                            placeholder="Enter OTP"
                                            aria-label="search anything"
                                        />
                                    </InputGroup>
                                    <Button className="login_btn">Validate OTP</Button>
                                    <hr />
                                    <a href="" className="blue_font">Reasend OTP</a></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        )
    }
}