angular.module('addressBook')
   .controller('contactDetailsCtrl', ['$scope', 'contacts', 
      function($scope, contacts) {

         $scope.contact = contacts.getSelectedContact();

         $scope.$watch(
            function () {
               return contacts.getSelectedContact();
            },
            function (newContact, oldContact) {
               if (newContact != oldContact) {
                  $scope.contact = newContact;
               }
            });


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

