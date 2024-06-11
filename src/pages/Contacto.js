import React from 'react'
import insta from '../assets/logo-insta.svg'
import wpp from '../assets/logo-wpp.svg'
import face from '../assets/logo-face.svg'
import map from '../assets/logo-map.svg'

function Contacto() {
  return (
    <>
      <div className='container' style={{ marginBottom: "200px" }}>
        <h1 style={{ textAlign: 'center' }}>Contactanos</h1>
        <hr />
        <h5 style={{ textAlign: 'center' }}>En redes sociales</h5>
        <div className="row justify-content-center contacto">
          <div className='col-4 redes'>
            <a href="https://www.instagram.com/jimena.robert" target='blank' title='Ir a Instagram' className='iconos' >
              <img src={insta} alt='Logo instagram' className='m-4' />
            </a>

            <a href="https://wa.me/59896984977?text=Hola!%20Necesito%20agendarme" target='blank' title='Enviar whatsapp' className='iconos'>
              <img src={wpp} alt='Logo whatsapp' className='m-4' />
            </a>

            <a href="https://www.facebook.com/jimena.robert.9" target='blank' title='Ir a Facebook' className='iconos'>
              <img src={face} alt='Logo facebook' className='m-4' />
            </a>
          </div>
        </div>
        <hr />
        <h5 style={{ textAlign: 'center' }}>Envianos un mensaje</h5>

        <form className='form'>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="nombre" className="form-control" id="inputNombre" aria-describedby="nombreHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">E-mail</label>
            <input type="email" className="form-control" id="inputEmail" />
          </div>
          <div className='mb-3'>
            <textarea className='form-control' id="textarea" style={{ height: '150px' }} placeholder='Escribe tu mensaje' />
          </div>
          <div style={{ textAlign: 'right' }}>
            <button type="submit" className="btn btn-outline-light">Enviar</button>
          </div>
        </form>
        <hr />
        <div className='row justify-content-md-center'>
          <div className='col col-lg-6' style={{ textAlign: 'left', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <a href="https://maps.app.goo.gl/mrhyjhE1avz7aRrr7" target='blank' title='Ver mapa'>
              <img src={map} alt='Logo ubicacion' className='m-4' />
            </a>
            <div>
              <h5>Donde estamos? </h5>
              <p>En Val Pellice y Avenida Artigas<br />Colonia Valdense - Colonia</p>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Contacto;

