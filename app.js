// Inside app.js
const express = require('express');
const Razorpay = require('razorpay');

// This razorpayInstance will be used to
// access any resource from razorpay
const razorpayInstance = new Razorpay({

	// Replace with your key_id
	key_id: "rzp_test_fiIwmRET6CApc2",

	// Replace with your key_secret
	key_secret: "Q6xuDoQPiKk2k6r1HyHazsCr",
});

const app = express();
const PORT = process.env.PORT || '5000';

// Here we will create two routes one
// /createOrder and other /verifyOrder
// Replace these comments with the code
// provided later in step 2 & 8 for routes


//Inside app.js
app.post('/createOrder', (req, res)=>{

	// STEP 1:
	const {amount,currency,receipt, notes} = req.body;	
		
	// STEP 2:	
	razorpayInstance.orders.create({amount, currency, receipt, notes},
		(err, order)=>{
		
		//STEP 3 & 4:
		if(!err)
			res.json(order)
		else
			res.send(err);
		}
	)
});


app.listen(PORT, ()=>{
    console.log("Server is Listening on Port ", PORT);
});

