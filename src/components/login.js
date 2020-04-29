import React from 'react';
import {Button, Form, FormGroup, Label, Input}
    from 'reactstrap'
import {FacebookLoginButton} from 'react-social-login-buttons';
import '../components/styles/styles.css'
class logeo extends React.Component{
    
    state = {email:"", contraseña:""};
    valueToState = ({name, value}) =>{
        this.setState(()=>{
            return {[name]:value};
        });
        
    };
    handleClick = e => {
        console.log(JSON.stringify(this.state,null, 2))
        console.log('Inicio de sesión con exito');
    };
    render(){
        return <div className="container">
            <Form className="login-form">

                <h1 className="text-center">¡Bienvenido!</h1>

                <FormGroup>
                    <Label>Email</Label>
                    <Input onChange={event => this.valueToState(event.target)} type="email" placeholder="ejemplo@gmail.com" name="email"></Input>
                </FormGroup>

                <FormGroup>
                    <Label>Contraseña</Label>
                    <Input onChange={event => this.valueToState(event.target)}  type="password" placeholder="contraseña" name="contraseña"></Input>
                </FormGroup>

                <Button onClick={this.handleClick} className="btn-lg btn-dark btn-block">Iniciar sesión</Button>

                <div className="text-center pt-3">O continua con Facebook</div>

                <FacebookLoginButton className="mt-3 mb-3"/>
                <div className="text-center">
                    <a href="/sign-up">Registrarse</a>
                    <span className="p-2">|</span>
                    <a href="/forgot">Olvidé mi contraseña</a>
                </div>
            </Form>

        </div>
    }
}
export default logeo;