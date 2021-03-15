import React from 'react';
import NavBarDashboard from "./NavBarDashboard";

class BaulRecuerdos extends React.Component{

    constructor() {
        super();
        this.state={
            publicacion: ["Un día estaba en la universidad y me dijeron que tendría hora libre...","Fui al cine con mis amigos"]
        }
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
                        this.state.publicacion.map(item =>{
                            return <div className="accordion" id="accordionRecuerdos">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            prueba
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                                         data-bs-parent="#accordionRecuerdos">
                                        <div className="accordion-body">
                                            {item}
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

