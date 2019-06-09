import React from 'react';
import axios from "axios";


class Formulario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            destino: '',
            precio: '',
            descuento: '',
            fechaSalida: '',
            fechaVuelta: '',
            imagen: ''

        }


    }
    async insertaViaje(event) {
        let nuevoViaje = {
           destino: this.state.destino,
           precio : this.state.precio,
           descuento: this.state.descuento,
           fechaSalida : this.state.fechaSalida,
           fechaVuelta: this.state.fechaVuelta,
           imagen : this.state.imagen
    } 
      
       
       await axios.post('http://localhost:3000/api/travels',nuevoViaje)
       
     
      


    }

    cambiaEstado(e, nombreP) {
        

        this.setState(

            {[nombreP]: e.target.value} 
        )


    }
    componentWillUpdate(){
      console.log(this.state.destino)
      console.log(this.state.precio)
      console.log(this.state.descuento)
      console.log(this.state.fechaSalida)
      console.log(this.state.fechaVuelta)


    }
    





    render() {
        return (
            <form onSubmit={this.insertaViaje}>
                <input value={this.state.destino} type='text' name='destino' onChange={(e) => this.cambiaEstado(e, 'destino')}></input>
                <input value={this.state.precio} type='text' name='precio' onChange={(e) => this.cambiaEstado(e, 'precio')}></input>
                <input value={this.state.descuento} type='text' name='descuento' onChange={(e) => this.cambiaEstado(e, 'descuento')} ></input>
                <input value={this.state.fechaSalida} type='text' name='fechaSalida' onChange={(e) => this.cambiaEstado(e, 'fechaSalida')} ></input>
                <input value={this.state.fechaVuelta} type='text' name='fechaVuelta' onChange={(e) => this.cambiaEstado(e, 'fechaVuelta')} ></input>
                <input value={this.state.imagen} type='text' name='imagen' onChange={(e) => this.cambiaEstado(e, 'imagen')}></input>
                <button type='submit'>inserta viaje</button>
            </form>)
    }
}











export default Formulario;