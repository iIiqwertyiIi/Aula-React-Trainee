import GameCard from "../GameCard"
import { Container } from "./styles"

const Game = ({games}) => {
    return (
        <Container>
            {games.map((item, index) => (
                <GameCard key={index} index={index} title={item.title} genre={item.genre} platform={item.platform} photo={item.photo_url} />
            ))}
        </Container>
    )
}

export default Game