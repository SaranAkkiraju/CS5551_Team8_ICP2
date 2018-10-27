

// Declare app level module which depends on views, and components
angular.module('homepage',[])
    .controller('homectrl', function($scope, $http) {
        console.log("hi");
        var sampletext="";
        $scope.getSearchResult = function() {
            $http.get('http://127.0.0.1:8080/getData?searchkey='+$scope.searchitem).success(function(data)
            {
                try {
                    console.log(data);
                    $scope.searchDescription = data.itemListElement[0].result.detailedDescription.articleBody;
                    $scope.description = "Description:";
                    $scope.wiki = data.itemListElement[0].result.detailedDescription.url;
                    $scope.wikiheading = "Explore " + $scope.searchitem + " wiki in the following link";
                    $scope.searchimage = data.itemListElement[0].result.image.contentUrl;
                    document.getElementById("errormsg").innerHTML ="";
                }
                catch(err){
                    console.log(err);
                    document.getElementById("errormsg").innerHTML = "Please Correct your search item";
                }
            })
        }
    });