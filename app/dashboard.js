import React from 'react';


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
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div>

                            <a className="navbar-brand" href="#"><img src="../imgs/IMG_20210201_170350.png" alt="" width="40px" height="40px"/>HappyLife</a>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav nav-customer">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Rincon de la felicidad</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/BaulRecuerdos">Baul de los Recuerdos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Diario Emocional</a>
                                </li>

                            </ul>

                        </div>
                        <div className="d-flex justify-content-end align-items-center divButton">
                                <h5>Ozel^</h5>
                        </div>
                    </div>
                </nav>
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