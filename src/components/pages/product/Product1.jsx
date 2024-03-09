import React, { useState } from 'react'
import { FcFilledFilter } from "react-icons/fc";
import Filter from '/src/assets/filter-icon.png'

export default function Product({Data}) {

  const [isChecked, setChecked] = useState({ filterPlates: false, filterGlass: false, filterSpoon: false });
  const [Filtered,setFiltered]=useState(Data)
  
  // function checkFilter(obj){

  //   obj.filterPlates && setFiltered(Data.filter(val=>val.category==="plates"))
    
  //   obj.filterGlass && setFiltered(Data.filter(val=>val.category==="glass"))
    
  //   obj.filterSpoon && setFiltered(Data.filter(val=>val.category==="spoon"))
    
  // }
  
  function checkFilter(obj) {
    console.log(obj)
    setFiltered(Data.filter(val => 
      (!obj.filterPlates || val.category === "plates") &&
      (!obj.filterGlass || val.category === "glass") &&
      (!obj.filterSpoon || val.category === "spoon")
    ));
  }
  return (
    <>
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content grid  xl:grid-cols-3 lg:grid-cols-2  md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-2 p-4 items-center ">
    {/* Page content here */}
  

    {Filtered && Filtered.map((Element,index)=>
    <div className="card xl:w-72 lg:w-72 md:w-56 sm:w-56 w-56 left-10 bg-base-100 shadow-xl" key={index}>
  <figure><img src={Element.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{Element.name}</h2>
    <p>{Element.discription}</p>

  </div>
</div>
)}

{/* <img htmlFor="my-drawer-2" className="sticky top-0 drawer-button lg:hidden w-20" src={Filter} alt='Filter'></img> */}
  <label htmlFor="my-drawer-2" className="absolute drawer-button lg:hidden"><FcFilledFilter /></label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">

      {/* Sidebar content here */}

      <li><a className='btn m-1 content-center'>Sidebar Item 1</a></li>
      <li className="dropdown" >
        <a tabIndex={0} role="button" className="btn m-1 content-center">Filter</a>
        
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">      
            <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">Plates</span>

              <input type="checkbox" 

              checked={isChecked.filterPlates} 
              onChange={()=>{setChecked((obj)=>(
                { ...obj, filterPlates: !obj.filterPlates }))
                checkFilter({ ...isChecked, filterPlates: !isChecked.filterPlates }) }}
                                                className="checkbox checkbox-success" />
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">Glass</span>
              <input type="checkbox" 

              checked={isChecked.filterGlass} 
              onChange={()=>{setChecked((obj)=>(
                { ...obj, filterGlass: !obj.filterGlass }))
                checkFilter({ ...isChecked, filterGlass: !isChecked.filterGlass }) }}
                                                className="checkbox checkbox-success" />
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">Spoon</span>
              <input type="checkbox"
              
              checked={isChecked.filterSpoon} 
              onChange={()=>{setChecked((obj)=>(
                { ...obj, filterSpoon: !obj.filterSpoon }))
                checkFilter({ ...isChecked, filterSpoon: !isChecked.filterSpoon }) }}
                                                className="checkbox checkbox-success" />
            </label>
          </div>
       {/* jsx need to clos by paranthesis */}
         </ul>
      </li>
    </ul>
  </div>
</div>
    </>
  )
}



