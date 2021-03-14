import React from 'react';
import Footer from "./Footer";


class NavagationBar extends React.Component{
    render() {
        return (
            <>
                <header className="header">
                    <div className="logo-container animate__animated animate__bounce">
                        <div className="animate__animated animate__backInLeft"> <img src="../imgs/icon.png" alt="" width="60px" height="60px"/></div>
                        <h2>HappyLife</h2>
                    </div>
                    <nav>
                        <ul className="nav-items">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/aboutUs">Acerca de Nosotros</a></li>
                            <li><a href="#">Equipo</a></li>
                            <li><a href="#">Servicio</a></li>
                        </ul>
                    </nav>
                    <div className="contenedor-botones">
                        <button className="boton-Iniciar-session">Iniciar Sesion</button>
                        <button className="boton-Iniciar-session">Registrarse</button>
                    </div>
                </header>
            </>
        )
    }
}

export default NavagationBar;