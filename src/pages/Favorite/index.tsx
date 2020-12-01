import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { IBook } from '../../types/IBook';

import Header from '../../components/Header';

import * as S from './styles';

const Favorite: React.FC = () => {
  const [favorites, setFavorites] = useState<IBook[]>([]);

  useEffect(() => {
    const booksFavorites: string | null = localStorage.getItem('books');

    if (booksFavorites) {
      const booksFavoritesConverteds: IBook[] = JSON.parse(booksFavorites);
      setFavorites(booksFavoritesConverteds);
    }
  }, []);

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

      <S.Container>
        <S.Books>
          {favorites &&
            favorites.map(favorite => {
              return (
                <S.Description key={favorite.id}>
                  <S.CardImage>
                    <img
                      src={favorite.volumeInfo.imageLinks?.thumbnail}
                      alt={favorite.volumeInfo.infoLink}
                      width={195}
                    />
                  </S.CardImage>
                  <S.CardContent>
                    <strong>{favorite.volumeInfo.title}</strong>
                  </S.CardContent>
                  <S.CardContentDate>
                    <p>{favorite.volumeInfo.publishedDate}</p>
                  </S.CardContentDate>
                  <S.Details>
                    <Link to={`details/${favorite.id}`}>
                      Detalhes
                      <FiChevronRight />
                    </Link>
                  </S.Details>
                </S.Description>
              );
            })}
        </S.Books>
      </S.Container>
    </>
  );
};

export default Favorite;
