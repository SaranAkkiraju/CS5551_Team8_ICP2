/**
 * Created by user on 23/10/2016.
 */
var myapp = angular.module('demoMongo',[]);
myapp.run(function ($http) {
    // Sends this header with any AJAX request
    $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // Send this header only in post requests. Specifies you are sending a JSON object
    $http.defaults.headers.post['dataType'] = 'json'
});
myapp.controller('MongoRestController',function($scope,$http){
    $scope.insertData = function(){
        console.log($scope.formData.id);
        console.log($scope.formData.sname);
        console.log($scope.formData.course);
        console.log($scope.formData.Major);
        console.log($scope.formData.Minor);
        var dataParams = {
            'id'     : $scope.id,
            'sname'  : $scope.sname,
            'course' : $scope.course,
            'Major'  : $scope.Major,
            'Minor'  : $scope.Minor,
        };
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        var req = $http.post('http://127.0.0.1:8081/register',$scope.formData);
        req.success(function(data, status, headers, config) {
            $scope.message = data;
            console.log(data);
            window.location.href = 'Search.html';

        });
        req.error(function(data, status, headers, config) {
            alert( "failure message: " + JSON.stringify({data: data}));
        });
    };
});