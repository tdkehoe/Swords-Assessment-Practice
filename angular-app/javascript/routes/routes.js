app.config(function($routeProvider) {

  $routeProvider
  .when('/', { // INDEX
    templateUrl: 'javascript/templates/home.html',
    controller: 'HomeController'
  })
  .when('/new', { // must be above '/:id' otherwise it'll think that the ID is 'new'
    templateUrl: 'javascript/templates/new.html', // NEW
    controller: 'NewController'
  })
  .when('/:id/edit', { // UPDATE
    templateUrl: 'javascript/templates/edit.html',
    controller: 'EditController'
  })
  .when('/:id', { // SHOW
    templateUrl: 'javascript/templates/show.html',
    controller: 'ShowController'
  })
  .otherwise({ redirectTo: '/' });
});
