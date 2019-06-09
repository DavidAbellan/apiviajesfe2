import React from "react";
import Viaje from "../components/viaje";
import axios from "axios";
import Formulario from "../components/formularioInsert";

class Viajes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayViajes: [],
            
        }
        this.llamarApi()
       
    }

    async llamarApi() {
        let datos = await axios.get('http://localhost:3000/api/travels')
         return this.setState( {arrayViajes : datos.data.arraydeviajes})
        
    }
    
    
    
    
    
    
    render() {
        return (
            
       <div>
        {this.state.arrayViajes.map((a, index) => <Viaje key={index} {...a} >  </Viaje>)}
        <Formulario></Formulario>
        </div>
        )
    }


}

export default Viajes;