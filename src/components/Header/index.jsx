import React from 'react';
import * as S from './styles';

const index = () => {
  return (
    <S.Header>
      <S.Container>
        <nav>
          <S.LogoLink href="/">LogoMarca</S.LogoLink>
          <ul>
            <li>
              <S.Link href="/home" active>
                Home
              </S.Link>
            </li>
            <li>
              <S.Link href="/sobre">Sobre</S.Link>
            </li>
            <li>
              <S.Link href="/contato">Contato</S.Link>
            </li>
          </ul>
        </nav>
      </S.Container>
    </S.Header>
  );
};

export default index;
