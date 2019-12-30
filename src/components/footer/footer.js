import React from 'react';
import './footer.css'



const Footer = () => (
    <div>
        <div className="footer pt-3 pb-3">
            <div className="container text-center follow">
                <p>Follow us: <i className="fab fa-facebook-square"></i><i className="fab fa-instagram"></i><i className="fab fa-twitter"></i><i className="fab fa-youtube"></i><i className="fab fa-linkedin"></i></p>
                <hr/>
                <div className='row d-flex justify-content-center links'>
                    <div className='col-md-1'>
                        <small>Contact us</small>
                    </div>
                    <div className='col-md-1'>
                        <small>Privacy</small>
                    </div>
                    <div className='col-md-1'>
                        <small>Terms</small>
                    </div>
                    <div className='col-md-1'>
                        <small>Security</small>
                    </div>
                    <div className='col-md-1'>
                        <small>Accessibility</small>
                    </div>
                    <div className='col-md-1'>
                        <small>Safe act</small>
                    </div>
                    <div className='col-md-1'>
                        <small>Lending</small>
                    </div>
                    <div className='col-md-1'>
                        <small>About</small>
                    </div>
                    <div className='col-md-1'>
                        <small>J.P Morgan</small>
                    </div>
                    <div className='col-md-1'>
                        <small>Chase</small>
                    </div>
                    <div className='col-md-1'>
                        <small>Career</small>
                    </div>
                    <div className='col-md-1'>
                        <small>Espanol</small>
                    </div>
                    <div className='col-md-1'>
                        <small>Canada</small>
                    </div>
                    <div className='col-md-1'>
                        <small>Site map</small>
                    </div>
                    <div className='col-md-1'>
                        <small>Member</small>
                    </div>
                    <div className='col-md-1'>
                        <small>Housing</small>
                    </div>
                </div>
                <div className='row d-flex justify-content-center links'>
                    <div><small>&copy; 2019 JPMorgan Chase & Co.</small></div>
                </div>
            </div>
        </div>
    </div>
)

export default  Footer;