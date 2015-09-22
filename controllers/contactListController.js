angular.module('addressBook')
.controller('contactListCtrl', ['$scope', function($scope){
	$scope.contacts = [
		{  
			firstName: 'Harry', 
			lastName: 'Potter', 
			phones: [''], 
			emails: ['hpotter@domain.com'], 
			urls: ['www.harrypotter.com'], 
			addresses: [
				{
					street: '4 Privet Drive, Little Whinging',
					apt: 'The cupboard under the stairs',
					city: 'Surrey',
					state: '',
					zip: '',
					country: 'UK'
				}]
		},
		{ 
			firstName: 'Sherlock', 
			lastName: 'Holmes', 
			phones: [], 
			emails: ['sholmes@domain.com'], 
			urls: ['www.sherlock.com'], 
			addresses: [
				{
					street: '22B Baker Street',
					apt: '',
					city: 'London',
					state: '',
					zip: 'NW1 6XE',
					country: 'UK'
				}]
		},
		{ 
			firstName: 'Robert', 
			lastName: 'Langdon', 
			phones: ['6174951000'], 
			emails: ['rlangon@domain.com'], 
			urls: ['www.symbology.com'], 
			addresses: [
				{
					street: '86 Brattle Street',
					apt: 'Langdon Residence',
					city: 'Cambridge',
					state: 'MA',
					zip: '02138',
					country: 'USA'
				}]
		},
	];
}]);