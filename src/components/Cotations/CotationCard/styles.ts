import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 15px;

  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #202025;

  min-width: 260px;
  max-width: 600px;
  width: 100%;

  svg {
    margin-right: 10px;
    height: 48px;
    width: 48px;
  }

  > div {
    > p {
      font-size: 2rem;
      font-weight: bold;
    }

    > span {
      color: #f0f8ff;
      font-size: 1.8rem;
    }
  }
`;
