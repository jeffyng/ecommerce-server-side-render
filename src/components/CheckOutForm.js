import React from 'react';

const CheckOutForm = () => {
  return (
    <form className="checkout-form">
      <div className="checkout-form__info">
        <div className="checkout-form__container">
          <h3 className="checkout-form__header">Billing Address</h3>
          <label className="checkout-form__label">First Name</label>
          <input className="checkout-form__input" type="text" id="fname" placeholder="John" />
          <label className="checkout-form__label" >Last Name</label>
          <input className="checkout-form__input" type="text" id="lname" placeholder="Smith" />
          <label className="checkout-form__label" >Email</label>
          <input className="checkout-form__input" type="email" id="email" placeholder="JohnSmith@gmail.com" />
          <label className="checkout-form__label">Address</label>
          <input className="checkout-form__input" type="text" id="email" placeholder="123 Everjane street" />
          <label className="checkout-form__label">City</label>
          <input className="checkout-form__input" type="text" id="city" placeholder="San Francisco" />
          <label className="checkout-form__label">State</label>
          <input className="checkout-form__input" type="text" id="state" placeholder="California" />
          <label className="checkout-form__label">Zip Code</label>
          <input className="checkout-form__input" type="text" id="zip" placeholder="94110" />
        </div>
        <div className="checkout-form__container">
          <h3 className="checkout-form__header">Payment</h3>
          <label className="checkout-form__label">Name on Card</label>
          <input className="checkout-form__input" type="text"  placeholder="John Smith" />
          <label className="checkout-form__label">Credit Card Number</label>
          <input className="checkout-form__input" type="text"  placeholder="4888 1234 5678 9123" />
          <label className="checkout-form__label">Exp Month</label>
          <input className="checkout-form__input" type="text"  placeholder="September" />
          <label className="checkout-form__label">Exp Year</label>
          <input className="checkout-form__input" type="text"  placeholder="2018" />
          <label className="checkout-form__label">CVV</label>
          <input className="checkout-form__input" type="text"  placeholder="352" />
        </div>
      </div>
      <button type="submit" className="checkout-form__button">Confirm Payment</button>
    </form>
  )
}

export default CheckOutForm;
