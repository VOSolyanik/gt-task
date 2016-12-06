import './patients.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import route from './patients.route';
import PatientsController from './patients.controller';

export default angular.module('app.clinicalInfo.patients', [uiRouter])
  .config(route)
  .controller('PatientsController', PatientsController)
  .name;
