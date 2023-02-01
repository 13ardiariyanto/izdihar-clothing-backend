/* eslint-disable no-undef */
require("dotenv").config();

const myCors = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', `${process.env.URL_CLIENT}`)
    // http://domain-website-kamu.com
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')

    next()
  }

  module.exports = {
    myCors
  }