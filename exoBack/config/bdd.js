import mysql from "mysql2/promise";

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Root1303!",
    database: "exo",
});

db.getConnection()
    // si la connexion est réussie
    .then(() =>
        console.log("database OK 🟢"))
    // si la connexion échoue
    .catch(error => console.error("database KO 🔴", error));

// exoprtation de la connexion
export default db;