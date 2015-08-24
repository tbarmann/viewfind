/**
 * Created by Sandeep on 01/06/14.
 Modified by Timothy Barmann, 8/16/2015
 */

angular.module('viewfindApp.services',[]).factory('Story',function($resource){
    return $resource('/arrestDB/stories/:id',{id:'@id'},{
        update: {
            method: 'PUT'
        }
    });
}).factory('Photo',function($resource){
    return $resource('/arrestDB/photos/:id',{id:'@id'},{
        queryByStoryId:{
            url: '/arrestDB/photos/story_id/:story_id',
            story_id:'@story_id',
            method: 'GET',
            isArray: true
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
