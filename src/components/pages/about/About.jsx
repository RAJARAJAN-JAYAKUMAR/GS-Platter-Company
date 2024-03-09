import React from 'react'


export default function About() {
  return (
    <>
    <div className='w-full  text-justify p-4'>
      <h1 className='text-center'>Heading</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sapiente aut qui voluptatum veniam delectus deserunt, ipsa amet illum odio quisquam voluptatibus aperiam maiores laboriosam sunt fuga consequatur totam quaerat!
    </div>

    {/* second container */}
    <div className='md:m-2 text-justify md:flex md:gap-2 md:justify-evenly'>
      <div className=' mt-4 p-2 md:mt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam quasi tenetur nostrum voluptatibus rerum fugiat numquam hic recusandae. Esse dicta praesentium asperiores ea? 
      </div>
      <div className=' mt-4 p-2 md:mt-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod iusto voluptate, quaerat sed blanditiis voluptas officia aut assumenda neque ex impedit. Unde odio reprehenderit eaque deserunt ut earum dolorum porro.

      </div>
    </div>
    </>
    
  )
}
