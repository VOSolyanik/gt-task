routing.$inject = ['$urlRouterProvider', '$locationProvider', '$localStorageProvider'];

export default function routing($urlRouterProvider, $locationProvider, $localStorageProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $localStorageProvider.setKeyPrefix('gt');
}
