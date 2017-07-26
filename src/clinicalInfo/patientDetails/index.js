import './patientDetails.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import route from './patientDetails.route';

import PatientInfoController from './patientInfo.controller';
import PatientDiagnosesController from './diagnoses/patientDiagnoses.controller';
import PatientController from './edit/patient.controller';
import DiagnoseController from './diagnose/diagnose.controller';

export default angular.module('app.clinicalInfo.patientDetails', [uiRouter])
  .config(route)
  .controller('PatientInfoController', PatientInfoController)
  .controller('PatientDiagnosesController', PatientDiagnosesController)
  .controller('PatientController', PatientController)
  .controller('DiagnoseController', DiagnoseController)
  .name;
