import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 350px;
  flex: 1;
  min-width: 300px;
  margin: 1rem 0;
  padding: 0 1rem;
  border-radius: 5px;
  align-items: center;
  img {
    border-radius: 5px;
    max-width: 100%;
  }
  h2 {
    font-size: 1.3rem;
    margin: 1rem 0;
  }
  a {
    display: block;
    text-decoration: none;
    color: #000;
    padding: 0.5rem 1rem;
    border: 1px solid #000;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
  p {
    color: #a5a5a5;
    text-align: center;
    font-size: 0.8rem;
  }
`;
