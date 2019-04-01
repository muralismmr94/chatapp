app.controller('controlForgotPassword', function ($scope, serviceForgotPassword) {
    //forgot password
    $scope.forgotPassword = function () {
        var data = {
            'email': $scope.email,
          
        }
        serviceForgotPassword.forgotPassword(data, $scope);
    }
});