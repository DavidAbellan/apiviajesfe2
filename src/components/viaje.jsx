import React from 'react';
import imagen from '../components/imagen';

function viaje(props){
 return (
      <div>
     <h1>{props.destino} </h1>

        {  
       
       <img className={imagen}  src={props.imagen ?
       props.imagen:"http://josecostaros.es/wp-content/uploads/2013/10/Avatar-Wordpress.jpg"}/> 
         
        }

     </div> 
 )
}

export default viaje;
