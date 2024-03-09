import {FaWhatsapp,FaMobileAlt} from 'react-icons/fa'
export default function About() {
  return (
    // outside container  
    <div className="font-nunito  text-2xl flex flex-col w-full lg:flex-row">

      {/* left container */}

      <div className=" grid flex-grow  place-items-center bg-white text-black max-sm:">
        
        <div className=" rounded-xl shadow-lg text-center p-4 w-96 max-sm:w-full max-sm:mb-6 max-sm:text-sm">
          {/* officeaddress  heading*/}
          <div className='pb-3'>
            <h2 className="font-bold text-logoGreen"> OFFICE ADDRESS</h2>
          </div>

          <div>
            <address className="not-italic text-contactGray text-base ">
                <p>176/B, 1st Main, 1st Cross,</p>
                <p>Sachidananda Layout, Double Road,</p>
                <p> Kumbakonam - 612001</p>
                <p>Tamil Nadu</p><br/>

                <div className="flex items-center justify-center">
                <FaWhatsapp className='mr-2' /><p>: 91 - 2334529958</p>
                </div>

                <div className="flex items-center justify-center">
                <FaMobileAlt className='mr-2' /><p>: 91 - 2334529958</p>
                </div>

                <div className="flex items-center justify-center">
                <FaMobileAlt className='mr-2' /> <p>: 91 - 2334529958</p>
                </div>

              </address>
          </div>  
        
        </div>
      </div> 

      {/* right container */}

      <div className="grid flex-grow bg-white max-sm:w-full">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe-futd1RkIV5bIiofvbMyQ105wA4ACUqy9TGMvt0fAaji20w/viewform?embedded=true" width="100%" height="1100" frameborder="0" marginheight="0" marginwidth="0" >Loading…</iframe>
      </div>
    </div>
  )
}
