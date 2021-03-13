import React from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';

class RecuperarPass extends React.Component{

    constructor() {
        super();
        this.state={
            statusAlert: false
        }
    }

    viewUser(){

       if(this.props.email.length>0 && this.props.password.length>0){

           axios.post('http://localhost:3000/user/signin',{
                         //http://localhost:3000/user/signin
               correo: this.props.email,
               pass: this.props.password
           }).then(dataRes => {
               console.log(dataRes.data.body);
               console.log(dataRes.data);
               if (dataRes.data.status === true){
                   this.props.history.push('/dashboard');
                   alert(dataRes.data);
               }else{
                   alert(dataRes.data.message);
               }
           })

        /*   axios.post('http://localhost:3000/user/signin',{
               correo: this.props.email,
               pass: this.props.password
           }).then(dataRes => {
               console.log(dataRes);
               console.log(dataRes.data);
               if (dataRes.data.status === true){
                  // this.props.history.push('/home');
                   alert(dataRes.data);
               }else{
                   alert(dataRes.data.message);
               }
           })*/



       }else{
           alert("email o password incorrecto "+this.props.email);
       }
    }

    render() {
        return(
            <div>
                <p className="text-right pt-3"><a href="#" className="sin-decoracion">¿olvidaste tu contraseña?</a></p>
                <div>
                    <button className="boton-signin" onClick={this.viewUser.bind(this)} type="submit"> Iniciar sesion </button>
                </div>
                <br/>
            </div>

        )
    }
}
export default withRouter(RecuperarPass);