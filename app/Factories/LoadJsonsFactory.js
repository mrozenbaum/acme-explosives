"use strict";
// Functions to pull data from json's
app.factory("LoadJsonsFactory", function ($q, $http) {

      var getCategories = function() {
        return $q( (resolve, reject) => {
          $http.get("jsons/categories.json")
            .then( (data) => {
              resolve(data);
            })
            .catch( (error) => {
              reject(error);
            });
        });

      };

      var getProducts = function() {
        return $q( (resolve, reject) => {
          $http.get("jsons/products.json")
          .then( (data2) => {
            resolve(data2);
          })
          .catch( (error) => {
            reject(error);
          });
        });

      };

      var getTypes = function() {
        return $q( (resolve, reject) => {
          $http.get("jsons/types.json")
          .then( (data3) => {
            resolve(data3);
          })
          .catch( (error) => {
            reject(error);
          });
        });
                    

      };
      
return {getCategories, getProducts, getTypes};
            
});



