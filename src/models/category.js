const pool = require('../configs/db')

const getData = () =>{
    return pool.query(`SELECT * FROM category`)
}

const insert = (data) => {
    const {name} = data;
    return pool.query(`INSERT INTO category(name) VALUES('${name}')`);
}

const update = (id, data) =>{
    const {name} = data
    return pool.query(`UPDATE category SET name='${name}' WHERE id=${id}`)
}

const deleteData = (id) =>{
    return pool.query(`DELETE FROM category WHERE id=${id}`)
}

module.exports = {
    getData,
    insert,
    update,
    deleteData
}