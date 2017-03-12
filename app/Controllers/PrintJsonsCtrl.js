"use strict";

app.controller("PrintJsonsCtrl", function($scope, LoadJsonsFactory) {

  var printJsons = function() {
    LoadJsonsFactory.getCategories()
      .then( (categories) => {
        // Setting Variable name for data recieved from categories.json
        var categoriesObj = categories.data.categories;
          // Looping over the categories object
          for (var i =0; i < categoriesObj.length; i++){
          }
          // Setting the categories into scope
          $scope.categories = categories.data.categories;
          // console.log("categories!!!!",$scope.categories);
          LoadJsonsFactory.getProducts()

            .then( (products) => {
              var productsObj = products.data.products[0];
                Object.keys(productsObj).forEach(function(key){
                  // console.log("keyyyyy",key, productsObj[key]);
                });
                $scope.products = products.data.products[0];
                LoadJsonsFactory.getTypes()

                .then( (types) => {
                  var typesObj = types.data.types;
                    for (var i = 0; i < typesObj.length; i++){
                      // console.log("typesOBJ IIIII:", typesObj[i]);
                    }
                    $scope.types = types.data.types;
            
                });
            });
      });
      
  };
  printJsons();

});


