var config = require('./dbconfig');
const sql = require('mssql');



async function getProducts(){
    try{
        let pool = await sql.connect(config);
        let allproducts = await pool.request().query("select * from products");
        return allproducts.recordsets;
    }
    catch (error){
        console.log(error);
    }
}

module.exports ={
    getProducts : getProducts
}