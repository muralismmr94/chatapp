app.service('serviceResetPassword', function ($http, $location) {

    this.resetUser = function (data, $scope) {
        console.log("data on service register", data);

        $http({
            // assigning values to http properties
            method: 'POST',
            url: 'http://localhost:4000/resetPassword',
            data: data

        }).then(
            // sucesscallback of http function
            function successCallback(response) {
                console.log("reset password successfull ");
                console.log(response);
                $scope.message = "reset password successfull";
                $location.path('/login');

            },
            function errorCallback(response) {
                //failurecallback of http properties
                console.log("reset password Unsuccessfull ");
                $scope.message = response.data.message.message;
            }
        );
    }
});
