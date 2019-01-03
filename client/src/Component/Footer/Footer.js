import React from 'react'
import './Footer.css'
import Logo from './footerlogo.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__outer__container">
        <div className="footer__container">
          <div className="section section1">
            <h2>section 1</h2>
          </div>
          <div className="section section2">
            <h2>section 2</h2>
          </div>
          <div className="section section3">
            <h2>section 3</h2>
          </div>
        </div>
        <div className='footer__copyright__right'>
          <img className='footer_logo' src={Logo} alt="" />
          <div className='footer__copyright'>© 2018 SUITE_16</div>
        </div>

      </div>

    </div>
  )
}

export default Footer

