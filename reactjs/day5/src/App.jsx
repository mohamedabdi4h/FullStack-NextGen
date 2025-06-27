import React, { useState } from 'react'

const App = () => {
  const [cartItems, setCartItems] = useState(0)

  const cartHanlder = ()=>{
    setCartItems(cartItems +1)
  }
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
        <div className="value bg-red-500 text-center max-w-full h-8 text-white rounded-full text-2xl">{cartItems}</div>
      </div>
     </div>


     <div className="cards flex">
      <div className="card1 border-2 border-gray-500 w-[300px] mt-16 p-4 m-4 rounded-2xl">
        <img src="https://kompre.pl/userdata/public/gfx/86794/bd4167a8f8b70d2b652ab343f0b9ab4f.png" alt="" className='size-55' />
        <h1 className='text-2xl text-center font-semibold'>Mac Computer m2</h1>
        <p className='text-gray-400'>this is a high-performance computer m2 macingtosh</p>
        <button className='bg-blue-600 w-full h-10 mt-2 rounded-lg text-white font-bold' onClick={cartHanlder}>add to cart</button>
      </div>

      {/* Card2 */}
      <div className="card1 border-2 border-gray-500 w-[300px] mt-16 p-4 m-4 rounded-2xl">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLdDoCc6Ta7bJUtKElSC2z7vt_wAOkhKU9UQ&s" alt="" className='size-55' />
        <h1 className='text-2xl text-center font-semibold'>Apple Fruit</h1>
        <p className='text-gray-400'>this is a high-quality apple fruit</p>
        <button className='bg-blue-600 w-full h-10 mt-2 rounded-lg text-white font-bold' onClick={cartHanlder}>add to cart</button>
      </div>

      {/* Card3 */}
      <div className="card1 border-2 border-gray-500 w-[300px] mt-16 p-4 m-4 rounded-2xl">
        <img src="https://kompre.pl/userdata/public/gfx/86794/bd4167a8f8b70d2b652ab343f0b9ab4f.png" alt="" className='size-55' />
        <h1 className='text-2xl text-center font-semibold'>Mac Computer m2</h1>
        <p className='text-gray-400'>this is a high-performance computer m2 macingtosh</p>
        <button className='bg-blue-600 w-full h-10 mt-2 rounded-lg text-white font-bold' onClick={cartHanlder}>add to cart</button>
      </div>

      {/* Card 4 */}
      <div className="card1 border-2 border-gray-500 w-[300px] mt-16 p-4 m-4 rounded-2xl">
        <img src="https://kompre.pl/userdata/public/gfx/86794/bd4167a8f8b70d2b652ab343f0b9ab4f.png" alt="" className='size-55' />
        <h1 className='text-2xl text-center font-semibold'>Mac Computer m2</h1>
        <p className='text-gray-400'>this is a high-performance computer m2 macingtosh</p>
        <button className='bg-blue-600 w-full h-10 mt-2 rounded-lg text-white font-bold' onClick={cartHanlder}>add to cart</button>
      </div>
     </div>
    </div>
  )
}

export default App