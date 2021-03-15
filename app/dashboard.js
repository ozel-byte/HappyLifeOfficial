import React from 'react';
import NavBarDashboard from "./NavBarDashboard";


class Dashboard extends React.Component{
    constructor() {
        super();
        this.state={
            publicacion: ["estoy feliz hoy","conoci a luisito comunica","no llege temprano a la escuela"]
        }
    }
    render() {
        return (
            <div>
                <NavBarDashboard/>
               <div className="contenedor-publicacion">
                  <h1>Rincon de la Felicidad</h1>
                   <label className="form-label text-muted">Anote todas las cosas que lo hicieron feliz</label>
                   <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                   <br/>
                   <button className="btn btn-outline-success">Agregar</button>
               </div>

                <div className="contenedor-item-publicacion">
                    <div className="list-group">
                        {
                            this.state.publicacion.map(item => {
                                return <div>
                                    <label className="list-group-item">
                                        <input className="form-check-input me-1" type="checkbox" value="" />
                                        {item}
                                    </label>
                                </div>
                            })
                        }
                    </div>
                </div>

            </div>
        );
    }
}


export default Dashboard;