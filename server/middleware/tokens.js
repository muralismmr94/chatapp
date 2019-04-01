const jwt = require('jsonwebtoken');
module.exports={
    GenerateToken(payload){
        const token =jwt.sign({payload},'secretkey',{expiresIn:'2h'}) //time valid to expires key time is two hours.
            const obj = {
            success : true,
            message : 'Token Generated successfully',
            token : token
        }
        return obj;
    }
}