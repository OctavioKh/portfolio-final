import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import image01 from '../bg01.png';

const Card = props => (
  <div className="card">
    {props.children}
  </div>
);

const Form = props => (
  <form className="form">{props.children}</form>
);

const TextInput = props => (
  <div
    className="text-input">
    <label
      className={(props.focus || props.value !== '') ? 'label-focus' : ''}
      htmlFor={props.name}>{props.label}</label>
    <input
      className={(props.focus || props.value !== '') ? 'input-focus' : ''}
      type="text"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onInput={props.onInput}
      onFocus={props.onFocus}
      onBlur={props.onBlur} />
  </div>
);

const TextArea = props => (
  <div
    className="text-area">
    <label
      className={(props.focus || props.value !== '') ? 'label-focus' : ''}
      htmlFor={props.name}>{props.label}</label>
    <textarea
      className={(props.focus || props.value !== '') ? 'input-focus' : ''}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onInput={props.onInput}
      onFocus={props.onFocus}
      onBlur={props.onBlur} />
  </div>
);

const Button = props => (
  <button
    className="button">{props.children}</button>
);

/** Root Component */
class NameForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: {
        name: 'name',
        label: 'Nombre',
        value: '',
        focus: false,
      },
      email: {
        name: 'email',
        label: 'Email',
        value: '',
        focus: false,
      },
      message: {
        name: 'message',
        label: 'Mensaje',
        value: '',
        focus: false,
      },
    }
  }
  
  handleFocus(e) {
    const name = e.target.name;
    const state = Object.assign({}, this.state[name]);
    state.focus = true;
    this.setState({ [name]: state },()=>{console.log(state)});
  }
  
  handleBlur(e) {
    const name = e.target.name;
    const state = Object.assign({}, this.state[name]);
    state.focus = false;
    this.setState({ [name]: state },()=>{console.log(state)});
  }
  
  handleChange(e) {
    const name = e.target.name;
    const state = Object.assign({}, this.state[name]);
    state.value = e.target.value;
    this.setState({ [name]: state },()=>{console.log(state)});
  }
  
  render() {
    const {name, email, message} = this.state;
    return (
      <div className="container-forma">
        <Card>
          <br/>
          <h1 className="text-center">Envianos un Mensaje!</h1>
          <br/>

          <Form>
            <TextInput
              {...name}
              onFocus={this.handleFocus.bind(this)}
              onBlur={this.handleBlur.bind(this)}
              onChange={this.handleChange.bind(this)} />
            <TextInput
              {...email}
              onFocus={this.handleFocus.bind(this)}
              onBlur={this.handleBlur.bind(this)}
              onChange={this.handleChange.bind(this)} />
            <TextArea
              {...message}
              onFocus={this.handleFocus.bind(this)}
              onBlur={this.handleBlur.bind(this)}
              onChange={this.handleChange.bind(this)} />
            <Button>Enviar</Button>
          </Form>
        </Card>
      </div>
    );
  }
}




//ABOUT
export default function Contacto() {


  

  return (
    <>
    <main className="fondo  min-h-screen p-12  animate__animated animate__fadeIn">
      <h1 className="text-5xl text-white flex justify-center cursive">Contacto</h1>
      <h1 className="espacio">&nbsp;</h1>
     <NameForm />
     
    </main>
    </>
  );
}
