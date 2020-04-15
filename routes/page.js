const path = require("path");


module.exports = app => {
    // HTML GET requests

    // Make Reservation Page
    app.get("/reservations", (request, response) => {
        response.sendFile(path.join(__dirname, "../public/reso.html"))
    });

    // See Tables Page
    app.get("/tables", (request, response) => {
        response.sendFile(path.join(__dirname, "../public/tables.html"))
    });

    // All other routes head to home page
    app.get("*", (request, response) => {
        response.sendFile(path.join(__dirname, "../public/home.html"))
    })
};