(function(){
  "use strict";

angular.module("app").controller("contactCtrl", function($scope, $http) {
  $scope.setup = function() {
    $http.get("/api/v1/people.json".then(function(response) {
      $scope.contacts = response.data;
    }); 
  };

    $scope.toggleBio = function(contact) {
      // contact.bioVisible = !contact.bioVisible;
      if (contact.bioVisible) {
        contact.bioVisible = true;
      } else {
        contact.bioVisible = true;
      }
    };

    $scope.addContact = function(newName, newBio) {
        var newContact = {
                          name: newName,
                          bio: newBio,
                          bioVisible: false
                         };

        $http.post("/api/v1/people.json", newContact).then(function(response) {
          $scope.contacts.push(response.data);
          $scope.formName = null;
          $scope.formBio = null;
          $scope.errors = null;
        }, function(errorResponse) {
          $scope.errors = errorResponse.data.errors;
        });
    };

    $scope.deleteContact = function($index) {
      $scope.contacts.splice(index, 1);
    };
  });
}());