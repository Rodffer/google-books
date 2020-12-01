import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from '../../pages/Dashboard';

jest.mock('react-router-dom', () => {
  return {
    NavLink: ({ children }: { children: React.ReactNode }) => children,
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Dashboard Page', () => {
  it('should be able to type a few words and see a list of books', () => {
    const { debug, getByPlaceholderText, getByText } = render(<Dashboard />);
    const searchField = getByPlaceholderText('Digite o nome do livro');
    const buttonElement = getByText('Pesquisar');

    fireEvent.change(searchField, { target: { value: 'Steve Jobs' } });

    fireEvent.click(buttonElement);
    debug();
  });
});
