import React from 'react'
import '../design/footerstyle.css';
const Footer = () => {
    const currentyear  = new Date().getFullYear()
  return (
    <div>
       <div className="footer">
         &copy; {currentyear} React som dev. All rights reserved. 
       </div>
    </div>
  )
}

export default Footer