import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { isValid, format, parseISO } from 'date-fns';

import { toast } from 'react-toastify';
import { FiChevronLeft } from 'react-icons/fi';
import { IBook } from '../../types/IBook';
import { stripHtml } from '../../utils/text';

import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import * as S from './styles';

interface IBookParams {
  id: string;
}

const Detail: React.FC = () => {
  const [detail, setDetail] = useState<IBook>();
  const { id } = useParams<IBookParams>();

  const history = useHistory();

  useEffect(() => {
    const detailBook = async () => {
      try {
        const response = await api.get<IBook>(`/books/v1/volumes/${id}`);

        if (response.status !== 200) {
          throw new Error();
        }

        const details = response.data;

        if (details.volumeInfo.description) {
          details.volumeInfo.description = stripHtml(
            details.volumeInfo.description,
          );
        }

        setDetail(details);
      } catch (err) {
        toast.error('Ops! Algo inesperado ao mostrar detalhes');
      }
    };

    detailBook();
  }, [id]);

  return (
    <>
      <Header />
      <S.Container>
        <S.Title>Detalhes</S.Title>

        <S.ButtonBack onClick={() => history.goBack()}>
          <FiChevronLeft size={20} />
          Voltar
        </S.ButtonBack>
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
            {detail?.volumeInfo.publishedDate && (
              <>
                <span>Publicação</span>
                <strong>
                  {isValid(parseISO(detail.volumeInfo.publishedDate))
                    ? format(
                        parseISO(detail.volumeInfo.publishedDate),
                        'dd/MM/yyyy',
                      )
                    : detail.volumeInfo.publishedDate}
                </strong>
              </>
            )}
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
      <Footer />
    </>
  );
};

export default Detail;
