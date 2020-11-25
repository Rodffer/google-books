import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 8px;

  nav {
    a {
      color: var(--white);
      text-decoration: none;
      font-size: 16px;
      transition: opacity 0.2s;

      & + a {
        margin-left: 32px;
      }

      &:hover {
        color: var(--orange);
      }
    }
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: var(--white);

  &.is-active {
    color: var(--orange);
    padding-bottom: 8px;
  }
`;
