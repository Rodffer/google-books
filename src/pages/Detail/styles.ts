import styled from 'styled-components';
import media from 'styled-media-query';

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
`;

export const BookDetail = styled.div`
  margin-top: 64px;

  header {
    display: flex;
    align-items: center;

    ${media.lessThan('medium')`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      margin-top: 8px;
      margin-bottom: 8px;
        `}

    h1 {
      font-size: 36px;
      color: var(--white);
      border-bottom: 5px solid var(--orange);
      border-bottom-right-radius: 5px;
      margin-bottom: 16px;
    }

    img {
      margin-top: 32px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      border-bottom: 5px groove var(--orange);

      ${media.lessThan('medium')`
      margin-top: 8px;
      margin-bottom: 16px;
        `}
    }

    div {
      margin-left: 24px;

      p {
        text-align: left;
        font-size: 18px;
        color: var(--white);
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    ${media.lessThan('medium')`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: left;
      align-items: left;
    `}

    li {
      ${media.lessThan('medium')`
      margin-left: 32px;
    `}
      & + li {
        margin-left: 80px;

        ${media.lessThan('medium')`
         margin-left: 32px;
        `}
      }

      strong {
        display: block;
        font-size: 22px;
        color: var(--white);
      }
      span {
        font-weight: bold;
        display: block;
        margin-top: 4px;
        margin-bottom: 4px;
        color: var(--orange);
      }

      a {
        :link {
          font-size: 1em;
          font-weight: bold;
          text-decoration: none;
          color: var(--white);
        }

        :visited {
          color: var(--white);
          text-decoration: none;
        }

        :hover {
          color: var(--orange);
        }
      }
    }
  }
`;
export const ButtonBack = styled.h1`
  cursor: pointer;

  font-size: 16px;
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
`;
