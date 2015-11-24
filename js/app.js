angular.module('addressBook', ['ngStorage', 'contacts'])
.controller('appContlr', ['$scope', 'contacts',
  function($scope, contacts) {

    $scope.contactState = contacts.getContactState();

    $scope.$watch(
       function () {
          return contacts.getContactState();
       },
       function (newState, oldState) {
          if (newState != oldState) {
             $scope.contactState = newState;
          }
       });
  }]);
