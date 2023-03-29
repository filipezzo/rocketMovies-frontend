

import { Container, Content, Title } from "./styles"
import { Header } from '../../components/Header'
import { AiOutlinePlus } from "react-icons/ai"
import { Note } from '../../components/Note'
import { Button } from '../../components/Button'


export function Home() {
  return (
    <Container>
      <Header className="heada" />
      <main>
        <Content>
          <Title>
            <h1>My Movies</h1>
            <Button
              title="Add Movie" icon={AiOutlinePlus} />
          </Title>

          <Note data={
            {
              title: 'Interstellar',
              desc: 'Interstellar is a 2014 science-fiction movie about a team of astronauts, led by Cooper , who travel through a wormhole to find a new home for humanity. The movie explores themes such as love, time, sacrifice, and the limits of human knowledge.',
              tags: [
                { id: '1', name: 'action' },
                { id: '2', name: 'suspense' },
              ]
            }
          } />

          <Note data={
            {
              title: 'Interstellar',
              desc: 'Interstellar is a 2014 science-fiction movie about a team of astronauts, led by Cooper , who travel through a wormhole to find a new home for humanity. The movie explores themes such as love, time, sacrifice, and the limits of human knowledge.',
              tags: [
                { id: '1', name: 'action' },
                { id: '2', name: 'suspense' },
              ]
            }
          } />

          <Note data={
            {
              title: 'Interstellar',
              desc: 'Interstellar is a 2014 science-fiction movie about a team of astronauts, led by Cooper , who travel through a wormhole to find a new home for humanity. The movie explores themes such as love, time, sacrifice, and the limits of human knowledge.',
              tags: [
                { id: '1', name: 'action' },
                { id: '2', name: 'suspense' },
              ]
            }
          } />
        </Content>
      </main>
    </Container>
  )
}