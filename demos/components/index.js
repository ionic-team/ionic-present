angular.module('ionicApp', ['ionic'])

.controller('MainCtrl', function($scope, $timeout, $ionicActionSheet, $ionicModal) {

  $scope.items = ['Item 1', 'Item 2'];

  $scope.showActionsheet = function() {

    $ionicActionSheet.show({
      titleText: 'Action Sheet Example',
      buttons: [
        { text: 'Share' },
        { text: 'Move' },
      ],
      destructiveText: 'Delete',
      cancelText: 'Cancel',
      cancel: function() {
        console.log('CANCELLED');
      },
      buttonClicked: function(index) {
        console.log('BUTTON CLICKED', index);
        return true;
      },
      destructiveButtonClicked: function() {
        console.log('DESTRUCT');
        return true;
      }
    });
  };

  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.doRefresh = function() {

    $timeout( function() {
      //simulate async response
      $scope.items.push('Item ' + ($scope.items.length + 1));

      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');

    }, 1000);

  };

});
