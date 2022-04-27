var app = angular.module("IndexApp", []);
app.controller('Brandscontroller', ['$scope', 'BrandFactory', '$filter', '$http', function ($scope, BrandFactory, $filter, $http) {
    $scope.BrandsList = [];

    $scope.getBrandsList = function () {
        debugger;
        BrandFactory.getBrandsList().then(function successCallBack(response) {
            debugger;
            if (response.data != null) {
                $scope.BrandsList = response.data.Data;
            }
        })
    };

}]);
app.controller('Servicescontroller', ['$scope', 'ServicesFactory', '$filter', '$http', function ($scope, ServicesFactory, $filter, $http) {
    $scope.ServicesList = [];
    $scope.getServicesList = function () {
        ServicesFactory.getServicesList().then(function successCallBack(response) {
            debugger;
            if (response.data != null) {
                $scope.ServicesList = response.data.Data;
            }
        })
    };
}]);

app.controller('Testimonialcontroller', ['$scope', 'TestimonialFactory', '$filter', '$http', function ($scope, TestimonialFactory, $filter, $http) {
    $scope.TestimonialList = [];
    $scope.getTestimonialList = function () {
        TestimonialFactory.getTestimonialList().then(function successCallBack(response) {
            debugger;
            if (response.data != null) {
                $scope.TestimonialList = response.data.Data;
            }
        })
    };
}]);