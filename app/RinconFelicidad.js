import React from 'react';


class RinconFelicidad extends React.Component{
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
            </div>
        );
    }
}

export default RinconFelicidad;