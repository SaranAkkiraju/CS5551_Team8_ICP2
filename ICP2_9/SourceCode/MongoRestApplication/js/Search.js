var myapp = angular.module('demoSearch',[]);
myapp.run(function ($http) {
    // Sends this header with any AJAX request
    $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // Send this header only in post requests. Specifies you are sending a JSON object
    $http.defaults.headers.post['dataType'] = 'json'
});
myapp.controller('SearchRestController',function($scope,$http){
    $scope.FetchData = function(){
        $http.get('http://127.0.0.1:8081/getData?keywords='+$scope.Major).then(function(d)
            {
                console.log("Len is already present"+d.data.length);
                console.log("val already present"+JSON.stringify({d: d}));
                if(d.data.length!=0) {
                    console.log("it is already present" + d.data);
                    $scope.docs = d.data;
                }
                else
                {
                    console.log("No docs are present");
                }
            },function(err)
            {
                console.log(err);
            }
        )

    };
});