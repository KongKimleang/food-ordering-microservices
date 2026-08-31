const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3003;

app.post("/paymentprocess", (req, res) => {

    console.log("Payment Process API called");

    const amount = req.body.amount;

    if (amount <= 100) {

        console.log("Payment successful");

        res.json({
            status: "Success",
            message: "Payment processed successfully"
        });

    } else {

        console.log("Payment failed");

        res.json({
            status: "Failure",
            message: "Payment processing failed"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Payment Service running on port ${PORT}`);
});