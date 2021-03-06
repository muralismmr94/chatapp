app.service('serviceLogin', function ($http, $location) {


    this.login = function (data, $scope) {
        $http({
            //assigning values tohttp proporties
            method: 'POST',
            url: 'http://localhost:4000/login',
            data: data,
        }).then(
            //successcallback of http function
            function successCallback(response) {
                console.log("Login successfull at serviceLogin in client side");
                var userid = response.data.message[0]._id;
                var name = response.data.message[0].firstname;
                var token = response.data.token;
                localStorage.setItem("userid", userid);
                localStorage.setItem("name", name);
                localStorage.setItem("token", token);
                // if login sucess dashboard will be open
                $location.path('/dashboard');
            },
            //errorcallback of http function
            function errorCallback(response) {
                console.log("register Unsuccessfull please check your username or password");
                console.log(response);
                $scope.loginMessage = 'EmailId or Password Incorrect ';


            }
        );
    }

});
