const client = require('../configs/redis')
const {response} = require('../helpers/common')

const hitCache = async(req,res,next) => {
    const data = await client.get(`product`)
    if(data){
        console.log('product',data)
        return response(res, data, 'success', 200, 'Get Data from Redis')
    }
    next()
}

const clearCache = async(req,res,next) => {
    const id = req.params.id
    client.del(`products/${id}`)
    next()
}

module.exports = {hitCache,clearCache}