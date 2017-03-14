(function() {
    'use strict';

    angular
        .module('app')
        .service('cuisine', cuisine);

    cuisine.$inject = ['$q', '$http', '$rootScope'];

    function cuisine($q, $http, $rootScope) {

      var cuisines = [
        {
          "cuisine": {
            "cuisine_id": 6,
            "cuisine_name": "Afghani"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 152,
            "cuisine_name": "African"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 1,
            "cuisine_name": "American"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 2,
            "cuisine_name": "Andhra"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 4,
            "cuisine_name": "Arabian"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 3,
            "cuisine_name": "Asian"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 292,
            "cuisine_name": "Awadhi"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 193,
            "cuisine_name": "BBQ"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 5,
            "cuisine_name": "Bakery"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 145,
            "cuisine_name": "Bangladeshi"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 132,
            "cuisine_name": "Belgian"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 10,
            "cuisine_name": "Bengali"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 270,
            "cuisine_name": "Beverages"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 7,
            "cuisine_name": "Biryani"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 133,
            "cuisine_name": "British"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 168,
            "cuisine_name": "Burger"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 22,
            "cuisine_name": "Burmese"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 30,
            "cuisine_name": "Cafe"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 992,
            "cuisine_name": "Charcoal Grill"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 18,
            "cuisine_name": "Chettinad"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 971,
            "cuisine_name": "Chili"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 25,
            "cuisine_name": "Chinese"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 161,
            "cuisine_name": "Coffee and Tea"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 35,
            "cuisine_name": "Continental"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 1014,
            "cuisine_name": "Cuisine Varies"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 192,
            "cuisine_name": "Deli"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 100,
            "cuisine_name": "Desserts"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 268,
            "cuisine_name": "Drinks Only"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 149,
            "cuisine_name": "Ethiopian"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 38,
            "cuisine_name": "European"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 40,
            "cuisine_name": "Fast Food"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 271,
            "cuisine_name": "Finger Food"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 45,
            "cuisine_name": "French"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 274,
            "cuisine_name": "Fusion"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 134,
            "cuisine_name": "German"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 47,
            "cuisine_name": "Goan"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 156,
            "cuisine_name": "Greek"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 181,
            "cuisine_name": "Grill"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 48,
            "cuisine_name": "Gujarati"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 143,
            "cuisine_name": "Healthy Food"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 49,
            "cuisine_name": "Hyderabadi"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 233,
            "cuisine_name": "Ice Cream"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 148,
            "cuisine_name": "Indian"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 140,
            "cuisine_name": "Iranian"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 135,
            "cuisine_name": "Irish"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 55,
            "cuisine_name": "Italian"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 60,
            "cuisine_name": "Japanese"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 164,
            "cuisine_name": "Juices"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 65,
            "cuisine_name": "Kashmiri"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 891,
            "cuisine_name": "Kebabs"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 62,
            "cuisine_name": "Kerala"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 63,
            "cuisine_name": "Konkan"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 67,
            "cuisine_name": "Korean"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 66,
            "cuisine_name": "Lebanese"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 157,
            "cuisine_name": "Lucknowi"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 102,
            "cuisine_name": "Maharashtrian"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 69,
            "cuisine_name": "Malaysian"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 72,
            "cuisine_name": "Mangalorean"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 70,
            "cuisine_name": "Mediterranean"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 73,
            "cuisine_name": "Mexican"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 137,
            "cuisine_name": "Middle Eastern"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 1015,
            "cuisine_name": "Mithai"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 1018,
            "cuisine_name": "Modern Indian"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 147,
            "cuisine_name": "Moroccan"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 75,
            "cuisine_name": "Mughlai"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 166,
            "cuisine_name": "Naga"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 117,
            "cuisine_name": "Nepalese"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 231,
            "cuisine_name": "North Eastern"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 50,
            "cuisine_name": "North Indian"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 209,
            "cuisine_name": "Pan Asian"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 989,
            "cuisine_name": "Panini"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 290,
            "cuisine_name": "Parsi"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 82,
            "cuisine_name": "Pizza"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 87,
            "cuisine_name": "Portuguese"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 88,
            "cuisine_name": "Rajasthani"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 27,
            "cuisine_name": "Raw Meats"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 1005,
            "cuisine_name": "Roast Chicken"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 84,
            "cuisine_name": "Russian"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 998,
            "cuisine_name": "Salad"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 304,
            "cuisine_name": "Sandwich"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 83,
            "cuisine_name": "Seafood"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 993,
            "cuisine_name": "Sindhi"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 119,
            "cuisine_name": "Singaporean"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 972,
            "cuisine_name": "South American"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 85,
            "cuisine_name": "South Indian"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 89,
            "cuisine_name": "Spanish"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 86,
            "cuisine_name": "Sri Lankan"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 141,
            "cuisine_name": "Steak"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 90,
            "cuisine_name": "Street Food"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 177,
            "cuisine_name": "Sushi"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 163,
            "cuisine_name": "Tea"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 150,
            "cuisine_name": "Tex-Mex"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 95,
            "cuisine_name": "Thai"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 93,
            "cuisine_name": "Tibetan"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 142,
            "cuisine_name": "Turkish"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 308,
            "cuisine_name": "Vegetarian"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 99,
            "cuisine_name": "Vietnamese"
          }
        }
      ];

      var getCuisineIdsByKeyword = function (keyword) {
        var deferred = $q.defer();

        var matchingIds = [];
        angular.forEach(cuisines, function(cuisineObj, key){
          var cuisine = cuisineObj.cuisine;
          if(cuisine.cuisine_name.toUpperCase().indexOf(keyword.toUpperCase()) > -1){
            matchingIds.push(cuisine.cuisine_id);
          }
        });

        deferred.resolve(matchingIds);

        return deferred.promise;
      };


      return {
        getCuisineIdsByKeyword: getCuisineIdsByKeyword
      };
    }
})();