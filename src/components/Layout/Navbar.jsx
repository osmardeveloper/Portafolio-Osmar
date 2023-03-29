import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <section className='navbar'>
      <div className='container'>

        <div className='relative'>
          <Link to='/'><button><i className='bx bxs-user-detail a'></i></button></Link>
          <Link to='/habilidades'><button><i className='bx bx-code-curly b'></i></button></Link>
          <Link to='/estudios'><button><i className='bx bx-award c'></i></button></Link>
          <Link to='/portafolio'><button><i className='bx bx-briefcase d'></i></button></Link>
          <Link to='/contacto'><button><i class='bx bx-mail-send f'></i></button></Link>
      </div>



        </div>
    </section>
  )
}

export default Navbar