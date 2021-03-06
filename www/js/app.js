// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'uiGmapgoogle-maps', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $ionicConfigProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {

  $ionicConfigProvider.backButton.previousTitleText(false).text(''); // Hide default back btn text
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.tabs.style("standard");
  $ionicConfigProvider.views.transition("android");  // android view transition

  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyA8ZRHMaCCw7qv0woJako_pS6n3DrjSVYA',
    v: '3.17',
    libraries: 'weather,geometry,visualization'
  });

  $stateProvider
  .state('home', {
      url: "/",
      abstract: true,
      templateUrl: "templates/pages/home.html"
    })

    //**************     BROWSE PAGE     *******************************

    .state('home.browse', { //  url#/browse
      url: "browse",
      views: {
        'browse' :{
          templateUrl: "templates/browse/browse.html",
          controller: 'BrowseCtrl'
        }
      }
    })
    .state('home.browse.featured', { //  url#/browse/featured
      url: "/featured",
      views: {
        'browsing' :{
          templateUrl: "templates/browse/featured.html",
          controller: 'FeaturedCtrl'
        }
      }
    })
    // details page
    .state('home.details', { //  url#/featured/details
      url: "browse/details/:postId",
      views: {
        'browse' :{
          templateUrl: "templates/browse/details.html",
          controller: 'PostDetailCtrl'
        }
      }
    })
    .state('home.browse.bulletin', { //  url#/browse/bulletin
      url: "/bulletin",
      views: {
        'browsing' :{
          templateUrl: "templates/browse/bulletin.html"
        }
      }
    })
    .state('home.browse.classified', { //  url#/browse/classified
      url: "/classified",
      views: {
        'browsing' :{
          templateUrl: "templates/browse/classified.html"
        }
      }
    })
    .state('home.browse.search', { //  url#/browse/search
      url: "/search",
      views: {
        'browsing' :{
          templateUrl: "templates/browse/search.html"
        }
      }
    })

  //********* saved Page ************
    .state('home.saved',{
      url:"saved",
      views:{
        'saved':{
          templateUrl:"templates/saved/saved.html"
        }
      }
    })

    //**************     PROFILE PAGE     *******************************

    .state('home.profile', { //  url#/profile
      url: "profile",
      views: {
        'profile' :{
          templateUrl: "templates/profile/profile.html"
        }
      }
    })

    //**************     POST PAGE     *******************************

    .state('home.post', { //  url#/post
      url: "post",
      views: {
        'post' :{
          templateUrl: "templates/post/post.html"
        }
      }
    })

    ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/browse/featured');

});
