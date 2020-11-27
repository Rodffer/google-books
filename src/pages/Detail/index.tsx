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

const Detail: React.FC = () => {
  const [detail, setDetail] = useState<Book | null>(null);

  const { params } = useRouteMatch<BookParams>();

  useEffect(() => {
    api.get(`/books/v1/volumes/${params.id}`).then(response => {
      setDetail(response.data);
    });
  }, [params.id]);

  return (
    <>
      <Header />
      <S.Container>
        <S.Title>Detalhes</S.Title>

        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      </S.Container>

      <S.BookDetail>
        <header>
          <img
            src={detail?.volumeInfo.imageLinks?.thumbnail}
            alt={detail?.volumeInfo.infoLink}
          />

          <div>
            <h1>{detail?.volumeInfo.title}</h1>
            <p>{detail?.volumeInfo.description}</p>
          </div>
        </header>

        <ul>
          <li>
            <span>Autor</span>
            <strong>{detail?.volumeInfo.authors}</strong>
          </li>
          <li>
            <span>Editora</span>
            <strong>{detail?.volumeInfo.publisher}</strong>
          </li>
          <li>
            <span>Publicação</span>
            <strong>{detail?.volumeInfo.publishedDate}</strong>
          </li>
          <li>
            <span>Páginas</span>
            <strong>{detail?.volumeInfo.pageCount}</strong>
          </li>
          <li>
            <span>Google Play</span>
            <a href={detail?.volumeInfo.infoLink}>Acessar Página</a>
          </li>
        </ul>
      </S.BookDetail>
    </>
  );
};

export default Detail;
