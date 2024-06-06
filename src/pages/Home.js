import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

  return (     

      <div className='container'>
        <h1>Beautiful Nails</h1>
        <h5>by Jimena Robert</h5>
        <div className='contanier home'>
          <p>Cuidar nuestras manos dice mucho de nosotras...
            En <i><b>Beautiful Nails</b></i> ofrecemos variedad de servicios para embellecer y
            cuidar de tus uñas de acuerdo a tus gustos y necesidades.
          </p>
          <div>
            <Link to='/Contacto'>
              <div>
                <button className="btn btn-outline-light">Contactanos</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
     
      )
}

      export default Home