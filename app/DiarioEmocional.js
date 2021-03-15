import React from 'react';
import NavBarDashboard from "./NavBarDashboard";

class DiarioEmocional extends React.Component{

    render(){
        return(
            <div>
                <NavBarDashboard/>
                <div className = "contenedor-publicacion3">
                    <h1>Diario Emocional</h1>
                    <label>Describe todas las emociones que experimentaste durante el dia</label>
                    <textarea className = "form-control" id = "exampleFormControlTextarea2" rows = "4"> </textarea>
                    <label> Identifica el motivo de esta emocion </label>
                    <textarea className = "form-control" id = "exampleFormControlTextarea2" rows = "4"> </textarea>
                    <label> RECUERDA QUE LAS EMOCIONES, SOLAMENTE SON EMOCIONES Y NO AFECTAN LA REALIDAD </label>

                    <button className = "btn btn-outline-success"> Guardar </button>
                </div>
            </div>
        );
    }
}

export default DiarioEmocional;