import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Button } from '../../components/Button';

import { Link } from 'react-router-dom';

export function SignUp() {
  return (
    <Container>
      <Form className="login">
        <h1>RocketMovies</h1>
        <p>App for tracking everything you watch</p>
        <h2>Create your account</h2>
        <div className="inputs">
          <Input
            placeholder="Name"
            type="text"
            icon={FiUser}
          />
          <Input
            placeholder="Email"
            type="text"
            icon={FiMail}
          />

          <Input
            placeholder="Password"
            type="password"
            icon={FiLock}
          />


          <Button title="Register" />
        </div>

        <Link to='/'>
          <FiArrowLeft />
          back to login
        </Link>

      </Form>

      <Background />


    </Container>
  )
}