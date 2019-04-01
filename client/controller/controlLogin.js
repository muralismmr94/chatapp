app.controller('controlLogin',function($scope,serviceLogin){
    //login form
    $scope.login= function(){
        var data = {
            'email':$scope.email,
            'password':$scope.password
        }
         console.log(data);
         
        serviceLogin.login(data);
    }
});