import React from 'react'

const Header = () => {
  return (
    <div>
         <div className="header shadow-md shadow-gray-200 flex justify-between p-4">
      <div className="logo">Suuban Ecommerce</div>
      <div className="flex gap-5">
        <div className="Home">Home</div>
        <div className="About">About</div>
        <div className="Products">Products</div>
        <div className="Contact">Contact</div>
      </div>
      <div className="cart flex mr-12">
        <div className="icon">
          <img src="https://static.vecteezy.com/system/resources/previews/023/521/390/non_2x/empty-shopping-cart-3d-illustration-icon-png.png" className='size-12' alt="" />
        </div>
        <div className="value">0</div>
      </div>
     </div>
    </div>
  )
}

export default Header