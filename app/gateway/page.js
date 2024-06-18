// const paymentForm = document.getElementById('paymentForm');
// paymentForm.addEventListener("submit", payWithPaystack, false);

// function payWithPaystack(e) {
//   e.preventDefault();

//   let handler = PaystackPop.setup({
//     key: 'pk_test_d8028f69653fbeadc70721cef76f8ed6d9d6053a', // Replace with your public key
//     currency: "NGN"
//     email: document.getElementById("email-address").value,
//     amount: document.getElementById("amount").value * 100,
//     ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
//     // label: "Optional string that replaces customer email"
//     onClose: function(){
//       alert('Window closed.');
//     },
//     callback: function(response){
//       let message = 'Payment complete! Reference: ' + response.reference;
//       alert(message);
//     }
//   });

//   handler.openIframe();
// }


//**************for nextjs production */
// import React, { useState } from 'react';
// import Script from 'next/script';

// const PaymentForm = () => {
//   const [email, setEmail] = useState('');
//   const [amount, setAmount] = useState('');

//   const payWithPaystack = (e) => {
//     e.preventDefault();

//     const handler = PaystackPop.setup({
//       key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY, // Use your public key from environment variables which is pk_test_d8028f69653fbeadc70721cef76f8ed6d9d6053a
//       currency: "NGN"
//       email: email,
//       amount: amount * 100, // Amount in kobo
//       ref: '' + Math.floor((Math.random() * 1000000000) + 1), // Generate a pseudo-unique reference
//       onClose: function () {
//         alert('Window closed.');
//       },
//       callback: function (response) {
//         const message = 'Payment complete! Reference: ' + response.reference;
//         alert(message);
//       }
//     });

//     handler.openIframe();
//   };

//   return (
//     <>
//       <Script src="https://js.paystack.co/v1/inline.js" />
//       <form id="paymentForm" onSubmit={payWithPaystack}>
//         <input type="email" id="email-address" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
//         <button type="submit">Pay with Paystack</button>
//       </form>
//     </>
//   );
// };

// export default PaymentForm;

// In this code:

// We import useState from React to manage the email and amount state.
// We use the Script component from next/script to load the Paystack script.
// We replace the direct DOM manipulation with state setters (setEmail and setAmount).
// We use environment variables to securely store the Paystack public key.
// The payWithPaystack function is called when the form is submitted.
// Make sure to add your Paystack public key to your .env.local file as NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY and never expose your secret key on the client side. 
// This code should be placed in a component file, and you can import and use this component wherever you need to process payments in your Next.js application. 
// Remember to test thoroughly to ensure everything is working as expected.