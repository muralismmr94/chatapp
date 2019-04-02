app.service('serviceForgotPassword', function ($http, $location) {

    //forgot password function
    this.forgotPassword = function (data, $scope) {
        $http({
            //assigning value to http properties
            method: 'POST',
            url: 'http://localhost:4000/forgotPassword',
            data: data,
        }).then(
            //successcallback of http function
            function successCallback(response) {
                console.log("forgotPassword successfull ");
                var userid = response.data.message[0]._id;
                var name = response.data.message[0].firstname;
                var token = response.data.token;
                localStorage.setItem("userid", userid);
                localStorage.setItem("name", name);
                localStorage.setItem("token",token);
                $location.path('/dashboard');
                $scope.loginMessage = "login successfull";
            },
            //error callback of http function
            function errorCallback(response) {
                console.log("register Unsuccessfull ");
                console.log(response);
                $scope.loginMessage = 'EmailId Incorrect ';


            }
        );
    }

});
