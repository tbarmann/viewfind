/**
 * Created by Sandeep on 01/06/14.
  Modified by Timothy Barmann, 8/16/2015
 */
angular.module('viewfindApp.controllers',[]).controller('storyListController',function($scope,$state,popupService,$window,Story){

    $scope.stories=Story.query();

    $scope.deleteStory=function(story){
        if(popupService.showPopup('Really delete this?')){
            story.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('storyViewController',function($scope,$stateParams,Story,Photo){

    $scope.story=Story.get({id:$stateParams.id});
    $scope.photos = Photo.queryByStoryId({story_id:$stateParams.id});

}).controller('photoListController',function($scope,$state,$stateParams,$window,popupService,Story,Photo){

    $scope.photos = Photo.query();
    $scope.deletePhoto=function(photo){
        console.log(photo);
        if(popupService.showPopup('Really delete this?')){
            photo.$delete(function(){
                $state.go('photos');
               // $window.location.href='#/photos';
            });
        }
     //   $state.go('photos');
    }



}).controller('storyCreateController',function($scope,$state,$stateParams,Story){

    $scope.story=new Story();

    $scope.addStory=function(){
        $scope.story.$save(function(){
            $state.go('stories');
        });
    }
}).controller('photoCreateController',function($scope,$state,$stateParams,Story,Photo){

    $scope.photo=new Photo();
    $scope.photo.story_id = $stateParams.id;

    $scope.addPhoto=function(){
        $scope.photo.$save(function(){
            $state.go('viewStory',{id:$stateParams.id});



        });
    }
}).controller('storyEditController',function($scope,$state,$stateParams,Story){

    $scope.updateStory=function(){
        $scope.story.$update(function(){
            $state.go('stories');
        });
    };

    $scope.loadStory=function(){
        $scope.story=Story.get({id:$stateParams.id});
    };

    $scope.loadStory();
});