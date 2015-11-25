angular.module('addressBook')
.controller('contactDetailsCtrl', ['$scope', 'contacts',
function($scope, contacts) {

   $scope.visible = contacts.getContactListSize() > 0;
   $scope.confirmDelete = false;

   if(contacts.contactState === 'new') {
      $scope.contactTitle = 'New Contact';
      $scope.contact = null;
      $scope.visible = true;
   } else {
      $scope.contactTitle = contacts.getSelectedContactName();
      $scope.contact = angular.copy(contacts.getSelectedContact());
   }

   $scope.$watch(
      function () {
         return contacts.getContactState();
      },
      function (newState, oldState) {
         if(newState === 'new') {
            $scope.contactTitle = 'New Contact';
            $scope.contact = null;
            $scope.visible = true;
         } else {
            $scope.contactTitle = contacts.getSelectedContactName();
            $scope.contact = angular.copy(contacts.getSelectedContact());
            $scope.visible = contacts.getContactListSize() > 0;
         }
      }
   );

   $scope.$watch(
      function () {
         return contacts.getSelectedContact();
      },
      function (newContact, oldContact) {
         if(contacts.getContactState() === 'new') {
            $scope.contactTitle = 'New Contact';
            $scope.contact = null;
            $scope.visible = true;
         } else {
            $scope.contactTitle = contacts.getSelectedContactName();
            $scope.contact = angular.copy(newContact);
            $scope.visible = contacts.getContactListSize() > 0;
         }
      }
   );

   $scope.saveNewContact = function () {
      if (angular.isDefined($scope.contact)) {
         contacts.addNewContact($scope.contact);
         $scope.contact = null;
         $scope.visible = contacts.getContactListSize() > 0;
      }
   };

   $scope.cancelContact = function () {
      contacts.setContactState('detail');
      $scope.contact = angular.copy(contacts.getSelectedContact());
      $scope.confirmDelete = false;
      $scope.visible = contacts.getContactListSize() > 0;
   };

   $scope.editContact = function () {
      contacts.setContactState("edit");
      $scope.contact = angular.copy(contacts.getSelectedContact());
   };

   $scope.saveContact = function () {
      contacts.saveContact($scope.contact);
      $scope.cancelContact();
      $scope.confirmDelete = false;
      $scope.visible = contacts.getContactListSize() > 0;
   };

   $scope.deleteContact = function () {
      $scope.confirmDelete = true;
   };

   $scope.confirmDeleteContact = function () {
      var contact = contacts.getSelectedContact();
      contacts.deleteContact(contact);
      $scope.confirmDelete = false;
      $scope.visible = contacts.getContactListSize() > 0;
   };
}]);
