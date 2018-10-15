

// Declare app level module which depends on views, and components
angular.module('homepage',[])
    .controller('homectrl', function($scope, $http) {
        console.log("hi");
        var sampletext="";
        $scope.getSearchResult = function() {
            $http.get("https://kgsearch.googleapis.com/v1/entities:search?query="+$scope.searchitem+"&key=AIzaSyCPmXKX0WRf5nw3bEh0oAvRBB-GHldi8Tk&limit=1&indent=True").success(function(data)
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
                    document.getElementById("errormsg").innerHTML = "Please Correct your search item";
                }
            })
        }
    });