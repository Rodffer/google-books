import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import Header from '../../components/Header';

import * as S from './styles';

const Favorite: React.FC = () => {
  return (
    <>
      <Header />
      <S.Container>
        <S.Title>Favoritos</S.Title>

        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </S.Container>
    </>
  );
};

export default Favorite;
