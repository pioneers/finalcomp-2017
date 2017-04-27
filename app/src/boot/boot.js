import angular from 'angular';

import App from 'src/app';

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( function() {
    angular
      .module( 'final-comp-bootstrap', [ App.name ] )
      .run(()=>{
        console.log(`Running the 'final-comp-bootstrap' Application`);
      });

    let body = document.getElementsByTagName("body")[0];
    angular.bootstrap( body, [ 'final-comp-bootstrap' ]);
  });
