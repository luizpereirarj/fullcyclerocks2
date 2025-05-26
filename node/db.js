async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:root@db:3306/nodedb");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

 
async function selectPeopleNames(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT name FROM people;');
    return rows;
}
 
async function insertPeopleNames(name){
    const sql = 'INSERT INTO people (name) VALUES (?);';
    const conn = await connect();
    const response = await conn.query(sql,[name]);
    return response;
}

module.exports = {selectPeopleNames, insertPeopleNames}