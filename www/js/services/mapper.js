(function() {
    'use strict';

    angular
        .module('app')
        .service('mapper', mapper);

    mapper.$inject = ['$q', '$http', '$rootScope'];

    function mapper($q, $http, $rootScope) {

      var hotwords = ['food', 'drink', 'beverage', 'alcohol', 'cuisine', 'dance', 'coffee', 'tea'];

      var getKeys = function (categoryArray) {
        var deferred = $q.defer();

        var mappingJson = {
          food: false,
          drink: false,
          beverage: false,
          alcohol: false,
          cuisine: false,
          cuisine_name: '',
          dance: false,
          cafe: false
        };

        angular.forEach(categoryArray, function (categoryObj, key) {
          hotwords.forEach(function (hotword) {
            var index = categoryObj.label.toUpperCase().indexOf(hotword.toUpperCase());
            if( index > -1){
              mappingJson[hotword] = true;
              if(hotword === 'cuisine'){
                var resArray = categoryObj.label.split('/cuisines/');
                var cuisine = resArray[1];

                cuisine = cuisine.replace(/cuisine/g, "").trim();
                mappingJson.cuisine_name = cuisine;
              }

              if(hotword.indexOf(['coffee', 'tea'])){
                mappingJson.alcohol = false;
                mappingJson.dance = false;
                mappingJson.cafe = true;
              }
            }
          });
        });

        deferred.resolve(mappingJson);

        return deferred.promise;
      };

      return {
        getKeys: getKeys
      };
    }
})();
