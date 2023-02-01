const categoryModel = require('../models/category')
const commonHelper = require('../helpers/common')

exports.get = async (req,res) =>{
    try {
        const {rows} = await categoryModel.getData()
        return commonHelper.response(res, rows, 'success', 200, 'Get Data Category Success')
    } catch (error) {
        res.send({message: 'error', error})
    }
}

exports.insert = (req, res) => {
    try {
        const {name} = req.body
        const data = {name}
        categoryModel.insert(data)
        return commonHelper.response(res, data.name, 'success', 200, 'Insert Data Category Success')
    } catch (error) {
        res.send({message: 'error', error})
    }
  }

exports.update = (req,res) =>{
    try {
        const {name} = req.body
        const data = {name}
        categoryModel.update(req.params.id, data)
        return commonHelper.response(res, name, 'success,', 200, 'Data Updated')
    } catch (error) {
        res.send({message: 'error', error})
    }
}

exports.deleteData = (req,res) =>{
    categoryModel.deleteData(req.params.id)
    .then(()=>{
        return commonHelper.response(res, null, 'success', 200, 'Delete Data Success')
    })
    .catch((error)=>{
        res.json({message: 'error', error})
    })
}