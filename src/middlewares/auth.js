const {response} = require('../helpers/common')
const jwt = require('jsonwebtoken')
// eslint-disable-next-line no-undef
let key = process.env.JWT_KEY

const seller = (req,res,next) =>{
    let token
        let auth = req.headers.authorization
        token = auth.split(" ")[1]
        let decode = jwt.verify(token,key)
        let dataRole = decode.role
        // console.log(dataRole);
        if(dataRole !== 'seller'){
            return response(res, null, 'failed', 404, 'Just Seller can process')
        }
        return next()
}

const user = (req,res,next) =>{
    let token
        let auth = req.headers.authorization
        token = auth.split(" ")[1]
        let decode = jwt.verify(token,key)
        let dataRole = decode.role
        console.log(dataRole);
        if(dataRole !== 'user'){
            return response(res, null, 'failed', 404, 'Just User can process')
        }
        return next()
}

const admin = (req,res,next) =>{
    let token
        let auth = req.headers.authorization
        token = auth.split(" ")[1]
        let decode = jwt.verify(token,key)
        let dataRole = decode.role
        console.log(dataRole);
        if(dataRole !== 'admin'){
            return response(res, null, 'failed', 404, 'Just admin can process')
        }
        return next()
}

const protect = (req,res,next) =>{
    try{
        let token
        if(req.headers.authorization){
            let auth = req.headers.authorization
            token = auth.split(" ")[1]
            let decode = jwt.verify(token,key)
            req.payload = decode
            next()
        } else {
            return response(res, null, 'failed', 404, 'Server Need Token')
        }
    } catch(err) {
        console.log(err)
        if(err && err.name == 'JsonWebTokenError'){
            return response(res, null, 'failed', 404, 'Invalid Token')
        } else if (err && err.name == 'TokenExpriredError'){
            return response(res, null, 'failed', 404, 'Invalid Token')
        } else {
            return response(res, null, 'failed', 404, 'Invalid Token')
        }
    }
}

module.exports = {
    seller,
    user,
    protect,
    admin
}