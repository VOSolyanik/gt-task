import angular from 'angular';
import uiRouter from 'angular-ui-router';

import route from './clinicalInfo.route';

import patients from './patients';
import patientDetails from './patientDetails';
import common from '../common';

export default angular.module('app.clinicalInfo', [uiRouter, common, patients, patientDetails])
  .config(route)
  .name;
