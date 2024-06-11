import React from 'react';
import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';
import img5 from '../img/5.jpg';
import img6 from '../img/6.jpg';
import img7 from '../img/7.jpg';
import img8 from '../img/8.jpg';
import img9 from '../img/9.jpg';

function Disenios() {
  return (
    <div className='container'>
    <div className="row justify-content-center mb-5" >
      <h1>Nuestros dise&ntilde;os </h1>
      <h5>Ideas para el tuyo!</h5>
    <div className="galeria">
        <img src={img1} alt='Imagen unas'/>
        <img src={img2} alt='Imagen unas'/>
        <img src={img3} alt='Imagen unas'/>
        <img src={img4} alt='Imagen unas'/>
        <img src={img5} alt='Imagen unas'/>
        <img src={img6} alt='Imagen unas'/>
        <img src={img7} alt='Imagen unas'/>
        <img src={img8} alt='Imagen unas'/>
        <img src={img9} alt='Imagen unas'/>
    </div>
</div>
</div>
  )
}

export default Disenios