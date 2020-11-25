import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Container>
      <Link to="/">
        <img src={logo} width={210} alt="Google Books" />
      </Link>

      <nav>
        <S.StyledLink to="/" activeClassName="is-active">
          Inicio
        </S.StyledLink>
        <S.StyledLink to="favorites" activeClassName="is-active">
          Favoritos
        </S.StyledLink>
      </nav>
    </S.Container>
  );
};

export default Header;
