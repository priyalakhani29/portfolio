import React from 'react'
import '../Contact/Contact.css'
import theme from '../../assets/theme.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "bdd2a848-3acf-4e44-a9e1-b07719266188");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
    
   


    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <i class="fa-solid fa-envelope"></i>
                            <p>priyalakhani296@gmail.com</p>
                        </div>

                        <div className="contact-detail">
                            <i class="fa-solid fa-phone"></i>
                            <p>+91 9327049862</p>
                        </div>

                        <div className="contact-detail">
                            <i class="fa-solid fa-location-dot"></i>
                            <p>Sachin, Surat</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
                    <button  type="submit" className="contact-submit">Submit now</button>
                </form>

            </div>
        </div>
    )
}

export default Contact
