import React from 'react'
import * as S from './styles';
import FilmeCard from '../../components/FilmeCard';

const index = () => {
  return (
   <S.Container>
     <S.Section>
       <FilmeCard/>
       <FilmeCard/>
       <FilmeCard/>
       <FilmeCard/>
       <FilmeCard/>
       <FilmeCard/>
       <FilmeCard/>
     </S.Section>
   </S.Container>
  )
}

export default index