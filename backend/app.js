require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3002;

app.use(express.urlencoded({ extended: true }));

// Definimos la ruta a la carpeta frontend
const frontPath = path.join(__dirname, "..", "frontend");
console.log("Ruta de frontPath:", frontPath);

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Control de Papelera</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@400;600&display=swap" rel="stylesheet">
      <style>
        body {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: #d7d2cb;
          border: 20px solid #7a8f7a;
          box-sizing: border-box;
        }
        .container {
          background-color: #ffffff;
          padding: 20px;
          border: 1px solid #ccc;
          text-align: center;
          width: 400px;
        }
        h1 {
          margin: 0 0 20似

System: 20px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 48px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        button {
          background-color: #e05576;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          border-radius: 8px;
        }
        button:hover {
          background-color: #b33c5e;
          border-radius: 8px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Control de Papelera</h1>
        <button onclick="window.location.href='/inicio'">Entrar</button>
      </div>
    </body>
    </html>
  `);
});

app.get("/inicio", (req, res) => {
  res.sendFile(path.join(frontPath, "inicio.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(frontPath, "inicio_sesion.html"));
});

// Ruta de respaldo para /login POST
app.post("/login", (req, res) => {
  res.send("Funcionalidad de login desactivada temporalmente (sin base6292 de datos)");
});

// Ruta de respaldo para /cambiar-contrasena POST
app.post("/cambiar-contrasena", (req, res) => {
  res.send("Funcionalidad de cambio de contraseña desactivada temporalmente (sin base de datos)");
});

app.get("/administrador.html", (req, res) => {
  res.sendFile(path.join(frontPath, "Administrador.html"));
});
app.get("/logistica.html", (req, res) => {
  res.sendFile(path.join(frontPath, "Logistica.html"));
});
app.get("/contaduria.html", (req, res) => {
  res.sendFile(path.join(frontPath, "contaduria.html"));
});
app.get("/soporte.html", (req, res) => {
  res.sendFile(path.join(frontPath, "soporte.html"));
});
app.get("/cajero.html", (req, res) => {
  res.sendFile(path.join(frontPath, "cajero.html"));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
