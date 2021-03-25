import React from 'react';
import india from '../assets/static/india.jpg';
import paris from '../assets/static/paris.jpeg';
import sudafrica from '../assets/static/sudafrica.jpg';
import americalasvegas from '../assets/static/americalasvegas.jpg';

export const Principal = () => {
  return (
    <div className='container_principal'>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={sudafrica} className="d-block w-100" alt="..." />
          <div className="carousel-caption  d-md-block">
            <h5>Desierto de Namib Sudafrica, Africa</h5>
            <p>El desierto del Namib es un importante desierto de África que se extiende a lo largo de la costa de Namibia, entre el río Orange, que marca la frontera
               con la República de Sudáfrica, al sur, y el río Kunene, entre Namibia y Angola, al norte.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src={paris} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-md-block">
            <h5>Paris Francia,Europa</h5>
            <p>París, la capital de Francia, es una importante ciudad europea y un 
              centro mundial del arte, la moda, la gastronomía y la cultura.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={india} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-md-block">
            <h5>Taj Mahal India, Europa</h5>
            <p>El Taj Mahal ​​ es un monumento funerario construido entre 1631 y 1654 en la ciudad de Agra, estado de Uttar Pradesh, 
              a orillas del río Yamuna, por el emperador musulmán Shah Jahan de la dinastía mogol.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src={americalasvegas} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-md-block">
            <h5>Las Vegas EEU, America</h5>
            <p>Las Vegas, en el desierto de Mojave de Nevada, es una ciudad turística famosa por su activa vida nocturna, 
              que se centra en casinos abiertos las 24 horas del día y otras opciones de entretenimiento.</p>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  )
}
