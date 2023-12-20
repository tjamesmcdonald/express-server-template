console.log("This is the server");
// DEPENDENCIES
// express
const express = require('express');

// DATA


// APP / PORT
const app = express();
const PORT = process.env.PORT || 3001;

// MIDDLEWARES


// ROUTES


// START SERVER
app.listen(PORT, () => console.log(`Sever live at port ${PORT}`))