const express=require('express')
const router=express.Router()
const Stripe=require('stripe')
require('dotenv').config()


const stripe=Stripe(process.env.STRIPE_KEY)

router.post('/create-checkout-session', async (req, res) => {
  const {brand,name,price}=req.body.cartItems
  const line_items=[
     {
        price_data:{
            currency:"inr",
            product_data:{
                 name:name
            },
            unit_amount:price*100
        },
        quantity:1,
     }
  ]
  const session = await stripe.checkout.sessions.create({
    
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0,
            currency: "inr",
          },
          display_name: "Free shipping",
          // Delivers between 5-7 business days
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 5,
            },
            maximum: {
              unit: "business_day",
              value: 7,
            },
          },
        },
      },
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 1500,
            currency: "inr",
          },
          display_name: "Next day air",
          // Delivers in exactly 1 business day
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 1,
            },
            maximum: {
              unit: "business_day",
              value: 1,
            },
          },
        },
      },
    ],
    line_items,
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`
  });

  res.send({
       url:session.url
  });
});

module.exports=router