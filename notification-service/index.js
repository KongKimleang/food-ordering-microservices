const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3004;

app.post("/sendnotification", (req, res) => {
    console.log("Send Notification API called");

    res.json({
        status: "Success",
        message: "Notification sent successfully"
    });
});

app.listen(PORT, () => {
    console.log(`Notification Service running on port ${PORT}`);
});