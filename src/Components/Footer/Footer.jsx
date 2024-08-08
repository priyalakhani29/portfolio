import React from 'react'
import '../Footer/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-t-left">
                    <h1>PRIYA</h1>
                    <p>I am a frontend developer from IIHT institute. I can use my thorough knowledge of designing website. </p>

                </div>
                <div className="footer-t-right">
                    <div className="footer-mail">
                        <i class="fa-solid fa-envelope"></i>
                        <input type='email' placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">
                        Subscribe
                    </div>
                </div>

            </div>
            <hr/>
            <div className="footer-bottom">
                <p className="footer-b-left">© 2024 Priya's portfolio. All rights reserved.</p>
                <div className="footer-b-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
