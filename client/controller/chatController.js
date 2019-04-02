app.controller('chatController', function ($scope, SocketService, $state, chatServices) {
    $scope.message = '';
    $scope.allUserArr = [];
    $scope.currUserName = localStorage.getItem('name');
    $scope.currUser = localStorage.getItem('userid');
    $scope.recieverUserName = localStorage.getItem('rusername');
    var token = localStorage.getItem("token");
    console.log(token.exp);
    //if the tocken is null then go to login page
    if (token === null) {
        $state.go('login');
    }
    //listening to the events
    SocketService.on('newMessageSingle', (message) => {
        if (localStorage.getItem('userid') == message.senderUserId
            || (localStorage.getItem('userid') == message.recieverUserId
                && localStorage.getItem('ruserId') == message.senderUserId)) {
            if ($scope.allUserArr === undefined) {
                //assigning message to variable
                $scope.allUserArr = message;
            } else {
                $scope.allUserArr.push(message);
            }
        }
    })

    //get all users available in the db
    $scope.getAllUsers = function () {
        chatServices.getAllUsers($scope, token);
    }
    //calling the function
    $scope.getAllUsers();
    //select person from list
    $scope.person = function (userData) {
        $scope.allUserArr = '';

        localStorage.setItem('rusername', userData.firstname);
        localStorage.setItem('ruserId', userData._id);
        $scope.recieverUserName = localStorage.getItem('rusername');
        $scope.getUserMsg();
    }
    //get all message
    $scope.getUserMsg = function () {
        console.log("i am called");
        chatServices.getUserMsg($scope);
    }
    $scope.getUserMsg();
    //send message function
    $scope.sendmessage = function () {
        var msg = {
            'senderUserId': localStorage.getItem('userid'),
            'senderName': localStorage.getItem('name'),
            'recieverUserId': localStorage.getItem('ruserId'),
            'recieverName': localStorage.getItem('rusername'),
            'message': $scope.message
        };
        $scope.message = '';
        //emitting the message to the browser
        SocketService.emit('createMessage', msg);
    }



    // logout function
    $scope.logout = function () {
        localStorage.clear();
        //return back to login page
        $state.go('login')
    }


});
