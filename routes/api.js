// Link data
require("../data/reservations");
require("../data/waitlist");


module.exports = app => {
    // API GET requests
    // Display all table reservations
    app.get("/api/tables", (request, response) => {
        return response.json(reservations)
    });

    // Display waitlist
    app.get("/api/waitlist", (request, response) => {
        return response.json(waitlist)
    });

    // API POST requests
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
};