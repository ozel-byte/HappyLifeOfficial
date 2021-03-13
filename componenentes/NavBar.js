import React from 'react';


class NavBar extends React.Component{
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
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Acerca de Nosotros</a></li>
                            <li><a href="#">Equipo</a></li>
                            <li><a href="#">Servicio</a></li>
                        </ul>
                    </nav>
                    <div className="contenedor-botones">
                        <button className="boton-Iniciar-session">Iniciar Sesion</button>
                        <button className="boton-Iniciar-session">Registrarse</button>
                    </div>
                </header>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center letra-presentacion p-4">
                        <h1>HappyLife la plataforma virtual <br/>Que Fomenta<br/> la Felicidad y Alegria</h1></div>
                    <div className="col-12 d-flex justify-content-center descripcion-text">
                        <p>Con la ayuda de happy junto con terapia
                            psicoanalitica<br/>    Contribuye al tratamiento
                            de la ansiedad<br/>
                        </p>
                    </div>
                    <div className="col-12 d-flex justify-content-center boton-registrarse">
                        <button>Registrate</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-baseline pt-5 pl-5">
                       <div className="text-center text-danger font-weight-bold">
                           <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                className="bi bi-heart-fill" viewBox="0 0 16 16">
                               <path fill-rule="evenodd"
                                     d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                           </svg>
                           <p>Amor</p>
                       </div>
                        <div className="separador">

                        </div>
                       <div className="text-center text-primary font-weight-bold">
                           <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                className="bi bi-emoji-laughing-fill" viewBox="0 0 16 16">
                               <path
                                   d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5c0 .501-.164.396-.415.235C6.42 6.629 6.218 6.5 6 6.5c-.218 0-.42.13-.585.235C5.164 6.896 5 7 5 6.5 5 5.672 5.448 5 6 5s1 .672 1 1.5zm5.331 3a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zm-1.746-2.765C10.42 6.629 10.218 6.5 10 6.5c-.218 0-.42.13-.585.235C9.164 6.896 9 7 9 6.5c0-.828.448-1.5 1-1.5s1 .672 1 1.5c0 .501-.164.396-.415.235z"/>
                           </svg>
                           <p>Felicidad</p>
                       </div>
                        <div className="separador">

                        </div>
                    <div className="text-center text-success font-weight-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                             className="bi bi-stars" viewBox="0 0 16 16">
                            <path
                                d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"/>
                        </svg>
                        <p>Divercion</p>
                    </div>

                    </div>
                </div>
                <div className="pl-5 pt-2 d-flex align-items-center justify-content-center pr-5">
                    <img className="animate__animated animate__backInLeft" src="https://cdn.dribbble.com/users/2155177/screenshots/14712406/media/6bcacf899d6346d8420cd18ad5be79dc.png?compress=1&resize=800x600" alt="fondo" width="550px" height="400px"/>
                  <div className="letra-presentacion2">
                      <h3>
                          Las personas nacidas entre<br/> los años 2000 a 2005
                      </h3>
                      <p>
                          somos aquellas a las cuales la sociedad las llama,<br/>
                          la generación Z, la cual se le autodefine como aquella<br/>
                          generación  más inútilmente preparada, pues aunque es <br/>
                          cierto que somos expertos en el uso de la tecnología y <br/>
                          otros ámbitos respecto a la educación, somos incapaces de<br/>
                          cambiar un neumático de un automóvil o realizar algún <br/>
                          trámite bancario , entre otras cosas.
                      </p>
                  </div>
                </div>
                <div className="pl-5 pt-2 d-flex align-items-center justify-content-center pr-5 pt-4">
                    <div className="letra-presentacion2 pl-5">
                        <h3>
                           HappyLife<br/>
                        </h3>
                        <p>
                        una plataforma que funciona como un auxiliar<br /> 
                        en el tratamiento de estas enfermedades<br/>
                        centrándose en fomentar buenos hábitos en<br/>
                        las personas, los cuales aumentan la autoestima,<br/>
                        la seguridad en uno mismo, cualidades que<br/>
                        fortalecen nuestra capacidad de interactuar<br/>
                        con las personas de forma real. Todo esto<br/>
                        mediante tareas, como el diario emocional<br/>
                        el rincón de felicidad y el baúl de agradecimiento.<br/>
                        Junto con la ayuda de Happy nuestro guía virtual<br/>
                        </p>
                    </div>
                    <div className="">
                        <img src="https://cdn.dribbble.com/users/2155177/screenshots/9071719/media/d48fc2b10716299cbe50efd33366c442.png?compress=1&resize=800x600" alt="" width="550px" height="400px"/>
                    </div>
                </div>
              <footer>
                 <div className="row pt-4">
                     <div className="col-4 text-white">
                         <div className="logo-container">
                             <img src="../imgs/icon.png" alt="" width="60px" height="60px"/>
                             <h2>HappyLife</h2>
                         </div>
                     </div>
                     <div className="col-4 d-flex justify-content-center align-items-center text-white direccion-footer">
                         <p>Direcion y telefono<br/>
                             Carretera Tuxtla Gutierrez. - Portillo Zaragoza Km 21+500<br/>
                             Col. Las Brisas; Suchiapa, Chiapas. CP.29150.<br/> 9613802021
                             Suchiapa, Chiapas.
                         </p>

                     </div>
                     <div className="col-4 text-white icons-footer d-flex flex-column align-items-center justify-content-center">
                         <div className="d-flex justify-content-center align-items-center">
                             <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                  className="bi bi-facebook" viewBox="0 0 16 16">
                                 <path
                                     d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                             </svg>

                             <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                  className="bi bi-instagram" viewBox="0 0 16 16">
                                 <path
                                     d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                             </svg>
                             <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                                  className="bi bi-youtube" viewBox="0 0 16 16">
                                 <path
                                     d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                             </svg>
                         </div>
                         <button className="btn btn-outline-success mt-4 ml-3">Send email</button>

                     </div>
                 </div>
                  <div className="row">
                      <div className="col-12 text-white  d-flex justify-content-center align-items-center">
                            <p>Copyright &copy; HappyLife platform</p>
                      </div>
                  </div>
              </footer>
            </>
        );
    }
}
export default NavBar;