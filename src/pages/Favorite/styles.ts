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

export const Books = styled.div`
  margin-top: 64px;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.div`
  max-height: 22em;
  max-width: 12em;
  background-color: var(--white);
  border-radius: 6px;
  cursor: pointer;
  margin: 0 0.5em 2em 0.5em;
  position: relative;
  overflow: hidden;

  border-bottom: 5px groove var(--orange);
`;

export const CardImage = styled.div`
  overflow: hidden;
  height: 15em;
  width: 22em;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  img {
    transition: 1s;
  }
  img:hover {
    transform: scale(1.05);
  }
`;

export const CardContentDate = styled.div`
  margin-top: 4px;
  margin-left: 8px;

  max-width: 4ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: none;
  color: var(--secgray);
`;

export const CardContent = styled.div`
  margin-top: 8px;
  padding: 0 8px;
  color: var(--gray);
  text-align: left;

  max-width: 64ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  strong {
  }

  p {
    text-decoration: none;
    color: var(--secgray);
  }
`;

export const Details = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;

  a {
    margin-bottom: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: 0.2s;

    :link {
      font-size: 1em;
      font-weight: bold;
      text-decoration: none;
      color: var(--gray);
    }

    :visited {
      color: var(--gray);
      text-decoration: none;
    }

    &:hover {
      color: var(--orange);
    }
  }

  svg {
    margin-left: 16px;
  }
`;
