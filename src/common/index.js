import angular from 'angular';

import PatientsService from './services/patients.service';
import DiagnosesService from './services/diagnoses.service';
import NumberInput from './directives/numberInput.directive';

export default angular.module('app.common', [])
  .service('PatientsService', PatientsService)
  .service('DiagnosesService', DiagnosesService)
  .directive('numberInput', NumberInput.factory())
  .name;
