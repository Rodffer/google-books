import React, { useState, FormEvent, useCallback, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { FiChevronRight, FiBookmark } from 'react-icons/fi';

import { IBook } from '../../types/IBook';

import Header from '../../components/Header';

import * as S from './styles';

import api from '../../services/api';

const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('');

  const [searchBook, setSearchBook] = useState('');
  const [results, setResults] = useState<IBook[]>([]);
  const [apiKey] = useState('AIzaSyDtjsZQXaPUwmGWLJktuRWSFk53WfH_lxg');

  const [itemsPerPage] = useState(8);
  const [currentPage] = useState(1);

  const [favBooks, setFavBooks] = useState<IBook[]>([]);

  async function handleSearchBook(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!searchBook) {
      setInputError('Ops! Digite o que deseja pesquisar!');
      return;
    }
    try {
      const response = await api.get(
        `books/v1/volumes?q=/${searchBook}:keyes&${apiKey}&startIndex=${currentPage}&maxResults=${itemsPerPage}`,
      );

      setResults(response.data.items);

      setInputError('');
    } catch (err) {
      setInputError('Erro ao buscar livro');
    }
  }

  useEffect(() => {
    const booksSaveds = localStorage.getItem('@GoogleBooksFavorite');

    if (booksSaveds) {
      const convertedBooksSaveds: IBook[] = JSON.parse(booksSaveds);
      setFavBooks(convertedBooksSaveds);
    }
  }, []);

  const handleFavorites = useCallback(
    (book: IBook) => {
      if (!favBooks.includes(book)) {
        setFavBooks([...favBooks, book]);
        localStorage.setItem('@GoogleBooksFavorite', JSON.stringify(favBooks));
      }
    },
    [favBooks],
  );

  return (
    <>
      <Header />
      <S.Title>Explore Livros no Google Books</S.Title>
      <S.Form hasError={!!inputError} onSubmit={handleSearchBook}>
        <input
          value={searchBook}
          onChange={e => setSearchBook(e.target.value)}
          placeholder="Digite o nome do livro"
        />
        <button type="submit">Pesquisar</button>
      </S.Form>
      {inputError && <S.Error>{inputError}</S.Error>}

      <S.Books>
        {results.map(book => (
          <S.Description key={book.id}>
            <S.CardImage>
              <img
                src={book.volumeInfo.imageLinks?.thumbnail}
                alt={book.volumeInfo.infoLink}
                width={195}
              />
            </S.CardImage>
            <S.CardContent>
              <strong>{book.volumeInfo.title}</strong>
            </S.CardContent>
            <S.CardContentDate>
              <p>{book.volumeInfo.publishedDate?.substring(0, 4)}</p>
            </S.CardContentDate>

            <S.Details>
              <button type="button" onClick={() => handleFavorites(book)}>
                <FiBookmark title="Adicionar aos Favoritos" size={20} />
              </button>
              <Link to={`details/${book.id}`}>
                Detalhes
                <FiChevronRight />
              </Link>
            </S.Details>
          </S.Description>
        ))}
      </S.Books>
    </>
  );
};

export default Dashboard;
