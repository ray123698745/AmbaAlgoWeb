'use strict';
(function(){

class QueryComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('algoWebApp')
  .component('query', {
    templateUrl: 'app/query/query.html',
    controller: QueryComponent
  });

})();
