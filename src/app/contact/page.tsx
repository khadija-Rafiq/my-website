// import React from 'react'

// const Contact = () => {
//   return (
//     <div>
//       <section className='contact-form'>
//         <h2 className='fade-in'>Contact Us</h2>
//         <form>
//           <input type='text' placeholder='Full Name' required/>
//           <input type='email' placeholder='Emil Addrees' required />
//           <input type='text' placeholder='Phone Number'/>
//           <textarea placeholder='your message' rows={5} required></textarea>
//           <button type='submit'>Send Message</button>
//         </form>
//       </section>
//     </div>
//   )
// }

// export default Contact


'use client'
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setResponseMessage(data.message);
        setFormData({ fullName: '', email: '', phone: '', message: '' }); // Reset form
      } else {
        const errorData = await response.json();
        setResponseMessage(errorData.error || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponseMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <section className='contact-form'>
        <h2 className='fade-in'>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='fullName'
            placeholder='Full Name'
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Email Address'
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type='text'
            name='phone'
            placeholder='Phone Number'
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name='message'
            placeholder='Your Message'
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type='submit'>Send Message</button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </section>
    </div>
  );
};

export default Contact;

