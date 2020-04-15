const path = require("path");


module.exports = app => {
    // HTML GET requests

    // Make Reservation Page
    app.get("/reservations", (request, response) => {
        response.sendFile(path.join(__dirname, "../views/reso.html"))
    });

    // See Tables Page
    app.get("/tables", (request, response) => {
        response.sendFile(path.join(__dirname, "../views/tables.html"))
    });

    // All other routes head to home page
    app.get("*", (request, response) => {
        response.sendFile(path.join(__dirname, "../views/home.html"))
    })
};