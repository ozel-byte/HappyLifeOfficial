import React from 'react';
import NavBarDashboard from "../componenentes/NavBarDashboard";
import update from 'immutability-helper'
import axios from "axios";


class DiarioEmocional extends React.Component{

    constructor() {
        super();
        this.state = {
            descripcioEmocion: " ",
            motivoEmocion: " ",
            idUser: " "
        }
    }

    componentDidMount() {
        let idUsuario = window.localStorage.getItem("user");
        this.state = {
            idUser: idUsuario
        }
    }

    changeField(e) {

        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }

    guardarEmociones(e){
        if(this.state.descripcioEmocion.length >0 && this.state.motivoEmocion.length >0){
            axios.post('http://localhost:3000/actividades/diary',{
                descripcionEmocion: this.state.descripcionEmocion.toString(),
                motivoEmocion: this.state.motivoEmocion.toString(),
                idUsuario: this.state.idUser
            }).then(dataRes => {
                console.log(dataRes.data.body);
                console.log(dataRes.data);
                if (dataRes.data.status === true){
                    alert("Agregado");

                }else{
                    alert(dataRes.data.message);
                }
            })
        }
    }

    render(){
        return(
            <div>
                <NavBarDashboard/>
                <div className = "contenedor-publicacion3">
                    <h1>Diario Emocional</h1>
                    <label>Describe todas las emociones que experimentaste durante el dia</label>
                    <textarea className = "form-control" id = "exampleFormControlTextarea2" rows = "4" name="descripcionEmocion"  valor={this.state.descripcioEmocion} onChange={this.changeField.bind(this)}> </textarea>
                    <label> Identifica el motivo de esta emocion </label>
                    <textarea className = "form-control" id = "exampleFormControlTextarea2" rows = "4" name="motivoEmocion"  valor={this.state.motivoEmocion} onChange={this.changeField.bind(this)}> </textarea>
                    <label> RECUERDA QUE LAS EMOCIONES, SOLAMENTE SON EMOCIONES Y NO AFECTAN LA REALIDAD </label>
                    <button className = "btn btn-outline-success" onClick={this.guardarEmociones.bind(this)}> Guardar </button>
                </div>
            </div>
        );
    }
}

export default DiarioEmocional;