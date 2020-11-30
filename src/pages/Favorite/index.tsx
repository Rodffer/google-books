import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import api from '../../services/api';

import Header from '../../components/Header';

import * as S from './styles';

interface BookParams {
  id: string;
}

interface Book {
  volumeInfo: {
    title: string;
    categories?: string[];
    publisher?: string;
    authors: string[];
    description: string;
    infoLink: string;
    imageLinks?: {
      thumbnail: string;
    };
    publishedDate: string;
    pageCount: number;
  };
  id: string;
}

const Favorite: React.FC = () => {
  const [favorite, setFavorite] = useState<Book[]>(() => {
    const storagedFavorites = localStorage.setItem(
      '@GoogleBooksExplorer:favorites',
      favorite,
    );

    if (storagedFavorites) {
      return JSON.parse(storagedFavorites);
    }
    return [];
  });

  const { params } = useRouteMatch<BookParams>();

  useEffect(() => {
    api.get(`/books/v1/volumes/${params.id}`).then(response => {
      setFavorite(response.data);
    });
  }, [params.id]);

  useEffect(() => {
    localStorage.setItem(
      '@GoogleBooksExplorer:favorites',
      JSON.stringify(params.id),
    );
  }, [params.id]);

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
