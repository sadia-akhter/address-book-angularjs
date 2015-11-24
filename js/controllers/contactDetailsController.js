angular.module('addressBook')
   .controller('contactDetailsCtrl', ['$scope', 'contacts',
      function($scope, contacts) {

        if(contacts.contactState === 'new') {
          $scope.contactTitle = 'New Contact';
          $scope.contact = null;
        } else {
          $scope.contactTitle = contacts.getSelectedContactName();
          $scope.contact = angular.copy(contacts.getSelectedContact());
        }

        $scope.confirmDelete = false;

        $scope.$watch(
          function () {
              return contacts.getContactState();
          },
          function (newState, oldState) {
            if(newState === 'new') {
              $scope.contactTitle = 'New Contact';
              $scope.contact = null;
            } else {
              $scope.contactTitle = contacts.getSelectedContactName();
              $scope.contact = angular.copy(contacts.getSelectedContact());
            }
          });

         $scope.$watch(
            function () {
               return contacts.getSelectedContact();
            },
            function (newContact, oldContact) {
              if(contacts.getContactState() === 'new') {
                $scope.contactTitle = 'New Contact';
                $scope.contact = null;
              } else {
                $scope.contactTitle = contacts.getSelectedContactName();
                $scope.contact = angular.copy(newContact);
              }
            });

            $scope.saveNewContact = function () {
               if (angular.isDefined($scope.contact)) {
                  contacts.addNewContact($scope.contact);
                  $scope.contact = null;
               }
            };

            $scope.cancelContact = function () {
              contacts.setContactState('detail');
              $scope.contact = angular.copy(contacts.getSelectedContact());
              $scope.confirmDelete = false;
            }


         $scope.editContact = function () {
            contacts.setContactState("edit");
            $scope.contact = angular.copy(contacts.getSelectedContact());
         };


         $scope.saveContact = function () {
               console.log('save');
               contacts.saveContact($scope.contact);
               $scope.cancelContact();
               $scope.confirmDelete = false;
         };

         $scope.deleteContact = function () {
           console.log('delete');
           $scope.confirmDelete = true;
         }

         $scope.confirmDeleteContact = function () {
           console.log('confirm delete');
           var contact = contacts.getSelectedContact();
//           console.log(contact);
           contacts.deleteContact(contact);
           $scope.confirmDelete = false;

         }

      }
   ]);
