import React from 'react'
import react from "/react.png"
import redux from "/redux.png"
import html from "/html5.png"
import css from "/css.png"
import js from "/js.png"
import git from "/git.png"
import github from "/github2.png"
import netlify from "/netlify2.png"
import express from "/express2.png"
import node from "/node5.png"
import postgresql from "/postgresql.png"
import sequelize from "/sequelize.png"
import "./styles/Habilidades.css"


const Habilidades = () => {


  return (
    <>
      <h2 className='habilidades__titulo'>Mis Habilidades</h2>
    <section className='container__habilidades'>

      <div className='experiencia'>
        <div className='experiencia__img'>
          <img src={react} alt="logo" />
        </div>
      </div>
      <div className='experiencia'>
        <div className='experiencia__img'>
          <img src={redux} alt="logo" />
        </div>
      </div>
      <div className='experiencia'>
        <div className='experiencia__img'>
          <img src={html} alt="logo" />
        </div>
      </div>
      <div className='experiencia'>
        <div className='experiencia__img'>
          <img src={css} alt="logo" />
        </div>
      </div>
      <div className='experiencia'>
        <div className='experiencia__img'>
          <img src={js} alt="logo" />
        </div>
      </div>
      <div className='experiencia'>
        <div className='experiencia__img'>
          <img src={git} alt="logo" />
        </div>
      </div>
      <div className='experiencia'>
        <div className='experiencia__img3'>
          <img src={github} alt="logo" />
        </div>
      </div>
      <div className='experiencia'>
        <div className='experiencia__img'>
          <img src={netlify} alt="logo" />
        </div>
      </div>
      <div className='experiencia'>
        <div className='experiencia__img'>
          <img src={express} alt="logo" />
        </div>
      </div>
      <div className='experiencia'>
        <div className='experiencia__img'>
          <img src={node} alt="logo" />
        </div>
      </div>
      <div className='experiencia'>
        <div className='experiencia__img'>
          <img src={postgresql} alt="logo" />
        </div>
      </div>
      <div className='experiencia'>
        <div className='experiencia__img'>
          <img src={sequelize} alt="logo" />
        </div>
      </div>
    </section>
    </>
  )
}

export default Habilidades