import React from "react";

class AboutUs extends React.Component{
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div>
                            <a className="navbar-brand" href="#"><img src="../imgs/IMG_20210201_170350.png" alt="" width="40px" height="40px"/>HappyLife</a>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/aboutUs">Acerca de nosotros</a>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex justify-content-end align-items-center divButton">
                            <button type="button" className="btn btn-light divButton">sign in</button>
                            <button type="button" className="btn btn-success">Registrarse</button>
                        </div>
                    </div>
                </nav>
                <div className="text-warning quienesSomos">
                    <h3>¿Quienes somos?</h3>
                </div>
                <div className="text-dark textP">
                    <h1>Somos una <span className="text-success">plataforma</span></h1>
                    <h1>que funciona como un</h1>
                    <h1>auxiliar en el tratamiento</h1>
                    <h1>de <span className="text-danger">enfermedades</span>.</h1>
                </div>
                <div className="imagen1">
                    <img src="../imgs/PicsArt_03-07-09.46.28.png" width="242px" height="242px"/>
                </div>
                <div className="imagen2">
                    <img src="../imgs/PicsArt_03-07-09.27.12.png" width="400px" height="400px"/>
                </div>
                <div className="imagen3">
                    <img src="../imgs/PicsArt_03-07-11.17.40.png" width="257px" height="415px"/>
                </div>
                <div className="textoM">
                    <h3>trastornos de ansiedad y depresión</h3>
                </div>
            </div>
        )
    }
}

export default AboutUs