import React from 'react'
import "./styles/NavbarG.css"
import { Link } from 'react-router-dom'

const NavbarR = () => {
  return (
    <div className='active-r'>
    <div className='flex'>
          <Link to='/'><button><i className='bx bxs-user-detail a'></i></button></Link>
          <Link to='/habilidades'><button><i className='bx bx-code-curly b'></i></button></Link>
          <Link to='/estudios'><button><i className='bx bx-award c'></i></button></Link>
          <Link to='/portafolio'><button><i className='bx bx-briefcase d'></i></button></Link>
          <Link to='/contacto'><button><i class='bx bx-mail-send f'></i></button></Link>
      
         </div>
      </div>
  )
}

export default NavbarR