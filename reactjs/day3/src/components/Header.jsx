import React from 'react'
import '../design/headerstyle.css';
import logo from '../../public/logo.webp'
const Header = () => {
  return (
    <div>
        <div className="header">
            <img src={logo} alt="" />
            <h1>React som dev</h1>
        </div>
    </div>
  )
}

export default Header