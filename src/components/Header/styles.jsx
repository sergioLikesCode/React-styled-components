import styled from 'styled-components';

export const Header = styled.header`
  /* height: 4rem; */
  width: 100%;
  background-color: #ffffff;
  box-shadow: 1px 1px 1px #00000016;
  position: fixed;
  top: 0;
  transition: .3s;
  @media (max-width: 500px) {
    height: 7rem;
    nav {
      flex-direction: column;
    justify-content: space-around !important;

    }
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    ul {
      display: flex;
      li {
        list-style: none;
      }
    }
  }
`;

export const Container = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  height: 100%;
`;

export const Link = styled.a`
  font-size: 1rem;
  color: ${({ active }) => (active ? 'white' : 'black')};
  padding: 0.5rem;
  text-decoration: none;
  background-color: ${({ active }) => (active ? '#2279EB' : 'transparent')};
`;

export const LogoLink = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 2rem;
`;
