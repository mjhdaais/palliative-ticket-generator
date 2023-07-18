// "use client"

// import React from 'react';
// import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

// export default function App() {
//   const config = {
//     public_key: 'FLWPUBK_TEST-f794f58c3f3e5822da0fa6647d546da1-X',
//     tx_ref: Date.now(),
//     amount: 1000,
//     currency: 'NGN',
//     payment_options: 'card,mobilemoney,ussd',
//     customer: {
//       email: 'user@gmail.com',
//       phone_number: '070********',
//       name: 'john doe',
//     },
//     customizations: {
//       title: 'My store',
//       description: 'Payment for items in cart',
//       logo:
//         'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
//     },
//   };

//   const fwConfig = {
//     ...config,
//     text: 'Pay with Flutterwave!',
//     callback: (response: any) => {
//       console.log(response);
//       closePaymentModal(); // this will close the modal programmatically
//     },
//     onClose: () => {},
//   };

//   return (
//     <div className="App">
//       <h1>Hello Test user</h1>
//       <FlutterWaveButton {...fwConfig} />
//     </div>
//   );
// }
