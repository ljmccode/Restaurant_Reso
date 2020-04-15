// *******************
// Dependencies
// *******************
const express = require("express");
const path = require("path");

// *******************
// Set Up Express App
// *******************
const app = express();
const PORT = process.env.PORT || 3000;

// *******************
// Set up Express app to handle data parsing
// *******************
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

// *******************
// Router
// *******************
require("./routes/api")(app);
require("./routes/page")(app);

// *******************
// Starts server to begin listening
// *******************

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`)
})