import React from "react";
import { withRouter } from 'react-router-dom';
class Home extends React.Component{

    registro(){
        this.props.history.push('/SignUp')
    }
    inicioSesion(){
        this.props.history.push('/')
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
                           <ul className="navbar-nav">
                               <li className="nav-item">
                                   <a className="nav-link active" aria-current="page" href="#">Home</a>
                               </li>
                               <li className="nav-item">
                                   <a className="nav-link" href="/aboutUs">Acerca de nosotros</a>
                               </li>
                               <li className="nav-item">
                                   <a className="nav-link" href="#">Equipo</a>
                               </li>
                               <li className="nav-item">
                                   <a className="nav-link" href="#">servicio</a>
                               </li>



                           </ul>

                       </div>
                       <div className="d-flex justify-content-end align-items-center divButton">
                           <button onClick={this.inicioSesion.bind(this)} type="button" className="btn btn-light">sign in</button>
                           <button onClick={this.registro.bind(this)} type="button" className="btn btn-success">Registrarse</button>
                       </div>
                   </div>
               </nav>
               <br/>
               <br/>
               <br/>
               <div className="row margin-contenedor">
                   <div className="text-size col-12 d-flex align-items-center justify-content-around">
                       <h1>HappyLife la <span className="text-success">plataforma</span><br/> virtual que fomenta la<br/> <span className="text-warning"> </span> y la alegria</h1>
                       <div>
                           <img src="../imgs/PicsArt_03-07-09.09.56.png" alt="" width="300px" height="300px"/>
                       </div>
                   </div>

               </div>
               <div className="contenedor-historia">
                   <div>
                       <h1>Impacto de happy <br/> en las personas</h1>
                       <p>Con la ayuda de happy junto con terapia
                       psicoanalitica   Contribuye<br/> al tratamiento
                       de la ansiedad, procurando el bienestar
                       fisico<br/> y mental de las personas
                       espesificamente ansiedad y depresion,<br/>
                       tomando como prioridad a la
                       generacion Z.

                       </p>
                   </div>
                   <div>
                       <img src="https://images.unsplash.com/photo-1615065592543-334b128affca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" width="300px" height="400px"/>
                   </div>
               </div>
           </div>
        );
    }
}
export default withRouter(Home);