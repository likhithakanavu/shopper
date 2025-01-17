import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinrest_icon from '../Assets/pintester_icon.png'
import whatsaapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-linnks">
        <li>
            Company
        </li>
        <li>
            Products
        </li>
        <li>
            Offices
        </li>
        <li>
            About
        </li>
        <li>
            Contact
        </li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-conntainer">
            <img src={instagram_icon} />
        </div>
        <div className="footer-icons-conntainer">
            <img src={pinrest_icon} />
        </div>
        <div className="footer-icons-conntainer">
            <img src={whatsaapp_icon} />
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright @ 2024 All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
