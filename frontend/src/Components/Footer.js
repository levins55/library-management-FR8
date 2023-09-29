import React from 'react'
import './Footer.css'

// import TwitterIcon from '@material-ui/icons/Twitter';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import GitHupIcon from '@material-ui/icons/GitHup';
// import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className='footer'>
            <div>
                <div className='footer-data'>
                    <div className="contact-details">
                        <h1>Contact Us</h1>
                        <p>Librarian</p>
                        <p>Phoenix Book World</p>
                        <p>Tiruppur - 643 661</p>
                        <p>TamilNadu</p>
                        <p>India</p>
                        <p><b>Email:</b>phoenixbook@gmail.com</p>
                    </div>
                    
                    <div className='librarian-details'>
                        <h1>Librarian</h1>
                        <p>Levin</p>
                        <p>Msc.Computer Science</p>
                        <p>Contact: +91 6383065933</p>
                    </div>
                </div>
                {/* <div className="contact-social" >
                    <a href='#home' className='social-icon'><TwitterIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='#home' className='social-icon'><LinkedInIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='#home' className='social-icon'><GitHupIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='#home' className='social-icon'><InstagramIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                </div> */}
            </div>
            <div className='copyright-details'>
                <p className='footer-copyright'>&#169; 2023 copyright all right reserved<br /><span>Designed with ❤️ by LEVIN S</span></p>
            </div>
        </div>
    )
}

export default Footer