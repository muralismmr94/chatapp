app.service('chatServices', function ($http) {
    try {
        this.getAllUsers = function ($scope, usertoken) {
            $http({
                //assigning value to http properties 
                method: 'GET',
                url: 'http://localhost:4000/auth/getAllUser',
                headers: {
                    'token': usertoken,
                }
            }).then(
                //call back function of http service
                function successCallback(response) {
                    $scope.allUser = response.data.result;
                    console.log(response.data.result);

                },
                function errorCallback(response) {
                    console.log("register Unsuccessfull ");
                    console.log(response);
                }
            );
        }
    }
    catch (err) {
        console.log("error found here in getting users")
    }
    try {
        this.getUserMsg = function ($scope) {
            var arr = [];
            var usertoken = localStorage.getItem('token');
            $http({
                //assigning value to http proprties 
                method: 'GET',
                url: 'http://localhost:4000/auth/getUserMsg',
                headers: {
                    'token': usertoken,
                }
            }).then(
                function successCallback(response) {
                    console.log(response.data.message);

                    for (let i = 0; i < (response.data.message); i++) {
                        a = response.data.message[i];

                        if (((localStorage.getItem('userid') == a.senderUserId)
                            && (localStorage.getItem('ruserId') == a.recieverUserId))
                            || ((localStorage.getItem('userid') == a.recieverUserId
                                && localStorage.getItem('ruserId') == a.senderUserId))) {
                            console.log("local user is ", localStorage.getItem('userid'),
                                "a user is ", a.senderUserId, " local rcvrid is ",
                                localStorage.getItem('ruserId'), "  reciver is ", a.recieverUserId);
                            //pushing all message to array
                            arr.push(a);
                        }

                    }
                    $scope.allUserArr = arr;
                    console.log("Users msg successfull ", arr);

                },
                function errorCallback(response) {
                    console.log("Unsuccessfull ");
                    console.log(response);

                }
            );
        }
    }
    catch (err) {
        console.log("found error in getting message")
    }

})
