import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <>
    <h1>404: Pagina no encontrada</h1>
    <Link to='/'>
      <button type='button' className='btn-back-home'>
        Regresa a Inicio
      </button>
    </Link>
  </>
);

export default NotFound;
