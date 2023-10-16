import React, { useState } from 'react';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import axios from 'axios';

function Payment() {
  const [sessionTitle, setSessionTitle] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setPaymentType(event.target.value);
  };

  const payHandler = async () => {
    try {
      const response = await axios.post('http://localhost:8080/auth/api/pay', {
        sessionTitle,
        paymentType,
        amount: parseFloat(amount),
      });

      if (response.status === 201) {
        navigate('/Success');
      } else {
        console.error('Payment failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <>
      <Layout />
      <div className="main-wrapper">
        <div className="apply"></div>
        <div className="bill-container">
          <div className="billform">
            <div className="billhead">
              <h1>Payment</h1>
            </div>
            <br />
            <label>
              SESSION TITLE :{' '}
              <input
                type="text"
                placeholder="Session Name"
                className="invoice"
                value={sessionTitle}
                onChange={(e) => setSessionTitle(e.target.value)}
              />
            </label>
            <label>
              PAYMENT TYPE :
              <select value={paymentType} onChange={handleChange}>
                <option value="">Select Payment Type</option>
                <option value="cash">Cash</option>
                <option value="card">Card</option>
              </select>
            </label>
            <br />
            <label>
              AMOUNT :{' '}
              <input
                type="number"
                placeholder="Amount"
                className="invoice"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </label>
            <br />
            <br />
            <Button className="list1" onClick={payHandler}>
              <div className="button1">PAY</div>
              <br />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
