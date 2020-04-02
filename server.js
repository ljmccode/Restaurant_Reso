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

// *******************
// Data
// *******************
let reservations = [
    { 
        name: "Laura",
        phone: 3637727772,
        size: 4
    }
];
let waitlist = [];

// *******************
// Page Routes
// *******************

// Home page
app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "home.html"))
});

// Make Reservation Page
app.get("/reservations", (request, response) => {
    response.sendFile(path.join(__dirname, "reso.html"))
});

// See Tables Pager
app.get("/tables", (request, response) => {
    response.sendFile(path.join(__dirname, "tables.html"))
});

// *******************
// API Routes
// *******************

// Display all table reservations
app.get("/api/tables", (request, response) => {
    return response.json(reservations)
});

// Display waitlist
app.get("/api/waitlist", (request, response) => {
    return response.json(waitlist)
});

// Create new reservation
app.post("/api/tables", (request, response) => {
    if (reservations.length < 5) {
        reservations.push(request.body);
        response.json(true);
    } else {
        waitlist.push(request.body);
        response.json(false);
    }
});

// *******************
// Starts server to begin listening
// *******************

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`)
})