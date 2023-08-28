import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
        <h1>CONTACT US</h1>
        <form>
            <input type="text" placeholder='Full Name' required />
            <input type="email" placeholder='Your E-Mail ID' required />
            <textarea placeholder="Write Your Message..." cols="10" rows="30"></textarea>
            <input type='submit' value='Send' className='contact-btn'/>
        </form>
    </div>
  )
}

export default Contact