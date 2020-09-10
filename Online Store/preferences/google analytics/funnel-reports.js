// Checkout steps for the Checkout Behavior report in Google Analytics from digitaldarts.com.au/analytics
var ShopifyCheckoutstep = Shopify.Checkout.step;
switch (ShopifyCheckoutstep) {
  case "contact_information":
    ga("require", "ec");
    ga("ec:setAction", "checkout", {
      "step": 1,
      "option": "contact_information"
    });
    ga('send', 'event', 'checkout', 'contact information', { nonInteraction: true });
      break; 
  case "shipping_method":
    ga("require", "ec");
    ga("ec:setAction", "checkout", {
      "step": 2,
      "option": "shipping_method"
    });
    ga('send', 'event', 'checkout', 'shipping method', { nonInteraction: true });
      break; 
  case "payment_method":
    ga("require", "ec");
    ga("ec:setAction", "checkout", {
      "step": 3,
      "option": "payment_method"
    });
    ga('send', 'event', 'checkout', 'payment', { nonInteraction: true });
};
