(function(){
  "use strict";

  angular.module("app").controller("contactCtrl", function($scope) {
    $scope.contacts = [
                        { 
                          name: "Eric Cartman", 
                          bio: "He's a dood", 
                          bioVisible: false 
                        }, 
                        { 
                          name: "Kenny McCormick", 
                          bio: "He's an orange dud", 
                          bioVisible: false 
                        },
                        { 
                          name: "Butters", 
                          bio: "He wears a baby blue t-shirt", 
                          bioVisible: false
                        },
                        { 
                          name: "Stan Marsh", 
                          bio: "He wears the same red, blue and maroon outfit", 
                          bioVisible: false
                        },
                        { 
                          name: "Kyle Broflovski", 
                          bio: "He wears green and brown all day", 
                          bioVisible: false
                        }
                      ];

    $scope.toggleBio = function(contact) {
      // contact.bioVisible = !contact.bioVisible;
      if (contact.bioVisible) {
        contact.bioVisible = true;
      } else {
        contact.bioVisible = true;
      }
    };

    $scope.addContact = function(newName, newBio) {
      if (newName && newBio) {
        var newContact = {
                          name: newName,
                          bio: newBio,
                          bioVisible: false
                         };
        $scope.contacts.push(newContact);
        $scope.formName = null;
        $scope.formBio = null;
      }
    };

    $scope.deleteContact = function(index) {
      $scope.contacts.splice(index, 1);
    };
  });
}());