import React from 'react'
import "./styles/Portafolio.css"

const Portafolio = () => {


  return (
    <div>
      <h2 className='portafolio__titulo'>Portafolio</h2>
      <div className='container__portafolio'>
        <div className='card__portafolio'> 
            <div className='img__portafolio iii'>

            </div>
            <div  className='contenido__portafolio'>
            <h3 className="color__text_title">Ecommerce</h3>
              <p className="color__text">Filtra productos por nombre y categoría, agrega y elimina del carrito y realiza compra.</p>
              <a className='boton__portafolio' href='https://ecommerce-osmar.netlify.app/npm ' target="_blank">Ver proyecto</a>
            </div>
        </div>
        <div className='card__portafolio'> 
            <div className='img__portafolio ii'>

            </div>
            <div  className='contenido__portafolio'>
            <h3 className="color__text_title">Crud’s Users</h3>
              <p className="color__text">Una aplicación que permite crear, consultar, modificar  y eliminar usuarios de una Api.</p>
              <a className='boton__portafolio' href='https://entregable4-react-osmar.netlify.app/' target="_blank">Ver proyecto</a>
            </div>
        </div>
        <div className='card__portafolio'> 
            <div className='img__portafolio'>

            </div>
            <div  className='contenido__portafolio'>
              <h3 className="color__text_title">PokeDex</h3>
              <p className="color__text">Permite logearse para buscar pokemones por nombre y muestra sus habilidades.</p>
              <a className='boton__portafolio' href='https://entregable6-react-osmar.netlify.app/pokedex' target="_blank">Ver proyecto</a>

            </div>
        </div>
      </div>

    </div>
  )
}

export default Portafolio