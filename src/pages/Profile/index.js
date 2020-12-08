import React from 'react';
import { Form, Input } from '@rocketseat/unform'; 
import  { useSelector, useDispatch } from 'react-redux';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions'

import AvatarInput from './AvatarInput';

import { Container } from './styles';

function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  
  function handleSubmit(data){
    dispatch(updateProfileRequest(data))
  }

  function handleLogout(){
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Nome completo"/>
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />
      
        <hr/>

        <Input type="password" name="oldPassword" placeholder="Sua senha atual"/>
        <Input type="password" name="password" placeholder="Nova senha"/>
        <Input type="password" name="confirmPassword" placeholder="Confirmação de senha"/>
      
        <button type="submit">Atualizar perfil</button>
      </Form>

     <button type="button" onClick={handleLogout}>Sair do GoBarber</button>
    </Container>
  );
}

export default Profile;