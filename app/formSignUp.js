import React from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { withRouter } from 'react-router-dom';
import axios from "axios";


class FormSignUp extends React.Component{
    constructor() {
        super();
        this.state = {
            fecha: new Date(),
            terminos : false
        }
    }
    onChange(e){
        this.setState({
           fecha:e
       })
    }

    registrarUser(){
        if(this.props.nombre.length > 0 && this.props.nombreUsuario.length > 0 && this.props.email.length > 0 && this.props.contrasena.length > 0){
            axios.post('http://localhost:3000/user/signup',{
                nombre:this.props.nombre.toString(),
                correo: this.props.email.toString(),
                password: this.props.contrasena.toString(),
                nombreUsuario: this.props.nombreUsuario.toString(),
                fechaNacimiento: this.state.fecha.toDateString()
            }).then(dataRes => {
                console.log(dataRes.data.body);
                console.log(dataRes.data);
                if (dataRes.data.status === true){
                    alert("Usuario creado correcto");
                    this.props.history.push('/home');

                }else{
                    alert(dataRes.data.message);
                }
            })
        }
    }

    render() {
        return(
            <div>
                    <div>
                       <div className="d-flex">
                           <p>Fecha de cumpleaños</p>
                           <div className="pl-2"><DatePicker  selected={this.state.fecha} onChange={this.onChange.bind(this)} />
                           </div>
                       </div>

                    </div>
                <br/>
                <button className="button-Register" onClick={this.registrarUser.bind(this)}>Registrarse</button>
            </div>
        )
    }
}
export default withRouter(FormSignUp);