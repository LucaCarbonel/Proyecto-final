import React from 'react';
import { useNavigate } from "react-router-dom";
import { ROUTES } from './../../Constants/ROUTES';

const NotFound = () => {
  let navigate = useNavigate();

  const handlerRedirect = () => {
    navigate(ROUTES.home)
  }
  
    return (
    <> 
      <div> 
        Soy el NotFound padre
      </div>
      <button onClick={handlerRedirect} >
        Volver al Home
      </button>
    </>
  )
}

export default NotFound;