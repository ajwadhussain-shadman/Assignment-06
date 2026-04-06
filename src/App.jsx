
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import Navbar from './Components/Navbar/Navbar'
import UserData from './Components/UserData/userData'
import { ToastContainer, toast } from 'react-toastify';
import GettingStarted from './Components/GettingStarted/GettingStarted'
import Pricing from './Components/Pricing/Pricing'
import Explore from './Components/Explore/Explore'
import Footer from './Components/Footer/Footer'
const fetchProductData = async () => {
  const res = await fetch("/data.json");
  return res.json();
}
const productDataPromise = fetchProductData();

function App() {

  const [cart, setCart] = useState([]);
  return (

    <>
      <Navbar cart={cart} setCart={setCart}></Navbar>
      <Banner></Banner>
      <UserData></UserData>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <DigitalTools productDataPromise={productDataPromise} cart={cart} setCart={setCart}></DigitalTools>
      </Suspense>
      <GettingStarted></GettingStarted>
      <Pricing></Pricing>
      <Explore></Explore>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
