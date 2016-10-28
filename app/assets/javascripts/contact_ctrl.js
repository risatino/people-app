(function(){
  "use strict";

angular.module("app").controller("contactCtrl", function($scope, $http) {
  $scope.setup = function() {
    $http.get("/api/v1/people.json".then(function(response) {
      $scope.people = response.data;
    })); 
  };

    $scope.toggleBio = function(contact) {
      contact.bioVisible = !contact.bioVisible;
      // if (contact.bioVisible) {
      //   contact.bioVisible = true;
      // } else {
      //   contact.bioVisible = true;
      // }
    };

    $scope.addContact = function(newName, newBio) {
        var newContact = {
                          name: newName,
                          bio: newBio,
                          bioVisible: false
                         };

        $http.post("/api/v1/people.json", newContact).then(function(response) {
          $scope.people.push(response.data);
          $scope.formName = null;
          $scope.formBio = null;
          $scope.errors = null;
        }, function(errorResponse) {
          $scope.errors = errorResponse.data.errors;
        });
    };

    $scope.deleteContact = function($index) {
      var index = $scope.contacts.indexOf(contactObj);
      $scope.contacts.splice(index, 1);
    };

    $scope.toggleOrder = function(attribute) {
      if (attribute != $scope.orderAttribute) {
        $scope.descending = false;
      } else {
        $scope.descending = !$scope.descending;
      }

      $scope.orderAttribute = attribute;
    };
  });
}());