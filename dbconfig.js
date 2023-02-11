const config ={
    user :'',
    password:'',
    server:'127.0.0.1',
    database:'pharmacy',
    options:{
        trustedConnection:true,
        enableArithPort : true,
        instancename:'SQLEXPRESS'
    },
    port:1433
}

module.exports = config;