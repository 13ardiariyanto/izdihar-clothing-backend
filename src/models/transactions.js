const pool = require('../configs/db')

const getData  = () =>{
    return pool.query(`SELECT * FROM transaction`)
}

// const getMyBag = (id) => {
//     return pool.query(`SELECT * FROM transaction WHERE id_seller = '${id}'`)
// }

const getMyBag = (id) => {
    return pool.query(`SELECT transaction.*, product.name, product.brand, product.price, product.photo FROM transaction INNER JOIN product ON transaction.id_product = product.id WHERE transaction.id_customer = '${id}'`)
}

const insert = (data) =>{
    const {id_customer, id_seller, id_product, qty, total_price} = data
    return pool.query(`INSERT INTO transaction(id_customer, id_seller, id_product, qty, total_price)VALUES('${id_customer}', '${id_seller}', ${id_product}, ${qty}, ${total_price})`)
}

const getCheckout = (id)=>{
    return pool.query(`SELECT transaction.*, product.name AS product_name, product.price, product.brand, product.photo, contact.address, contact.zip, contact.city, contact.recipient_name, contact.recipient_phone FROM transaction INNER JOIN product ON product.id = transaction.id_product INNER JOIN contact ON transaction.id_customer = '${id}'`)
}

const deleteData = (id) =>{
    return pool.query(`DELETE FROM transaction WHERE id=${id}`)
}

const update = (id, data) =>{
    const {name, total_order, price, total_price} = data
    return pool.query(`UPDATE transaction SET name='${name}', total_order=${total_order}, price=${price}, total_price=${total_price} WHERE id=${id}`)
}

module.exports = {
    getData,
    getMyBag,
    getCheckout,
    insert,
    deleteData,
    update
}