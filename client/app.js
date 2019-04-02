/***************************************************************************
 * Execution : default node     cmd>live-server
 * purpose  : chatting two peoples
 * @description
 * @file    : app.js
 * @overview :In this module contains the sending and receiving messages.
 * @author  : Murali s <muralismmr94@gmail.com>
 * @version :1.0
 * 
 ***************************************************************************/
var app = angular.module('chatapp', ['ui.router','btford.socket-io']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'controlLogin'

        })
        
    $stateProvider.state('forgotPassword', {
        url: '/forgotPassword',
        templateUrl: 'templates/forgotPassword.html',
        controller: 'controlForgotPassword'

    })
    $stateProvider.state('resetPassword', {
            url: '/resetPassword',
            templateUrl: 'templates/resetPassword.html',
            controller: 'controlResetPassword'

        })
        .state('register', {
            url: '/register',
            templateUrl: 'templates/register.html',
            controller: 'controlRegister'
        })

        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'templates/dashboard.html',
            controller: 'chatController'
        });

    $urlRouterProvider.otherwise('login');


});


app.service('SocketService', ['socketFactory', function SocketService(socketFactory) {
    return socketFactory({
        ioSocket: io.connect('http://localhost:4000') 
    });
}]);