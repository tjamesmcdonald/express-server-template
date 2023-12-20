console.log("This is the server");
// DEPENDENCIES
// express
const express = require('express');

// DATA


// APP / PORT
const app = express();
const PORT = process.env.PORT || 3001;

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// ROUTES
// html routes
// get / the homepage
app.get("/", (req, res) => res.sendFile(__dirname, "index.html"))

// api routes
app.get("/api/todos", (req, res) => res.json(
    [
        {
            title: "Buy Milk",
        },
    ]))

// 404 route
app.get('*', (req, res) => res.sendFile(__dirname, "404.html"))

// START SERVER
app.listen(PORT, () => console.log(`Sever live at port ${PORT}`))