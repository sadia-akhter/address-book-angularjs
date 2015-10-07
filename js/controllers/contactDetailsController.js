angular.module('addressBook')
   .controller('contactDetailsCtrl', ['$scope', 'contacts', 
      function($scope, contacts) {

         $scope.contact = contacts.getSelectedContact();


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
