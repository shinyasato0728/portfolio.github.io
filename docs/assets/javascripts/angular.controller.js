BannerCtrl = (function() {
  BannerCtrl.$inject = ["$scope", "$http"];

  function BannerCtrl($scope, $http) {
    this.$scope = $scope;
    this.$http = $http;
    this.bannerTab01 = "affiliates_banner01_300_250";
    this.bannerTab02 = "affiliates_banner02_300_250";
  }

  return BannerCtrl;

})();

angular.module("portfolioApp").controller("BannerCtrl", BannerCtrl);


menuCtrl = (function() {
  menuCtrl.$inject = ["$scope", "$http"];

  function menuCtrl($scope, $http) {
    this.$scope = $scope;
    this.$http = $http;
    this.openMenu = function() {
      $scope.showMenu = true;
      $scope.showMobileLang = false;
    },
    this.openLang = function() {
      $scope.showMenu = false;
      $scope.showMobileLang = true;
    }
  }

  return menuCtrl;

})();

angular.module("portfolioApp").controller("menuCtrl", menuCtrl);
