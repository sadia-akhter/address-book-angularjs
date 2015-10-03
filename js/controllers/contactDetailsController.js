angular.module('addressBook')
   .controller('contactDetailsCtrl', ['$scope', '$localStorage', 
      function($scope, $localStorage) {
         var defaultContact = {
            firstName: '', 
            lastName: '', 
            phone: '', 
            email: '', 
            urls: '', 
            address: {
               street: '',
               street2: '',
               city: '',
               state: '',
               zip: '',
               country: ''
            }
         };

         $scope.contacts = $localStorage.contacts;
//         console.log($scope.contacts);
//         console.log("selected ID: " + $localStorage.selectedContactId);

         for (var property in $localStorage.lookup) {
            console.log(property);
            console.log($localStorage.lookup[property]);
         }

         $scope.contact = defaultContact;
         $scope.selectedContactId = $localStorage.contacts[0].id; 

         $scope.loadContact = function(id) {
            $scope.contact = $localStorage.lookup[id];
            $scope.selectedContactId = id; 
         }

         $scope.loadContact($scope.selectedContactId);

         $scope.discardNewContact = function () {
            console.log("cancel: ");
   
            if (angular.isDefined($scope.newContact)) {
               $scope.newContact = null;
            } 
         };

         $scope.addNewContact = function () {
            if (angular.isDefined($scope.newContact)) {
               console.log("save: ");
               console.dir($scope.newContact);
               $scope.newContact = null;
            }
         }
      }
   ]);
