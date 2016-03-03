angular.module('rtfmApp')
.controller('threadCtrl', function($scope, threadRef, commentsRef, $firebaseObject, $firebaseArray) {

    var thread = $firebaseObject(threadRef);
    $scope.comments = $firebaseArray(commentsRef);
    thread.$bindTo($scope, 'thread');



    $scope.createComment = function() { //this function will get the called from the thread.html view and adds a comment to your angularFire comments "arra"
        $scope.comments.$add($scope.newComment);
        $scope.newComment = {};

      };

  });
