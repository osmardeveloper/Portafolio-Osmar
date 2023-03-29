import React from 'react'
import "./styles/Estudios.css"
import academlo from "/academlo.png"
import psm from "/psm.png"


const Estudios = () => {


  return (

      <section className='container__experiencia'>
        <h2 className='estudios__titulo'>Estudios</h2>

        <div className='experiencia'>
          <div className='experiencia__img'>
              <img src={academlo} alt="logo" />
          </div>
          <article className='estudios__text'>
            <div>
              <h3 className='estudios__empresa'> Academlo</h3>
            <h4 className='estudios__cargo'>Desarollo web con ReactJs</h4>
            
            <h4 className='experiencia__cargo'>Febrero 2023</h4>
            </div>
            <div>
            <i class='bx bx-medal'></i>
              </div> 
           
          </article>
        </div>
        <div className='experiencia'>
          <div className='experiencia__img2'>
              <img src={psm} alt="logo" />
          </div>
          <article className='estudios__text'>
            <div>
            <h3 className='estudios__empresa'> I. U. P. Santiago Mariño</h3>
            <h4 className='estudios__cargo'>Ingeniero de Sistemas</h4>
            <h4 className='experiencia__cargo'>Julio 2013</h4>
            </div>
            <div>
            <i class='bx bx-medal'></i>
              </div> 
          </article>
          </div>
    </section>
  )
}

export default Estudios