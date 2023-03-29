import { Container } from "./styles";
import { Header } from "../../components/Header";
import { FiArrowLeft, FiStar, FiClock } from "react-icons/fi";
import { Tag } from '../../components/Tag';

export function Movie() {
  return (

    <Container>
      <Header />
      <main>
        <a href="/">
          <FiArrowLeft />
          back</a>
        <div className="aboutit">
          <h1>Interstellar</h1>
          <span>
            <FiStar size={18} />
            <FiStar size={18} />
            <FiStar size={18} />
            <FiStar size={18} />
            <FiStar size={18} />
          </span>
        </div>

        <div className="author">
          <img src="https://xesque.rocketseat.dev/users/avatar/profile-ce0cbed9-328a-4a51-8b5c-415f23aef1d9-1677094991226.jpg" alt="user profile pic" />
          <span className="authorName">by Filipe Avanzzo</span>
          <span className="authorTime">
            <FiClock size={12} />
            29/03/2023 at 9am</span>
        </div>
        <Tag title="Drama" />
        <Tag title="Action" />
        <Tag title="Family" />

        <p>Crop plagues caused human civilization to regress to an agrarian society in the future of unknown date. Cooper, a former NASA pilot, has a farm with his family. Murphy, Cooper's ten-year-old daughter, believes her room is haunted by a ghost trying to communicate with her. Father and daughter discover that the "ghost" is an unknown intelligence that is sending coded messages through gravitational radiation, leaving binary coordinates that lead them to a secret NASA facility led by Professor John Brand. The scientist reveals that a wormhole was opened near Saturn and that it leads to planets that can offer survival conditions for the human species. The "Lazarus missions" sent years earlier identified three potentially habitable planets orbiting the black hole Gargantua: Miller, Edmunds and Mann - named after the astronauts who surveyed them. Brand recruits Cooper to pilot the Endurance spacecraft and retrieve astronaut data; if one of the planets turns out to be habitable, humanity will head to it at the NASA facility, which is actually a huge space station. Cooper's departure devastates Murphy.

          In addition to Cooper, the Endurance crew is made up of biologist Amelia, Brand's daughter; the scientist Romilly, the planetary physicist Doyle, in addition to the TARS and CASE robots. They enter the wormhole and head to Miller, but discover that the planet has enormous gravitational time dilation because it is so close to Gargantua: each hour on the surface is equivalent to seven years on Earth. They enter Miller and find it inhospitable as it is covered by a shallow ocean and churned up by huge waves. A wave hits the crew as Amelia tries to retrieve Miller's data, killing Doyle and delaying the match. Upon returning to the Endurance, Cooper and Amelia discover that 23 years have passed.</p>
      </main>
    </Container>

  )
}