import {Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/pages/home/Home'
import About from './components/pages/about/About'
import Product from './components/pages/product/Product'
import Contact from './components/pages/contact/Contact'
import ErrorPage  from './components/pages/err/ErrorPage'
import { useState } from 'react'


function App(){

  let [data,SetData]=useState(JSON.parse(localStorage.getItem('localData')))
    
  async function ProductData(){
      const res=await fetch('http://localhost:8000/Products')
      const data=await res.json()
      localStorage.setItem('localData',JSON.stringify(data))
      SetData(data)
    }

  return(
    <>
    <Header sendData={()=>ProductData()}/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product Data={data} />} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
    <Footer />
    </>
  )
}
export default App










