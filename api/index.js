const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const publico = path.join(__dirname, "../public");



app.use(express.static(publico));

/**** mysql */
//variables de entorno, esas vienen de docker
const mysqlhost = process.env.MYSQLHOST || '192.168.1.25';
const mysqluser = process.env.MYSQLUSER || "prueba";
const mysqlpass = process.env.MYSQLPASS || "prueba";
//paquete
const mysql = require('mysql');
//conexión
const con = mysql.createConnection({
    host: mysqlhost,
    user: mysqluser,
    password: mysqlpass
});
//prueba
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected! :P");
});


/**** mysql */

console.log(`serving ${publico}`);

app.get('/api/saludo', async (req, res) => {
    console.log("entrando /api/saludo");

    await setTimeout(() => {

        console.log("entrando2 . . . .");

        const con2 = mysql.createConnection({
            host: mysqlhost,
            user: mysqluser,
            password: mysqlpass
        });
        //prueba
        con2.connect(function (err) {
            if (err) {
                console.log("error");
                return res.status(503).json({ status: "not conected" });
            }
            else {
                console.log("not error");
                return res.status(202).json({ status: " conected" });

            }

        });

    }, 2500);
})


app.get('/', (req, res) => {
    console.log("desplegando html");
    res.sendFile(path.join(__dirname, "../views/index.html"));
});


app.listen(port, () => console.log(`listening on http://localhost:${port}`));
