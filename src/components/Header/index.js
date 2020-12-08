import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo2.svg';

import { Container, Content, Profile } from './styles';

function Header() {
  const profile = useSelector(state => state.user.profile);
  
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="logoImg"/>
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to='profile'>Meu perfil</Link>
            </div>
            <img src={profile.avatar.url} alt="diego"/>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;