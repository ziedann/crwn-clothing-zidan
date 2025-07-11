import { loadStripe } from "@stripe/stripe-js";

// Configure Stripe to handle blocked analytics gracefully
const stripeOptions = {
  stripeAccount: undefined,
  betas: undefined,
  locale: 'auto',
  apiVersion: undefined,
  // Disable Stripe's fraud detection telemetry
  advancedFraudSignals: false
};

export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
  stripeOptions
);
