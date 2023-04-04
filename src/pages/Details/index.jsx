import {Container, Links, Content} from './styles';
 
import { Tag } from '../../components/Tag';

import { Button } from '../../components/Button';

import { Header } from '../../components/Header';

import { Section } from '../../components/Section';

import { ButtonText } from '../../components/ButtonText';


export function Details(){
  
  return(
    <Container>
      <Header />
      
      <main>
        <Content>        
          <ButtonText title="Excluir Nota"/>
          
          <h1>Introdução ao React</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nulla nisi quam expedita
             earum. Harum, voluptatum. Itaque saepe fugit numquam dicta alias, assumenda atque a nemo,
              amet maxime ipsum quam!</p>

          <Section title= "Links úteis">
            <Links>
              <li><a href="https://github.com/InoueAkiraa">https://github.com/InoueAkiraa.com</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express"/> 
            <Tag title="Node"/>
          </Section>
          
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
    
  )
}