angular
  .module('example')
  .controller('case-study1Controller', function($scope, supersonic) {
    //$scope.navbarTitle = "Settings";
     $scope.choices = [{"id":1, "value":"1", "label":"Good"}, {"id":2, "value":"2","label":"Ok"},{"id":3, "value":"3","label":"Bad"}];

     $scope.updateQuestionValue = function(choice){
        $scope.value = $scope.value || [];
        if(choice.checked){
            $scope.value.push(choice.value);
            $scope.value = _.uniq($scope.value);
        }else{
            $scope.value = _.without($scope.value, choice.value);
        }
    };
  });


