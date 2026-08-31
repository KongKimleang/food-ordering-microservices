const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

// Task 5.2 APIs (Chains Payment & Notification Services)
app.post('/addorder', async (req, res) => {
    try {
        console.log('Order received. Calling Payment Service...');
        
        // 1. Call Payment Service
        const paymentRes = await axios.post('http://localhost:3003/paymentprocess', {
            amount: req.body.amount || 100
        });

        const paymentStatus = paymentRes.data.status;
        console.log(`Payment response: ${paymentStatus}. Calling Notification Service...`);

        // 2. Call Notification Service based on status
        await axios.post('http://localhost:3004/sendnotification', {
            status: paymentStatus,
            message: `Your order payment status is ${paymentStatus}`
        });

        res.json({ 
            message: 'Order processed successfully!', 
            paymentDetails: paymentRes.data 
        });

    } catch (error) {
        console.error('Workflow error:', error.message);
        res.status(500).json({ error: 'Order failed', details: error.message });
    }
});

app.get('/vieworder', (req, res) => {
    res.json({ message: 'Viewing all orders.' });
});

app.delete('/cancelorder', (req, res) => {
    res.json({ message: 'Order cancelled successfully.' });
});

app.listen(3002, () => {
    console.log('Order Service running on port 3002');
}); 