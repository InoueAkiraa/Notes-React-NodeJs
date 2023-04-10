import {FiPlus, FiSearch, FiServer} from 'react-icons/fi';
import {Container, Brand, Menu, Search, Content, NewNote} from "./styles";

import {Header} from "../../components/Header";
import {Input} from "../../components/Input";
import {Note} from "../../components/Note";
import {Section} from "../../components/Section";
import {ButtonText} from "../../components/ButtonText";

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>Bloco de Notas</h1>
            </Brand>

            <Header/>
            
            <Menu>
              <li><ButtonText title="Todos" isActive/></li>
              <li><ButtonText title="React"/></li>
              <li><ButtonText title="Node"/></li>
            </Menu>

            <Search>
              <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
            </Search>

            <Content>
              <Section title="Minhas Notas">
                <Note data={{
                  title: 'React', 
                  tags: [
                    {id: '1', name: 'react'}
                  ]
                }}
                />
              </Section>
            </Content>
            <NewNote>
              <FiPlus/>
              Criar Nota
            </NewNote>
        </Container>
    );
}