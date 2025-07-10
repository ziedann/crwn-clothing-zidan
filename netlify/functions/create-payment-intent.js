require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const handler = async (event) => {
  try {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method not allowed' }),
      };
    }

    const { amount } = JSON.parse(event.body);

    if (!amount || amount < 1) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid amount' }),
      };
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.error('Payment Intent Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Error creating payment intent',
        details: error.message 
      }),
    };
  }
};

module.exports = { handler }; 