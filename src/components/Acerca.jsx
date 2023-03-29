import React from 'react'
import "./styles/Acerca.css"


const Acerca = () => {


  
  return (
    <div className='principal'>
    
      <div className="container-acerca">
        <div>
           <div className="imgMobile"></div>
           <div className="imgPc"></div>
        </div>
        <div className='container-descripcion'>
           <h3 className='name'><span>Hola, soy</span> <br></br>Osmar Medina</h3>    
           <h2 className="titulo">Desarrollador web <br></br> Front End</h2>
           <p className='descripcion'> Me encanta la tecnología. Estoy listo para enfrentar los desafíos del mercado laboral, empleando mis conocimientos adquiridos para el desarrollo web.</p>
        <a href="/hdv-osmar.pdf" download="cv-osma" className='descripcion up'><i className='bx bx-cloud-download'></i> DescargarCV </a>

        </div>  
       
      </div>
    </div>
  )
}

export default Acerca