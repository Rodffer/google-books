import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import Header from '../../components/Header';

import * as S from './styles';

import api from '../../services/api';

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
  };
  id: string;
}

const Dashboard: React.FC = () => {
  const [searchBook, setSearchBook] = useState('');
  const [results, setResults] = useState<Book[]>([]);
  const [apiKey] = useState('AIzaSyDtjsZQXaPUwmGWLJktuRWSFk53WfH_lxg');

  async function handleSearchBook(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get(
      `books/v1/volumes?q=/${searchBook}:keyes&${apiKey}&maxResults=40`,
    );

    setResults(response.data.items);
  }

  return (
    <>
      <Header />
      <S.Title>Explore Livros no Google Books</S.Title>
      <S.Form onSubmit={handleSearchBook}>
        <input
          value={searchBook}
          onChange={e => setSearchBook(e.target.value)}
          placeholder="Digite o nome do livro"
        />
        <button type="submit">Pesquisar</button>
      </S.Form>

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
              <p>{book.volumeInfo.publishedDate}</p>
            </S.CardContentDate>

            <S.Details>
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
