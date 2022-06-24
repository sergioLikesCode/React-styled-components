import styled from 'styled-components';

export const Footer = styled.footer`
  height: 7rem;
  width: 100%;
  box-shadow: -1px -1px 1px #0000001e;
  nav {
    display: flex;
    height: 100%;
    align-items: center;
    a {
      font-size: 2rem;
      color: #000;
      text-decoration: none;
    }
  }
  p {
    color: #a5a5a5;
    font-size: 0.8rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80vw;
  margin: 0 auto;
  height: 100%;
  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: space-around;
    nav {
      align-items: flex-start;
      height: auto;
    }
  }
`;
