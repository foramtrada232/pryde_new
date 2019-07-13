import React from 'react';
import { Container, Form, InputGroup, FormControl } from 'react-bootstrap';

export default class PatientLogin extends React.Component {
    render() {

        return (
            <div>
                <section class="doc_login_form">
                    <Container>
                        <Form class="form_section">
                            <p class="form_heading text-center">login as patient</p>
                            <div class="form-group">
                                <label htmlFor="email">Email Address</label>
                                <InputGroup><FormControl placeholder="Enter Your  Email Address" name="email" /></InputGroup>
                            </div>
                            <div class="form-group">
                                <label htmlFor="pwd">Password</label>
                                <input type="password" class="form-control" id="pwd" placeholder="Enter Your password" name="pwd" />
                            </div>
                            <div class="login_btn">
                                <button class="btn">Login</button>
                            </div>
                            <div class="forgot_pwd_part">
                                <a href="#" class="new_user">New User? Register Now</a>
                                <a href="#" class="forgot_pwd float-right">Forgot Password?</a>
                            </div>
                        </Form>
                    </Container>
                </section>
            </div >
        )
    }
}