app.controller('controlForgotPassword', function ($scope, serviceForgotPassword) {
    //forgot password
    $scope.forgotPassword = function () {
        var data = {
            //binding data and storing 
            'email': $scope.email,
          
        }
        //calling the service function.
        serviceForgotPassword.forgotPassword(data, $scope);
    }
});