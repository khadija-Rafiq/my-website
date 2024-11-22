import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className='contact-form'>
        <h2 className='fade-in'>Contact Us</h2>
        <form>
          <input type='text' placeholder='Full Name' required/>
          <input type='email' placeholder='Emil Addrees' required />
          <input type='text' placeholder='Phone Number'/>
          <textarea placeholder='your message' rows={5} required></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </section>
    </div>
  )
}

export default Contact
