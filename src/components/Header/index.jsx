import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header(){
    return(
        <Container>
            <Profile>
                <img 
                    src="https://github.com/InoueAkiraa.png"
                    alt="Foto do Usuário"
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Renato Akira</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}