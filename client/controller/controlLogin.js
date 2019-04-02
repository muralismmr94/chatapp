app.controller('controlLogin',function($scope,serviceLogin){
    //login form
    $scope.login= function(){
        var data = {
            //binding data and storing 
            'email':$scope.email,
            'password':$scope.password
        }
         console.log(data);
        //calling the service function.
        serviceLogin.login(data);
    }
});