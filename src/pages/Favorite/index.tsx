import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { IBook } from '../../types/IBook';

import api from '../../services/api';

import Header from '../../components/Header';

import * as S from './styles';

interface BookParams {
  id: string;
}

const Favorite: React.FC = () => {
  const [favorite, setFavorite] = useState<IBook[]>([]);

  const { params } = useRouteMatch<BookParams>();

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
