var jwt = require('jsonwebtoken');
var secret = "adcgfft";
var auth = function (req, res, next) {
    console.log("In authantication function");
    var token = req.headers["token"];
    console.log(token ,"token is in auth");
    var response = {
        'message': "Unauthorised user here "
    };
       jwt.verify(token, secret, function (err, decodedData) {
        if (err) {
            console.log(err);
            return res.status(401).send(response);
        }
        else {
            console.log(decodedData);
            next();
        }
    });
}
module.exports = auth;