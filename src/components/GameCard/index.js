import {
    Container
} from './styles'

const GameCard = ({title, genre, platform, photo}) => {
    return (
        <Container>
            <img src={`http://localhost:3000${photo}`} alt="perfil" />
            <span>{title}</span>
            <div>
                <span>{genre}</span>
                <span>{platform}</span>
            </div>
        </Container>
    )
}

export default GameCard