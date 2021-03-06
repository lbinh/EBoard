angular.module('starter.controllers', [])

.controller('MainCtrl', ['$scope', function($scope) {}])

.controller('BrowseCtrl', function($scope) {})

.controller('FeaturedCtrl', function($scope, Posts) {
  $scope.posts = null;

    var handleSuccess = function(data, status) {
        $scope.posts = data;
    };
    var handleError = function(data, status) {
        console.log("error getting posts");
        console.log(data);
    };

    Posts.getPosts().success(handleSuccess).error(handleError);
})

.controller('PostDetailCtrl', function($scope, $stateParams, Posts) {
    $scope.post = null;

    var handleSuccess = function(data, status) {
        for (var i = 0; i < data.length; i++) {
             console.log(data[i].id);
          if (data[i].id === $stateParams.postId) {
             $scope.post = data[i];
          }
        }
    };
    var handleError = function(data, status) {
        console.log("error getting posts" );
        console.log(data);
    };

    Posts.getPosts().success(handleSuccess).error(handleError);

})
// Picture controller in the detail page
.controller('PicsCtrl', function($scope, $ionicModal, $ionicSlideBoxDelegate) {
  
  $scope.navSlide = function(index) {
    $ionicSlideBoxDelegate.slide(index, 500);
  }

  $ionicModal.fromTemplateUrl('templates/browse/image-popover.html', {
    scope: $scope,
    animation: 'fade-in'
  }).then(function(modal) {
      $scope.modal = modal;
  })

  $scope.openModal = function() {
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    
  });
})

// Picture controller in the detail page
.controller('MapCtrl', function($scope, $ionicModal, uiGmapGoogleMapApi) {
  // Do stuff with your $scope.
  // Note: Some of the directives require at least something to be defined originally!
  // e.g. $scope.markers = []

  // uiGmapGoogleMapApi is a promise.
  // The "then" callback function provides the google.maps object.
  uiGmapGoogleMapApi.then(function(maps) {
    $scope.map = {center: {latitude: 40.1451, longitude: -99.6680}, zoom: 3 };
    $scope.options = {scrollwheel: false};
    $scope.marker = {
      coords: {
        latitude: 40.1451,
        longitude: -99.6680
      },
      show: false,
      id: 0
    };

    $scope.windowOptions = {
      visible: false
    };

    $scope.onClick = function() {
      $scope.windowOptions.visible = !$scope.windowOptions.visible;
    };

    $scope.closeClick = function() {
      $scope.windowOptions.visible = false;
    };

    $scope.title = "USSSSS!";

    $ionicModal.fromTemplateUrl('templates/browse/gmap-popover.html', {
      scope: $scope,
      animation: 'fade-in'
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      
    });
  });
})

;