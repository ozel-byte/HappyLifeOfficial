import React from 'react';
import NavBarDashboard from "../componenentes/NavBarDashboard";
import axios from "axios";

class BaulRecuerdos extends React.Component{

    constructor() {
        super();
        this.state={
           baul: ["universidad", "cine"]
        }
    }

    componentDidMount() {
        //this.obtenerBaules()
    }

    obtenerBaules(){
        let idUsuario = window.localStorage.getItem("user");
        console.log(idUsuario + " recuerdo");
        axios.get('http://localhost:3000/actividades/getBaul', {
            data: {
                idUsuario: idUsuario
            }

        }).then(data => {
            this.setState({
                baul: data.data.body
            })
        });
    }

    render() {
        return (
            <div>
                <NavBarDashboard/>
                <div className="contenedor-publicacion2">
                    <h1>Baúl de los recuerdos</h1>
                    <label>Ponle un Titulo a tu recuerdo :)</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="1">Universidad</textarea>
                    <label> Escriba un recuerdo que lo haga sentir feliz :)</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"> Un día estaba en la universidad y me dijeron que tendría hora libre... </textarea>
                    <label>¿Porque ese recuerdo te hace feliz?</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"> Porque asi podria ir a comer :)</textarea>
                    <br/>
                    <button className="btn btn-outline-success">Agregar</button>
                </div>
                <label className="d-flex justify-content-center"><h2>Mis recuerdos</h2></label>
                <div className="contenedor-item-publicacion">
                    {
                        this.state.baul.map(item =>{
                            return <div className="accordion" id="accordionRecuerdos">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target={"#"+ item} aria-expanded="false" aria-controls="collapse">
                                            prueba
                                        </button>
                                    </h2>
                                    <div id={item} className="accordion-collapse collapse" aria-labelledby="heading"
                                         data-bs-parent="#accordionRecuerdos">
                                        <div className="accordion-body">
                                            {"# "+ item}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
                <br/>
            </div>

        );
    }
}
export default BaulRecuerdos;

