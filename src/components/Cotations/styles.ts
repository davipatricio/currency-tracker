import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;

  max-width: 1200px;
  width: 100%;

  > h1 {
    font-size: 3rem;
    font-weight: bold;
  }

  .cotationList {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;

    gap: 1.25rem;

    @media (max-width: 560px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const Divider = styled.div`
  background-color: #ccc;

  height: 1px;
  width: 100%;
`;
