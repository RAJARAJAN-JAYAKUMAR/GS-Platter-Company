import React from 'react'
import { IoFilter } from "react-icons/io5";


export default function Product() {

  const productList = [
    {"name":"Areca1","description":"Areca Leafe Plate From KKN","img":"/src/assets/Temp Pics/kknexports-images1.png","category":"glass"},
    {"name":"Areca2","description":"Areca Leafe Plate From KKN","img":"/src/assets/Temp Pics/kknexports-images4.png","category":"glass"},
    {"name":"Areca3","description":"Areca Leafe Plate From KKN","img":"/src/assets/Temp Pics/kknexports-images5.png","category":"plates"},
    {"name":"Areca4","description":"Areca Leafe Plate From KKN","img":"/src/assets/Temp Pics/kknexports-images6.png","category":"plates"},
    {"name":"Areca5","description":"Areca Leafe Plate From KKN","img":"/src/assets/Temp Pics/kknexports-images7.png","category":"spoon"},
    {"name":"Areca6","description":"Areca Leafe Plate From KKN","img":"/src/assets/Temp Pics/kknexports-images11.png","category":"plates"},
    {"name":"Areca7","description":"Areca Leafe Plate From KKN","img":"/src/assets/Temp Pics/kknexports-images12.png","category":"spoon"},
    {"name":"Areca8","description":"Areca Leafe Plate From KKN","img":"/src/assets/Temp Pics/kknexports-images13.png","category":"spoon"}
    ]
    const uniqueCategories = productList.reduce((categories, product) => {
        if (!categories.includes(product.category)) {
          categories.push(product.category);
        }
        return categories;
      }, []);


  return (
    <>
    {/* filter button */}
    <div className="border-2 drawer drawer-end z-20 px-2 py-1">
    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex justify-end">
            {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button p-2 right-2 text-lg hover:bg-logoGreen hover:text-white hover:rounded-lg"><IoFilter /></label>
    </div> 
    <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        {uniqueCategories.map((arr,index)=>(
            <li className='p-2 ' key={index}>{arr}</li>
        ))}
        </ul>
    </div>
    </div>

    {/* body container */}
    <div className='border-2 p-1 grid grid-cols-2 gap-2 z-10'>
    {productList.map((arr,index)=>(
        <div className="card w-full bg-base-100 shadow-xl" key={index}>
        <figure><img src={arr.img} alt="Shoes" /></figure>
        <div className="card-body p-3 text-center">
          <header className='font-semibold'>{arr.name}</header>
          <p>{arr.description}</p>
        </div>
      </div>
    ))}
    </div>
    </>
  )
}

