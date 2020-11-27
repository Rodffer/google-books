import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  color: var(--white);
  max-width: 450px;
  line-height: 56px;
`;

export const Container = styled.div`
  margin-top: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    color: var(--white);
    transition: 0.2s;

    &:hover {
      color: var(--orange);
    }

    svg {
      margin-right: 8px;
    }
  }
`;
