route.$inject = ['$stateProvider'];

export default function route($stateProvider) {
  $stateProvider
    .state('app.clinicalInfo.patients', {
      url: 'patients/',
      abstract: true,
      template: require('./patients.tpl.html'),
      controller: 'PatientsController',
      controllerAs: 'ctrl'
    });
}
