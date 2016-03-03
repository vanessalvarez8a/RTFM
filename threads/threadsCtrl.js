angular.module('rtfmApp')
  .controller('threadsCtrl', function($scope, threadsRef, $firebaseArray, $firebaseObject) {

    $scope.threads = $firebaseArray(threadsRef);


    //
    // $scope.threads.$loaded().then(function (threads) {
    //   console.log(threads);
    // });

    $scope.createThread = function() {
      $scope.threads.$add($scope.newThread)
      $scope.newComment = {};
      };


  });
