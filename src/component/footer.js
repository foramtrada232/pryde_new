import React from 'react';
import { Image, Col, Row, } from 'react-bootstrap';
// Images
import Logo from './images/prydeLogo.svg';
import fb from './images/facebook.svg';
import twitter from './images/twitter.svg';
import ld from './images/linked_in.svg';
import gp from './images/google_plus.svg';
import email from './images/email.svg';
import call from './images/call.svg';
import location from './images/location.svg'


export default class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
            shown: false,
        };
    }
    hideFooter() {
        this.setState({
            shown: !this.state.shown
        });
    }

    render() {

        return (
            <div>
                <i className="fa fa-window-minimize footer_minimize_icon" onClick={this.hideFooter.bind(this)}></i>
                {!this.state.shown ? <div className="footer">
                    <div className="footer_left">
                        <div className="footer_contact_info">
                            <div className="logo">
                                <Image src={Logo} width="180" height="40" alt="logo_image" />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
                        </div>
                    </div>
                    <div className="footer_right">
                        <div className="footer_top">
                            <Row>
                                <Col lg={4}>
                                    <div className="footer_contact_details">
                                        <Image src={location} alt="icon image" />
                                        <h5 className="text-white">Address:</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                    </div>
                                </Col>
                                <Col lg={4} sm={6} className="pt-3  pt-lg-0">
                                    <div className="footer_contact_details">
                                        <Image src={call} alt="icon image" />
                                        <h5 className="text-white">Call us:</h5>
                                        <a href="tel:+919988765432">+91 99 88 765 432</a>
                                        <a href="tel:+919988765431">+91 99 88 765 431 </a>
                                    </div>
                                </Col>
                                <Col lg={4} sm={6} className="pt-3 pt-lg-0">
                                    <div className="footer_contact_details">
                                        <Image src={email} alt="icon image" />
                                        <h5 className="text-white">Email:</h5>
                                        <a href="mailto:dummy@example.com">dummy@example.com</a>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="footer_bottom">
                            <ul className="copyright_text">
                                <li><p>Copyright © 2019.</p></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Career</a></li>
                            </ul>
                            <ul className="social_media_links">
                                <li><a href="#"><Image src={fb} alt="social icon" /></a></li>
                                <li><a href="#"><Image src={twitter} alt="social icon" /></a></li>
                                <li><a href="#"><Image src={ld} alt="social icon" /></a></li>
                                <li><a href="#"><Image src={gp} alt="social icon" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <a className="back_to_top" href="#">
                        <i className="fa fa-chevron-up" aria-hidden="true"></i>
                    </a>
                </div> :
                    <div className="footer">
                        <div className="footer_bottom ">
                            <ul className="copyright_text">
                                <li><p>Copyright © 2019.</p></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Career</a></li>
                            </ul>
                            <div className="logo minimize_footer_logo">
                                <Image src={Logo} width="180" height="40" alt="logo_image" />
                            </div>
                            <a className="back_to_top" href="#">
                                <i className="fa fa-chevron-up" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                }
            </div>
        )
    }
}