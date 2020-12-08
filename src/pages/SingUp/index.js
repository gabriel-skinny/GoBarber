import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions'

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),

  name: Yup.string().required("O nome é obrigatorio"),
  
  password: Yup.string().min(6, "A senha tem que ter pelo menos 6 digitos")
})

function SingUp() {
  const dispatch = useDispatch()


  function handleSubmit({ name, email, password }){
    dispatch(signUpRequest(name, email, password));
  }
  
  return (
    <>
      <img src={logo} alt="Gobarber"/>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo"/>
        <Input name="email" type="email" placeholder="Seu e-mail"/>
        <Input name="password" type="password" placeholder="Sua senha secreta"/>
      
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}

export default SingUp;