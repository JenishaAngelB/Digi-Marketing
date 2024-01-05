import React from 'react';
import './contact.css'; 

export const Contact = () => {
  const tqStyle = {
    textAlign: 'center',
};
  return (
    <div style={tqStyle} className='contact' >
      <h2>Contact Us</h2>
      <p>
        Feel free to get in touch with us if you have any questions or concerns.
      </p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" />
        <div className='button'>
        <button type="submit">Submit</button></div>
      </form>
    </div>
  );
};
