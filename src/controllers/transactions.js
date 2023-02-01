const transactionsModel = require('../models/transactions')
const { response } = require('../helpers/common')

exports.getData = async (req,res) =>{
    try {
        const {rows} = await transactionsModel.getData()
        response(res, rows, 'success', 200, 'get data bag success')
        console.log(rows);
    } catch (error) {
        console.log(error);
    }
}

exports.getMyBag = async (req,res) =>{
    try {
        const id = req.params.id
        const {rows} = await transactionsModel.getMyBag(id)
        response(res, rows, 'success', 200, 'get data bag success')
        // console.log(rows);
    } catch (error) {
        console.log(error);
    }
}

exports.getCheckout = async (req,res) => {
    try {
        const id = req.params.id
        const {rows} = await transactionsModel.getCheckout(id)
        response(res, rows, 'success', 200, 'get data bag success')
    } catch (error) {
        console.log(error);
    }
}

exports.insert = (req,res) =>{
    const {rows} = transactionsModel.insert(req.body)
    .then(()=>{
        response(res, rows, 'sucess', 200, 'add transactions sucess')
    })
    .catch((error)=>{
        console.log(error);
        response(res, null, 'failed', 400)
    })
}

exports.deleteTransaction = async(req,res) => {
    const id = req.params.id
    try {
        const {rows} = await transactionsModel.deleteData(id);
        response(res, rows, 'success', 200, 'delete transaction success');
    } catch (error) {
        console.log(error);
    }
}

// exports.update = (req,res,next) =>{
//     transactionsModel.update(req.params.id, req.body)
//     .then((result)=>{
//         res.json({status: 200, message: 'update data success'})
//     })
//     .catch((error)=>{
//         res.json({message: 'error', error})
//     })
// }

