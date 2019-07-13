import React from 'react';
import { Image, Col, Row, Container, InputGroup, FormControl } from 'react-bootstrap';
//Images
import heartbeat from './images/light_blue_heart_beat_icon.svg';


export default class New_born_baby extends React.Component {

    render() {

        return (
            <div>
                <section class="page_breadcrumb baby_born_breadcrumb">
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <div class="page_title">
                                    <h1>New Born Baby & Mother Care at Home<Image src={heartbeat} alt="heart beat icon" /></h1>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div class="d-flex flex-wrap align-content-center" >
                                    <ul>
                                        <li>Patient</li>
                                        <li>New Born Baby & Mother Care at Home</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section class="all_page_search_section born_baby_head_sec">
                    <Container>
                        <p class="born_baby_heading_content">Worried about your newborn’s needs? Facing issues in coping up with the initial challenges of feeding infant child and post-operative recovery? Opt for Kanga and Roo(New Born Baby & Mother Care), a post-natal care program from Pryde and enjoy the joys of motherhood without the worries.</p>
                    </Container>
                </section>
                <section class="born_baby_content_section text-white">
                    <Container>
                        <p class="born_baby_content">
                            Pregnancy care comprises of three parts prenatal care, during pregnancy and postnatal care. While a lot of attention is given to prenatal care, postnatal care is equally important. In fact, postnatal is a difficult period and the new mother requires a lot of care, guidance and attention for the proper recovery and good health of both the mother and the child. Giving birth can be both an emotional and stressful period for a new mother. According to the World Health Organisation (WHO) the first 24 hours after birth are most critical for both the baby and the mother and proper care and attention should be given to the new mother and the baby in this period.
		            	</p>
                        <p class="born_baby_content">
                            Portea offers a carefully designed Kanga and Roo program. It is a postnatal care program that takes the workload and the worries away from the new parents. Parenthood is an overwhelming experience and in today’s world where couple’s are sometimes forced to live away from their families or have no family support in this critical period, they have to take care of the baby on their own. This translates into a lot of work and stress for the new parents, especially in the first few months which are critical for both the baby and the mother.
			            </p>
                    </Container>
                </section>
                <section class="all_page_search_section baby_born_sec">
                    <Container>
                        <div class="page_title" style={{marginBottom:20}}>
                            <h1>Home Visit<Image src={heartbeat} alt="heart beat icon" /></h1>
                        </div>
                        <Row class=" form_control_section">
                            <Col lg={4}>
                            <InputGroup><FormControl placeholder="Enter Your Full Name" /></InputGroup>
                            </Col>
                            <Col lg={4}>
                            <InputGroup><FormControl placeholder="Enter Your Mobile Number" /></InputGroup>
                            </Col>
                        </Row>
                        <div class="baby_btn" style={{marginTop:20}}>
                            <button class="btn">REQUEST A CALLBACK</button>
                        </div>
                    </Container>
                </section>
            </div>
        )
    }
}



