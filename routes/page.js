const path = require("path");


module.exports = app => {
    // HTML GET requests
    // Home page
    app.get("/", (request, response) => {
        response.sendFile(path.join(__dirname, "../public/home.html"))
    });

    // Make Reservation Page
    app.get("/reservations", (request, response) => {
        response.sendFile(path.join(__dirname, "../public/reso.html"))
    });

    // See Tables Pager
    app.get("/tables", (request, response) => {
        response.sendFile(path.join(__dirname, "../public/tables.html"))
    });
}