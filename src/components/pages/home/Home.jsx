import React from 'react'
import Logo from '/src/assets/G&S-Logo.png'


export default function Home() {
  return (  
    <>
      <div className="carousel carousel-center w-full p-8 bg-tranparent h-52 space-x-8 sm:h-64 lg:72 xl:h-80 2xl:h-96">
      <div className="carousel-item">
        <img src="/src/assets/Carousel/1.jpg" className="rounded-box" />
      </div> 
      <div className="carousel-item">
        <img src="/src/assets/Carousel/1.jpg" className="rounded-box" />
      </div> 
      <div className="carousel-item">
        <img src="/src/assets/Carousel/1.jpg" className="rounded-box" />
      </div> 
      <div className="carousel-item">
        <img src="/src/assets/Carousel/1.jpg" className="rounded-box" />
      </div> 
      <div className="carousel-item">
        <img src="/src/assets/Carousel/1.jpg" className="rounded-box" />
      </div> 
      {/* <div className="carousel-item">
        <img src="/src/assets/Carousel/1.jpg" className="rounded-box" />
      </div>  */}
    </div>
    </>
  )
}
