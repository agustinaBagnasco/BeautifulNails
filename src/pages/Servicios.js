import React from 'react';
import semi from '../img/semi.jpg'
import gel from '../img/gel.jpg'
import acrilica from '../img/acrilica.jpg'

function Servicios() {
  return (
    <div className='container'>
      <Unservicio
        pic={semi}
        alt={'Imagen esmaltado semipermanente'}
        title='Semipermanente'
        description='La manicura semipermanente es un esmaltado de secado inmediato 
        y de larga duración que mantiene un resultado reluciente. 
        Este efecto se consigue con la aplicación de esmaltes específicos 
        y el secado de las uñas en una luz UV o LED.
        Si quieres que tus uñas se vean perfectas durante 15 días, 
        la manicura semipermanente es la mejor opción. '
        beneficios='Dura hasta 14 días
        Brillo duradero
        Poco agresiva
        Evita que te muerdas las uñas'/>

      <Unservicio
        pic={gel}
        alt={'Imagen esmaltado en gel'}
        title='Gel'
        description='Las uñas de gel son un tipo de uña postiza hecha con un material 
        acrílico que se adhiere a la uña mediante un pegamento específico 
        con el fin de garantizar una manicura perfecta incluso en casos difíciles 
        de reconstrucción como son pérdida de uña, uñas comidas o uñas quebradizas. 
        También es una técnica muy utilizada para aumentar la longitud de la uña.'
        beneficios='Duracion: el esmalte de gel durará perfectamente de 2 a 3 semanas siempre 
        y cuando se cuide adecuadamente la manicura.
        las uñas de gel dan una apariencia 100% natural y son más fuertes 
        que otro tipo de uñas postizas 
        permite cambiar la longitud y la forma de las uñas
        técnica es inolora.'/>

      <Unservicio
        pic={acrilica}
        alt={'Imagen tecnica en acrilico'}
        title='Acrilico'
        description='Las uñas acrílicas son extensiones rígidas pero maleables, 
        que se aplican sobre las uñas naturales. Éstas tienen como 
        propósito crear una capa protectora, mientras cambian la forma 
        o incrementan la longitud de las uñas, sumándoles mayor 
        resistencia y perfeccionando su aspecto.'     
        beneficios='Pueden llegar a durar entre seis a ocho semanas, 
        dependiendo del crecimiento natural de las uñas y, desde luego, 
        de los cuidados y el mantenimiento constante. protege las uñas de los efectos dañinos de los esmaltes, 
        además de evitar el quiebre constante si es que tienes uñas débiles.
        es posible lograr diseños mucho más innovadores al 
        permitirnos darle la forma y longitud deseada, también ayuda a 
        perfeccionar la apariencia de las uñas naturales, reconstruyéndolas y 
        haciéndolas mucho más simétricas, 
        especialmente si se han roto o desgastado.'/>
    </div>
  )
}

export default Servicios

function Unservicio({ pic, alt, title, description, beneficios}) {
  return (
    <div className='un-servicio'>
      <div className='col-4 img-container'>
        <img src={`${pic}`} alt={`${alt}`} className='img-servicio' />
      </div>
      <div className='col-8 desc-container'>
        <h4 style={{ color: 'pink', textShadow: '2px 2px grey', textDecoration: 'underline' }}>{title}</h4>
        <p>{description}</p>
        <h5 style={{ color: 'pink', textShadow: '2px 2px grey', textDecoration: 'underline' }}>Beneficios:</h5>
        <p>{beneficios}</p>
      </div>
    </div>
  )
}