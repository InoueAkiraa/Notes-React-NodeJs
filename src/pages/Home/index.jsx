import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import {Header} from "../../components/Header";

export function Home(){
    return(
        <Contaner>
            <Brand>
                <h1>Rocket Notes</h1>
            </Brand>

            <Header/>
            
            <Menu>
            
            </Menu>

            <Search>

            </Search>

            <Content>

            </Content>

            <NewNote>

            </NewNote>
        </Contaner>
    );
}