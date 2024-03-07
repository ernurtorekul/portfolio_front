// Require the Stripe library with a test secret key
const stripe = require('stripe')(
	'sk_test_51NQRjwHGhAGbpPiwYjPXXmDL6R9d1yVHznF5i3R6okTkNgXi3vN6tAWjMpw708ewJqbIZaMj1I70gvNCVRCcH3v4002HimVERh'
);

const createStripeCharge = async () => {
	try {
		const charge = await stripe.charges.create({
			amount: 2000, // Amount in cents
			currency: 'usd',
			source: 'tok_amex', // Obtained with Stripe.js
			description: 'My First Test Charge (created for API docs)',
		});

		console.log(charge);
	} catch (error) {
		console.error(error);
	}

	return (
		<form action='/create-charge' method='post' id='payment-form'>
			<div className='form-row'>
				<div id='card-element'></div>
				<div id='card-errors' role='alert'></div>
			</div>

			<button type='submit'>Submit Payment</button>
		</form>
	);
};

createStripeCharge();
