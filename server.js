// *******************
// Dependencies
// *******************
const express = require("express");

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