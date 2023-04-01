const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51MeMGpSJQ6PAvITZjjn1xf3C73F5DCZDWojiuK0hU6KxawYyTziZFSADDNeeDZhh7Cj2XsTIEQtcnD1IxPHzGSTX00yjcu8Nkz"
);

//API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//- API routes
app.get("/", (request, response) => response.status(200).send("Hello"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Received BOOM!!! for this amount >>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });
    //OK - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});


//- Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://127.0.0.1:5001/e-library-83bb8/us-central1/api