/* eslint-disable no-undef */
const productModel = require('../models/products')
const commonHelper = require('../helpers/common');
const cloudinary = require('cloudinary').v2
require("dotenv").config();
// const client = require('../configs/redis')

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});

    exports.getData = async(req,res,next) =>{
      try {
        const search = req.query.search || '';
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit || 0;
        const sortBy = req.query.sortBy || 'id';
        const sortList = req.query.sortList || 'asc';
        const {rows} = await productModel.getData({search, page, limit, offset, sortBy, sortList})

        //Pagination
        const {rows: [count]} = await productModel.countData()
        const totalData = parseInt(count.total_products)
        const totalPage = Math.ceil(totalData / limit)
        const pagination = {
          currentPage: page,
          limit,
          totalData,
          totalPage
        }
        // console.log(res);
        commonHelper.response(res, rows, 'success', 200, 'Get Data Success', pagination)
        // res.send({status: 200, message: 'get data success', pagination, data: result.rows})
      } catch (err) {
        next(err)
      }
    }

    exports.getDetailData = async (req,res) =>{
      try {
        const id = req.params.id || ''
        const {rows} = await productModel.getDetailProduct(id)
        console.log(rows);
        // client.setEx(`products/${req.params.id}`,60*60,JSON.stringify(rows))
        commonHelper.response(res, rows, 'success', 200, 'Get Detail Data Success')
      } catch (error) {
        res.send({message: 'error', error})
      }
    }

    exports.getMyProduct = async(req,res) => {
      const id = req.params.id
      try {
        const {rows} = await productModel.getMyProduct(id)
        commonHelper.response(res, rows, 'success', 200, 'Get My Product Sucess')
      } catch (error) {
        console.log(error);
      }
    }

    exports.insertProduct = async(req,res) =>{
      const {name, id_seller, category, brand, description, stock, price, size} = req.body
      const photo = req.file
      const image = await cloudinary.uploader.upload(photo.path)
      const data = {name, id_seller, category, brand, description, stock, price, size, photo: image.secure_url}
      // console.log(data);
      try {
        await productModel.insert(data)
        return commonHelper.response(res, data, 'sucess', 200, 'Add data sucess')
      } catch (error) {
        console.log(error);
        res.send({message: 'error', error})
      }
    }

    exports.update = async(req, res) => {
      const id = req.params.id
      const {name,brand,description,stock,category_name,price} = req.body
      let photo = req.file
      const image = await cloudinary.uploader.upload(photo.path, { folder: 'Backend Blanja/products' })
      const data = {name,brand,description,stock,category_name,price,photo: image.secure_url} 
      try {
          productModel.update(id, data)
            return commonHelper.response(res, data, 'success', 200, 'data updated')
        } catch (error) {
          console.log(error);
            // res.send({message: 'error', error})
        }
      },

    exports.delete = (req,res, next) =>{
        productModel.deleteData(req.params.id)
        .then(()=>{
          return commonHelper.response(res, null, 'sucess', 203, 'Add data sucess')
        })
        .catch((error)=>{
            next(error)
        })
    }