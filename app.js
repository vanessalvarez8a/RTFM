angular.module('rtfmApp', ['ui.router', 'firebase'])

.constant('fb', { // for the URL to be constant everywhere
  url: 'https://chatroomnv.firebaseio.com'
})

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/threads');

 $stateProvider
  .state('threads', {
    url:'/threads',
    templateUrl: 'threads/threads.html',
    controller: 'threadsCtrl',
    resolve: {
      threadsRef: function(threadService) {
        return threadService.getThreads();
      }
    }
  })
  .state('thread', {
    url: '/thread/:threadId',
    templateUrl: 'thread/thread.html',
    controller: 'threadCtrl',
    resolve: {
      threadRef: function(threadService, $stateParams) {
        return threadService.getThread($stateParams.threadId);
      },
      commentsRef: function(threadService, $stateParams) {
        return threadService.getComments($stateParams.threadId); // now i need to inject this commentsRef in threadCtrl as well with $firebaseArray
      }
    }

  });



});
