import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom'
export function Signin() {
  return (
    <Container>
      <Form className="login">
        <h1>RocketMovies</h1>
        <p>App for tracking everything you watch</p>
        <h2>Do your login</h2>
        <div className="inputs">
          <Input
            placeholder="Email"
            className="myInput"
            type="text"
            icon={FiMail}

          />

          <Input
            placeholder="Password"
            className="myInput"
            type="password"
            icon={FiLock}
          />

          <Button title="Enter" />
        </div>

        <Link to="/register">
          Create Account
        </Link>

      </Form>

      <Background />


    </Container>
  )
}