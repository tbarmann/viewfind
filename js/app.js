/**
 * Created by Sandeep on 01/06/14.
  Modified by Timothy Barmann, 8/16/2015

 */

angular.module('viewfindApp',['ui.router','ngResource','viewfindApp.controllers','viewfindApp.services']);

angular.module('viewfindApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('stories',{
        url:'/stories',
        templateUrl:'partials/stories.html',
        controller:'storyListController'
    }).state('viewStory',{
       url:'/stories/:id/view',
       templateUrl:'partials/story-view.html',
       controller:'storyViewController'
    }).state('newStory',{
        url:'/stories/new',
        templateUrl:'partials/story-add.html',
        controller:'storyCreateController'
   }).state('photos',{
        url:'/photos',
        templateUrl:'partials/photos.html',
        controller:'photoListController',
        activetab: 'photos'
    }).state('newPhoto',{
        url:'/stories/:id/photo/new',
        templateUrl:'partials/photo-add.html',
        controller:'photoCreateController'
   }).state('editStory',{
        url:'/stories/:id/edit',
        templateUrl:'partials/story-edit.html',
        controller:'storyEditController'
    });
}).run(function($state){
   $state.go('stories');
});