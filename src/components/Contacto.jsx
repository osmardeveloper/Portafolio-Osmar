import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/Contacto.css"

const Contacto = () => {
  return (
    <div>

      <h2 className='contacto__titulo'>Contactame</h2>

      <div className='container-contacto'>
     
        <Link to="https://www.facebook.com/osmy19" target={"_blank"}>
        <div className="icon">
        <svg style={{heigth:"80", width:"80"}}>
                <circle cx="40" cy="40" r="35" stroke="white" strokeWidth="4" fill="none" />
            </svg>
            <i className='bx bxl-facebook-circle i'></i>
        </div>
        </Link>

        <Link to="https://api.whatsapp.com/send?phone=573128523161
        " target={"_blank"}>
        <div className="icon">
        <svg style={{heigth:"100", width:"100"}}>
                <circle cx="40" cy="40" r="35" stroke="white" strokeWidth="4" fill="none" />
            </svg>
            <i className='bx bxl-whatsapp i' ></i>
        </div>
        </Link>

        <Link to="https://www.linkedin.com/in/osmar-medina" target={"_blank"}>
        <div className="icon">
        <svg style={{heigth:"80", width:"80"}}>
                <circle cx="40" cy="40" r="35" stroke="white" strokeWidth="4" fill="none" />
            </svg>
            <i className='bx bxl-linkedin-square i'></i>
        </div>
        </Link>
        <Link to="https://github.com/osmardeveloper" target={"_blank"}>
        <div className="icon">
        <svg style={{heigth:"80", width:"80"}}>
                <circle cx="40" cy="40" r="35" stroke="white" strokeWidth="4" fill="none" />
            </svg>
            <i className='bx bxl-github i' ></i>
          
        </div>
        </Link>

      
        <div className="icon z">
            <svg style={{heigth:"80", width:"80"}}>
                <circle cx="40" cy="40" r="35" stroke="white" strokeWidth="4" fill="none" />
            </svg>
            <i className='bx bxl-gmail i' ></i>
        </div>
        
      </div>
      

    </div>
  )
}

export default Contacto