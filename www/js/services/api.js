(function() {
    'use strict';

    angular
        .module('app')
        .service('api', api);

    api.$inject = ['$q', '$http', '$rootScope'];

    function api($q, $http, $rootScope) {
        var get = function(url, params) {
          var deferred = $q.defer();

          $http({
            url: url,
            method: 'GET',
            params: params
          }).then(function(response) {

            deferred.resolve(response);
          }, function(error) {
            deferred.reject(error);
          });

          return deferred.promise;
        };

        var post = function(url, params) {
          var deferred = $q.defer();

          var headers = {
            "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8'
          };

          $http({
            url: url,
            method: 'POST',
            headers: headers,
            data: $.param({searchQuery: params.text})
          }).then(function(response) {
            deferred.resolve(response);
          }, function(error) {
            deferred.reject(error);
          });

          return deferred.promise;
        };

        var getEntityID = function(){
          var deferred = $q.defer();
          $http.get('http://ip-api.com/json').success(function(coordinates) {
              $http.get('https://developers.zomato.com/api/v2.1/cities?lat='+coordinates.lat+'&lon='+coordinates.lon).success(function (data) {
                deferred.resolve(data.location_suggestions[0].id);
              });
        	});
          return deferred.promise;
        };

        var zomatoPost = function(url, params) {
          var deferred = $q.defer();

          var headers = {
            "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8'
          };

          $http({
            url: url,
            method: 'POST',
            headers: headers,
            data: $.param({
              entity_id : params.entity_id,
              entity_type : "city",
              q : params.q,
              cuisines : params.cuisines,
              establishment_type : "",
              category : params.category
            })
          }).then(function(response) {
            deferred.resolve(response);
          }, function(error) {
            deferred.reject(error);
          });

          return deferred.promise;
        };


        var zomatoBaseUrl = 'https://zomato-search-watson.herokuapp.com/zomatoSearch';

        var watsonBaseUrl = 'https://zomato-watson.herokuapp.com/analyse';

        return {
          zomatoBaseUrl: zomatoBaseUrl,
          watsonBaseUrl: watsonBaseUrl,
          getEntityID: getEntityID,
          get: get,
          post: post,
          zomatoPost: zomatoPost
        };
    }
})();
