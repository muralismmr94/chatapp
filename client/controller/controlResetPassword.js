app.controller('controlResetPassword', function ($scope, serviceResetPassword) {

    // for registration form
    $scope.resetPassword = function () {
        var user = {
             //binding data and storing 
            'password': $scope.password
        }

        console.log("register calling", user);
        //checking the password matched or not
        if ($scope.password != $scope.password) {
            $scope.message = "password not match ";
        } else {
            //calling the service function.
            serviceResetPassword.registerUser(user, $scope);
        }
    }
});
