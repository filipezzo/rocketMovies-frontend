import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Container, Form, Avatar } from './styles'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
          <span>Back</span>
        </Link>
      </header>
      <Form>
        <Avatar>
          <img src="https://github.com/filipezzo.png"
            alt="user pic"
          />

          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>

        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="Email"
          type="email"
          icon={FiMail}
        />

        <Input
          placeholder="password"
          type="password"
          icon={FiLock}
        />

        <Input
          placeholder="new password"
          type="password"
          icon={FiLock}
        />
        <Button title="Save" />
      </Form>
    </Container>


  )
}