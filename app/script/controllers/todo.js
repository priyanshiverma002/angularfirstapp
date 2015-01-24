
angular.module("webapp").controller("TodoCtrl",function($scope){
    $scope.todos=[
        {
            title:"Todo form contrl 1"
        },
        {
            title:"Todo form contrl 2"
        },

    ];
    $scope.newTodo={};

    $scope.add=function(){
        $scope.todos.push($scope.newTodo);
        $scope.newTodo={};
    }
    $scope.delete=function(todo){
        var index=$scope.todos.indexOf(todo);
        $scope.todos.splice(index,1);
    }
    $scope.clearCompleted=function(){
        for (var i = $scope.todos.length - 1; i >= 0; i--) {
            if ($scope.todos[i].completed) {
                $scope.delete($scope.todos[i]);
            }
        }


    }
    $scope.text="we r testing"

})/**
 * Created by sony on 24-01-2015.
 */
