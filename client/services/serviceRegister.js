app.service('serviceRegister', function ($http, $location) {

    this.registerUser = function (data, $scope) {
        console.log("data on service register", data);

        $http({
            //assigning values to http proporties
            method: 'POST',
            url: 'http://localhost:4000/register',
            data: data

        }).then(
            // suceesscallback of http function
            function successCallback(response) {
                console.log("register successfull ");
                console.log(response);
                $scope.message = "register successfull";
                $location.path('/login');

            },
            //errorcallback of http function
            function errorCallback(response) {
                console.log("register Unsuccessfull ");
                $scope.message = response.data.message.message;


            }
        );
    }
});
