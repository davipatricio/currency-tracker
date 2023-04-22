import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-bottom: 1px solid #ccc;

  min-height: 55px;
  width: 100%;

  svg {
    color: greenyellow;
    margin-right: 15px;
    font-size: 3rem;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-size: 2rem;
    transition: color 0.2s;

    &:hover {
      color: #ccc;
    }
  }
`;
