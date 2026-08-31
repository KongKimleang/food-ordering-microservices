const express = require("express");
const app = express();

app.use(express.json());

const PORT = 3001;

// View all restaurants
app.get("/viewallrestaurant", (req, res) => {
    res.json({
        message: "View All Restaurant API called successfully"
    });
});

// Search restaurant
app.get("/searchrestaurant", (req, res) => {
    res.json({
        message: "Search Restaurant API called successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Restaurant Service running on port ${PORT}`);
});