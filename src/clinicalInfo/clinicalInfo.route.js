route.$inject = ['$stateProvider'];

export default function route($stateProvider) {
  $stateProvider
    .state('app.clinicalInfo', {
      url: 'clinical-info/',
      abstract: true,
      template: '<ui-view></ui-view>'
    });
}
