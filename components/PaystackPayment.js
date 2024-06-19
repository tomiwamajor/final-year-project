import React from "react";
import {PaystackButton} from "react-paystack"

const PaystackPayment=()=>{
    const publicKey = 'pk_test_d8028f69653fbeadc70721cef76f8ed6d9d6053a'
    const amount = 10000;
    const email = 'customer@gmail.com';

    const componentProps = {
        email,
        amount,
        publicKey,
        text: 'Pay Now',
        onSuccess: (reference) => alert(`Payment Successful! Reference: ${reference.reference}`),
        onClose: () => alert('Payment closed'),
    };

    return (
        <div>
            <h1>Paystack Payment</h1>
            <PaystackButton {...componentProps}/>
        </div>
    );
};

export default PaystackPayment;