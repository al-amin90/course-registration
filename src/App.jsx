import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Courses from './component/Courses/Courses'
import Cart from './component/Cart/Cart'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const remainCredit = 15;

function App() {
  const [carts, setCarts] = useState([])

  // add to cart 
  const handleAddToCart = (course, id) => {
    
    const totalCredit = carts.reduce((p, c) => p + c.credit, 0)
    if (totalCredit+course.credit > remainCredit) {
      return toast.error(`Can't Add More than, ${remainCredit} Credit!!!`)
    }
    
    
    const isAddCart = carts.find(c => c.id === id);
    if (!isAddCart) {
      setCarts([...carts, course]);
      toast.success("Course Added!");
    }
    else {
      toast.warn("Course Already Exists!!")
    }
  }

  // remove from cart 
  const handleRemoveCart = id => {
   
    const remainCart = carts.filter(cart => cart.id !== id);
    setCarts(remainCart);
  }
  

  return (
    <div>
      <Header></Header>
      <div className='grid grid-cols-1 md:grid-cols-12 px-4 md:px-14 gap-5 pb-16'>
        <div className='md:col-span-9'>
          <Courses
            handleAddToCart={handleAddToCart}
          ></Courses>
        </div>
        <div className='md:col-span-3'>
          <Cart
            carts={carts}
            handleRemoveCart = {handleRemoveCart}
          ></Cart>
        </div>
      </div>
          <ToastContainer />
    </div>
  )
}

export default App
