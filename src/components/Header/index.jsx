import { Container } from "./styles";
import { Brand, Profile } from "./styles";

import { Input } from '../../components/Input'
export function Header({ className, ...rest }) {
  return (
    <Container {...rest}>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>
      <Input placeholder="search movie by name" />
      <Profile>
        <div>
          <strong>Filipe </strong>
          <span>sair</span>
        </div>
        <img src="https://xesque.rocketseat.dev/users/avatar/profile-ce0cbed9-328a-4a51-8b5c-415f23aef1d9-1677094991226.jpg" alt="user profile pic" />
      </Profile>
    </Container>
  )
}