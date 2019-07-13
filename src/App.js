import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Index from "./component/index";
import Appoinment_booking_after_login from './component/appoinment_booking_after_login';
import Appoinment_booking_based_on_doctor from './component/appoinment_booking_based_on_doctor';
import Appoinment_booking_based_on_hospital from './component/appoinment_booking_based_on_hospital';
import Appoinment_booking_v1 from './component/appoinment_booking_v3-1';
import Appoinment_booking_v2 from './component/appoinment_booking_v3-2';
import Appoinment_booking_v3 from './component/appoinment_booking_v3-3';
import Appoinment_booking_without_login from './component/appoinment_booking_without_login';
import Comparition_lab from './component/comparition_lab';
import Doctor_consulatation from './component/doctor_consulatation';
import Doctor_consulatation_doctor_details_page from './component/doctor_consulatation_doctor_details_page';
import Doctor_consulatation_doctor_list from './component/doctor_consulatation_doctor_list';
import Doctor_login from './component/doctor_login';
import Doctor_profile from './component/doctor_profile';
import Doctor_register from './component/doctor_register';
import Emotional_wellbeing from './component/emotional_wellbeing';
import Emotional_wellbeing_detail from './component/emotional_wellbeing_detail';
import Emotional_wellbeing_list from './component/emotional_wellbeing_list';
import Eprescription from './component/e-prescription';
import EprescriptionV2 from './component/e-prescriptionV2';
import Family_doctor from './component/family_doctor';
import Family_doctor_detail from './component/family_doctor_detail';
import Follow_Up_Consultation from './component/follow_Up_Consultation';
import Forgot_password from './component/forgot_password';
import Footer from './component/footer';
import Header from './component/header';
import Lab_booking_pathologist from './component/lab_booking_pathologist';
import Lab_booking_pathologist_report from './component/lab_booking_pathologist_report';
import Lab_booking_pathology_detail from './component/lab_booking_pathology_detail';
import Lab_booking_radiologist from './component/lab_booking_radiologist';
import Lab_booking_radiologist_report from './component/lab_booking_radiologist_report';
import Lab_booking_radiologist_detail from './component/lab_booking_radiologist_detail';
import Landing_page from './component/landing_page.js';
import Medicine_supply from './component/medicine_supply.js';
import Medicine_supply_details from './component/medicine_supply_details';
import Medicine_supply_list from './component/medicine_supply_list';
import Medical_equipment_list from './component/medical_equipment_list';
import Medical_equipment_supply from './component/medical_equipment_supply';
import Medical_equipment_detail from './component/medical_equipment_detail';
import My_appoinment from './component/my_appoinment';
import My_dashboard from './component/my_dashboard';
import New_born_baby from './component/new_born_baby';
import Nursing from './component/nursing';
import Nursing_detail from './component/nursing_detail';
import Nursing_list_page from './component/nursing_list_page';
import Physiotherapy_list_detail from './component/physiotherapy_list_detail';
import Physiotherapy_list from './component/physiotherapy_list';
import Physiotherapy from './component/physiotherapy';
import PrescriptionSharing from './component/prescriptionSharing';
import PatientRegister from './component/patientRegister';
import PatientLogin from './component/patient_login';
import Pathologist from './component/pathologist';
import Radiologist from './component/radiologist'; 
import Search_special from './component/search_special';
import Second_opinion from './component/second_opinion';
import Search_clinic from './component/search_clinic';
import Specialities from './component/specialities';
import VideoConsult from './component/videoConsult';
import VideoConsultV2 from './component/videoConsultV2';
import Validate_otp from './component/validate_OTP';
import Vital_collection from './component/vital_collection';
import Pick_Date_Time from './component/pick_date_and_time';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Route path="/" component={Index} exact />
          <Route path="/appoinment_booking_after_login" component={Appoinment_booking_after_login} />
          <Route path="/appoinment_booking_based_on_doctor" component={Appoinment_booking_based_on_doctor} />
          <Route path="/appoinment_booking_based_on_hospital" component={Appoinment_booking_based_on_hospital} />
          <Route path="/appoinment_booking_without_login" component={Appoinment_booking_without_login} />
          <Route path="/appoinment_booking_v3-1" component={Appoinment_booking_v1} />
          <Route path="/appoinment_booking_v3-2" component={Appoinment_booking_v2} />
          <Route path="/appoinment_booking_v3-3" component={Appoinment_booking_v3} />
          <Route path="/comparition_lab" component={Comparition_lab} />
          <Route path="/doctor_consulatation" component={Doctor_consulatation} />
          <Route path="/doctor_consulatation_doctor_details_page" component={Doctor_consulatation_doctor_details_page} />
          <Route path="/doctor_consulatation_doctor_list" component={Doctor_consulatation_doctor_list} />
          <Route path="/doctor_login" component={Doctor_login} />
          <Route path="/doctor_profile" component={Doctor_profile} />
          <Route path="/doctor_register" component={Doctor_register} />
          <Route path="/emotional_wellbeing_list" component={Emotional_wellbeing_list} />
          <Route path="/emotional_wellbeing" component={Emotional_wellbeing} />
          <Route path="/emotional_wellbeing_detail" component={Emotional_wellbeing_detail} />
          <Route path="/e-prescription" component={Eprescription} />
          <Route path="/e-prescriptionV2" component={EprescriptionV2} />
          <Route path="/family_doctor" component={Family_doctor} />
          <Route path="/family_doctor_detail" component={Family_doctor_detail} />
          <Route path="/follow_Up_Consultation" component={Follow_Up_Consultation} />
          <Route path="/forgot_password" component={Forgot_password} />
          <Route path="/landing_page" exact component={Landing_page} />
          <Route path="/lab_booking_pathologist" component={Lab_booking_pathologist} />
          <Route path="/lab_booking_pathologist_report" component={Lab_booking_pathologist_report} />
          <Route path="/lab_booking_pathology_detail" component={Lab_booking_pathology_detail} />
          <Route path="/lab_booking_radiologist" component={Lab_booking_radiologist} />
          <Route path="/lab_booking_radiologist_report" component={Lab_booking_radiologist_report} />
          <Route path="/lab_booking_radiologist_detail" component={Lab_booking_radiologist_detail} />
          <Route path="/medicine_supply" component={Medicine_supply} />
          <Route path="/medicine_supply_details" component={Medicine_supply_details} />
          <Route path="/medicine_supply_list" component={Medicine_supply_list} />
          <Route path="/medical_equipment_list" component={Medical_equipment_list} />
          <Route path="/medical_equipment_supply" component={Medical_equipment_supply} />
          <Route path="/medical_equipment_detail" component={Medical_equipment_detail} />
          <Route path="/my_appoinment" component={My_appoinment} />
          <Route path="/my_dashboard" component={My_dashboard} />
          <Route path="/new_born_baby" component={New_born_baby} />
          <Route path="/nursing" component={Nursing} />
          <Route path="/nursing_detail" component={Nursing_detail} />
          <Route path="/nursing_list_page" component={Nursing_list_page} />
          <Route path="/patientRegister" component={PatientRegister} />
          <Route path="/patientLogin" component={PatientLogin} />
          <Route path="/pathologist" component={Pathologist} />
          <Route path="/physiotherapy_list_detail" component={Physiotherapy_list_detail} />
          <Route path="/physiotherapy_list" component={Physiotherapy_list} />
          <Route path="/physiotherapy" component={Physiotherapy} />
          <Route path="/prescriptionSharing" component={PrescriptionSharing} />
          <Route path="/radiologist" component={Radiologist} />
          <Route path="/search_special"  component={Search_special} />
          <Route path="/second_opinion" component={Second_opinion} />
          <Route path="/search_clinic" component={Search_clinic} />
          <Route path="/specialities" component={Specialities} />
          <Route path="/validate_otp" component={Validate_otp} />
          <Route path="/videoConsult" component={VideoConsult} />
          <Route path="/videoConsultV2" component={VideoConsultV2} />
          <Route path="/vital_collection" component={Vital_collection} />
          <Route path="/pick_date_time" component={Pick_Date_Time} />
          <Footer/>
          </Router>
      </div>
    );
  }
}

export default App;
