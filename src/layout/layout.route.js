route.$inject = ['$stateProvider'];

export default function route($stateProvider) {
  $stateProvider
    .state('app', {
      url: '/',
      abstract: true,
      template: require('./layout.tpl.html'),
      controller: 'LayoutController',
      controllerAs: 'ctrl'
    });
}
