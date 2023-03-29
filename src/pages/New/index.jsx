import { Container, Form } from "./styles";
import { Header } from '../../components/Header'
import { Input } from "../../components/Input";
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'
export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>New Movie</h1>
          </header>
          <div class="inputs">
            <Input
              placeholder='Title'
              type="text"
            />
            <Input
              placeholder='Rate (0 to 5 stars)'
              type="text"
            />
          </div>
          <Textarea placeholder="comments" />


          <div class="sec">
            <h2>Markers</h2>
            <NoteItem value="react" />
            <NoteItem isNew
              placeholder="new movie"
            />

            <div className="buttons">
              <Button title="Remove Movie"></Button>
              <Button title="Save Changes"></Button>

            </div>

          </div>
        </Form>
      </main>
    </Container>
  )
}