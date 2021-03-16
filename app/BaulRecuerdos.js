import React from 'react';
import NavBarDashboard from "../componenentes/NavBarDashboard";
import axios from "axios";
import update from "immutability-helper";

class BaulRecuerdos extends React.Component{

    constructor() {
        super();
        this.state={
            titulo: " ",
            descripcionRecuerdo: " ",
            porque: " ",
            idUsuario: " ",
            baul: []
        }
    }

    componentDidMount() {
        this.obtenerBaules()
    }

    changeField(e) {

        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }

    guardarRecuerdos(e){
        let idUsuario2 = window.localStorage.getItem("user");
        console.log(idUsuario2 + " id Agregar")
        if(this.state.titulo.length >0 && this.state.descripcionRecuerdo.length >0 && this.state.porque.length >0){
            axios.post('http://localhost:3000/actividades/addBaul',{
                titulo: this.state.titulo.toString(),
                descripcionRecuerdo: this.state.descripcionRecuerdo.toString(),
                porque: this.state.porque.toString(),
                idUsuario: idUsuario2
            }).then(dataRes => {
                console.log(dataRes.data.body);
                console.log(dataRes.data);
                if (dataRes.data.status === true){
                    alert("Agregado");

                }else{
                    alert(dataRes.data.message);
                }
                this.obtenerBaules()
            })
        }

    }

    obtenerBaules(){
        let idUsuario = window.localStorage.getItem("user");

        console.log(this.state.idUsuario + " recuerdo");
        axios.get('http://localhost:3000/actividades/getBaul', {
            params: {
                idUsuario: idUsuario
            }

        }).then(data => {
            if(data.data.body != null){
                console.log("el data es no null")
            }
            this.setState({ baul: data.data.body })
        });

    }

    render() {
        return (
            <div>
                <NavBarDashboard/>
                <div className="contenedor-publicacion2">
                    <h1>Baúl de los recuerdos</h1>
                    <label>Ponle un Titulo a tu recuerdo :)</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" name="titulo" valor={this.state.titulo} onChange={this.changeField.bind(this)}>Universidad</textarea>
                    <label> Escriba un recuerdo que lo haga sentir feliz :)</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" name="descripcionRecuerdo" valor={this.state.descripcionRecuerdo} onChange={this.changeField.bind(this)}> Un día estaba en la universidad y me dijeron que tendría hora libre... </textarea>
                    <label>¿Porque ese recuerdo te hace feliz?</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" name="porque" valor={this.state.porque} onChange={this.changeField.bind(this)}> Porque asi podria ir a comer :)</textarea>
                    <br/>
                    <button className="btn btn-outline-success" onClick={this.guardarRecuerdos.bind(this)}>Agregar</button>
                </div>
                <label className="d-flex justify-content-center"><h2>Mis recuerdos</h2></label>
                <div className="contenedor-item-publicacion">
                    {
                        this.state.baul.map(item =>{
                            return <div className="accordion" id="accordionRecuerdos">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="heading">
                                        <button className="accordion-button collapsed" key={item.idbaul} type="button" data-bs-toggle="collapse"
                                                data-bs-target={"#collapse"+ item.idbaul} aria-expanded="false" aria-controls="collapse">
                                            {item.titulo + " " + item.idbaul}
                                        </button>
                                    </h2>
                                    <div id={"collapse"+ item.idbaul} className="accordion-collapse collapse" aria-labelledby="heading"
                                         data-bs-parent="#accordionRecuerdos">
                                        <div className="accordion-body">
                                            {item.descripcionRecuerdo}
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

