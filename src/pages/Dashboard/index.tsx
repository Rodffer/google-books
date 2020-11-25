import React from 'react';

import Header from '../../components/Header';

import * as S from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <S.Title>Explore Livros no Google Books</S.Title>
      <S.Form>
        <input placeholder="Digite o nome do livro" />
        <button type="submit">Pesquisar</button>
      </S.Form>

      <S.Books>
        <S.Description>
          <S.CardImage>
            <img
              src="https://books.google.com.br/books/content?id=9TcQCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73FRWEZbC3BsUSvMob-XCmiVO0PRphN_3HBn-Nsr2r57por6W6xYEi1_3HtiMUfpNrwvWHgu-xvrTJlyuglI9yhfjRwmIyAjQ9sKrjGTlE7p_z7NABs1HKvHdyCf33p27aej07B"
              alt="Harry Potter"
              width={195}
            />
          </S.CardImage>
          <S.CardContent>
            <strong>Harry Potter e a Ordem da Fenix</strong>
            <p>2003</p>
          </S.CardContent>
          <S.Details>
            <p>Detalhes</p>
          </S.Details>
        </S.Description>
      </S.Books>
    </>
  );
};

export default Dashboard;
