angular.module('addressBook')
.controller('contactDetailsCtrl', ['$scope', function($scope) {
   var defaultContact = {
      firstName: '', 
      lastName: '', 
      phone: '', 
      email: '', 
      urls: '', 
      address: {
         street: 'Street',
         street2: 'Street',
         city: 'City',
         state: 'State',
         zip: 'Zip',
         country: 'USA'
      }
   };

   $scope.newContact = defaultContact;

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
}]);
