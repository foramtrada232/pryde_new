import React from 'react';
import { Col, Container, Row, FormControl, InputGroup } from 'react-bootstrap';
import Select from 'react-select';

// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' },
// ];
export default class Search_special extends React.Component {
    state = {
        selectedOption: null,
    };

    showFirstSearchBar() {
        console.log("hgbjlkjhuj")
        document.getElementById("firstSearchBar").style.display = "block";
    }

    hideFirstSearchBar() {
        document.getElementById("firstSearchBar").style.display = "none";
    }

    showSecondSearchBar(){
        document.getElementById("secondSearchBar").style.display = "block";
    }

    hideSecondSearchBar(){
        document.getElementById("secondSearchBar").style.display = "none";
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
    };

    render() {
        const { selectedOption } = this.state;
        return (
            <div>
                <div className="all_page_search_section">
                    <Container>
                        <label>See a Specialist from home within minutes.</label>
                        <Row>
                            <Col xl={4} lg={6} className="mb-3">
                                <div className="geolocation">
                                    <input type="text" className="form-control"
                                        placeholder="Search for Doctors by geolocation..."
                                        aria-describedby="basic-addon1" onFocus={this.showFirstSearchBar.bind(this)}
                                        onBlur={this.hideFirstSearchBar.bind(this)}/>
                                </div>
                            </Col>

                            <Col xl={4} lg={6} className="mb-3">
                                <div className="search_symptom">
                                    <Select
                                        value={selectedOption}
                                        onChange={this.handleChange}
                                        placeholder={'Search for Doctors by symptoms...'}
                                        options={[{ value: 'Abdominal pain', label: 'Abdominal pain' },
                                        { value: 'Blood in stool', label: 'Blood in stool' },
                                        { value: 'Chest pain', label: 'Chest pain' },
                                        { value: 'Constipation', label: 'Constipation' },
                                        { value: 'Cough', label: 'Cough' }]}
                                    />
                                </div>
                            </Col>
                            <Col xl={4} lg={6} className="mb-3">
                                <div className="hospitals">
                                    <InputGroup>
                                        <FormControl
                                            placeholder="Search for Doctors by hospitals..."
                                            aria-describedby="basic-addon1"  onFocus={this.showSecondSearchBar.bind(this)}
                                            onBlur={this.hideSecondSearchBar.bind(this)}
                                        />
                                    </InputGroup>
                                </div>
                            </Col>
                        </Row>
                        <div className="geolocation_menu" id="firstSearchBar" style={{ display: 'none' }}>
                            <Row>
                                <Col lg={10} md={12}>
                                    <Row>
                                        <Col lg md={12}>
                                            <p>City</p>
                                            <select>
                                                <option value="Ahmedabad">Ahmedabad</option>
                                                <option value="Rajkot">Rajkot</option>
                                                <option value="Jamnagar">Jamnagar</option>
                                                <option value="Morbi">Morbi</option>
                                            </select>
                                        </Col>
                                        <Col lg md={12}>
                                            <p>Area</p>
                                            <select>
                                                <option value="">Shivranjani</option>
                                                <option value="">Nehrunagar</option>
                                                <option value="">Kalupur</option>
                                                <option value="">Chandlodiya</option>
                                            </select>
                                        </Col>
                                        <Col lg md={12}>
                                            <p>Location</p>
                                            <InputGroup className="mb-3">
                                                <FormControl
                                                    placeholder="X-ray Clinic, B-110, Doctor House,"
                                                    aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                        </Col>
                                        <Col lg md={12}>
                                            <p>Pin Code</p>
                                            <InputGroup className="mb-3">
                                                <FormControl
                                                    placeholder="333222"
                                                    aria-describedby="basic-addon1"
                                                />
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={2} md={12}>
                                    <a href="appoinment_booking_v3-3.html" className="w-100"><button className="btn search_btn">Search</button></a>
                                </Col>
                            </Row>
                        </div>
                        <div className="hospital_menu" id="secondSearchBar" style={{ display: 'none' }}>
                            <Row>
                                <Col xl={3} lg={4} md={6} sm={12}>
                                    <p>City</p>
                                    <select>
                                        <option value="Ahmedabad">Ahmedabad</option>
                                        <option value="Rajkot">Rajkot</option>
                                        <option value="Jamnagar">Jamnagar</option>
                                        <option value="Morbi">Morbi</option>
                                    </select>
                                </Col>
                                <Col xl={3} lg={4} md={6} sm={12}>
                                    <p>Area</p>
                                    <select>
                                        <option value="">Shivranjani</option>
                                        <option value="">Nehrunagar</option>
                                        <option value="">Kalupur</option>
                                        <option value="">Chandlodiya</option>
                                    </select>
                                </Col>
                                <Col xl={3} lg={4} md={6} sm={12}>
                                    <p>Location</p>

                                    <input type="text" name="" className="form-group" placeholder="X-ray Clinic, B-110, Doctor House," />
                                </Col>
                                <Col xl={3} lg={4} md={6} sm={12}>
                                    <p>Pin Code</p>
                                    <input type="text" name="" className="form-group" placeholder="333222" />
                                </Col>
                                <Col xl={3} lg={4} md={6} sm={12}>
                                    <p>Hospital Associated With Pryde</p>
                                    <select>
                                        <option value="">Indovasc Hospital</option>
                                        <option value="">Indovasc Hospital</option>
                                        <option value="">Indovasc Hospital</option>
                                        <option value="">Indovasc Hospital</option>
                                    </select>
                                </Col>
                                <Col xl={3} lg={4} md={6} sm={12}>
                                    <a href="appoinment_booking_v3-3.html" className="w-100"><button className="btn search_btn">Search</button></a>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}