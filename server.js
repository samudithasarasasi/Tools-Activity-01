const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

let userName = "";

app.get("/", (req, res) => {
  res.send(`
  <html>
  <head>
  <title>Welcome</title>

  <style>
  body{
    background:#0f1633;
    font-family: Arial;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    color:white;
  }

  .card{
    background:#1c2247;
    padding:40px;
    border-radius:15px;
    width:350px;
    text-align:center;
  }

  input{
    width:100%;
    padding:12px;
    margin-top:20px;
    border-radius:8px;
    border:none;
  }

  button{
    margin-top:20px;
    padding:12px;
    width:100%;
    border:none;
    border-radius:8px;
    background:#6c6cff;
    color:white;
    font-size:16px;
    cursor:pointer;
  }

  button:hover{
    background:#5a5aff;
  }
  </style>

  </head>

  <body>

  <div class="card">
    <h1>Welcome</h1>
    <p>Please enter your name</p>

    <form action="/submit" method="POST">
      <input type="text" name="name" placeholder="Enter your name" required>
      <button type="submit">Get Greeting</button>
    </form>
  </div>

  </body>
  </html>
  `);
});


app.post("/submit", (req, res) => {
  userName = req.body.name;
  res.redirect("/welcome");
});


app.get("/welcome", (req, res) => {

  res.send(`
  <html>
  <head>
  <style>
  body{
    background:#0f1633;
    font-family:Arial;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    color:white;
  }

  .card{
    background:#1c2247;
    padding:40px;
    border-radius:15px;
    text-align:center;
  }

  a{
    color:#aaa;
    text-decoration:none;
    display:block;
    margin-top:20px;
  }
  </style>
  </head>

  <body>

  <div class="card">
    <h1>Hello, ${userName}!</h1>
    <a href="/">Go Back</a>
  </div>

  </body>
  </html>
  `);

});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});