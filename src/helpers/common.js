const response = (res, result, status, statusCode, message, pagination) =>{
    const resultPrint = {}
    resultPrint.status = status
    resultPrint.statusCode = statusCode
    resultPrint.data = result
    resultPrint.message = message || null
    if (pagination)resultPrint.pagination = pagination
    res.status(statusCode).json(resultPrint)
}

// const response = (res, statusCode, status, result, message) => {
//     const printResult = {};
//     printResult.success = status;
//     printResult.statusCode = statusCode;
//     printResult.data = result || null;
//     printResult.message = message || null;
//     res.status(statusCode).json(printResult);
//   };

// const error = (statusCode, message) =>{
//     const resultPrint = {}
//     resultPrint.statusCode = statusCode
//     resultPrint.message = message
// }

module.exports = {
    response
}