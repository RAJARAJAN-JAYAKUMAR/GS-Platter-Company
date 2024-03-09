import logo from '/src/assets/G&S-Logo.png'
import { Link } from 'react-router-dom'
export default function Logo() {
    return (
      <>
      <Link to='/'><img src={logo} alt='Logo' className='hover:cursor-pointer w-36 h-16 max-sm:w-16 max-sm:h-8 bg-white' /></Link>
      </>
    )
  }

  