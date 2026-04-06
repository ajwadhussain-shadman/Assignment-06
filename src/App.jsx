
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import Navbar from './Components/Navbar/Navbar'
import UserData from './Components/UserData/userData'
 import { ToastContainer, toast } from 'react-toastify';
const fetchProductData=async()=>{
  const res=await fetch("/public/data.json");
  return res.json();
 }
 const productDataPromise=fetchProductData();

function App() {
 
  const [cart,setCart]=useState([]);
  return (
    
    <>
    <Navbar cart={cart} setCart={setCart}></Navbar>
    <Banner></Banner>
    <UserData></UserData>
     <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
       <DigitalTools productDataPromise={productDataPromise} cart={cart} setCart={setCart}></DigitalTools>
     </Suspense>

       <ToastContainer />
    </>
  )
}

export default App
