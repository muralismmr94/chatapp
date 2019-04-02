
app.controller('controlRegister', function ($scope, serviceRegister) {

    // for registration form
    $scope.register = function () {
        var user = {
             //binding data and storing 
            'firstname': $scope.firstname,
            'lastname': $scope.lastname,
            'email': $scope.email,
            'password': $scope.password,
            
        }

        console.log("register calling", user);
        //checking the password matched or not
        if ($scope.password != $scope.password) {
            $scope.message = "password does not match ";
        } else {
            //calling the service function.
            serviceRegister.registerUser(user, $scope);
            
        }
    }
});


