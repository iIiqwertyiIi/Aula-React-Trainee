import {
    Container
} from './styles'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <Container>
            <Link to='/'><img src={Logo} alt='logo' /></Link>
            <Link to='/'>Home</Link>
            <Link to='/categories'>Categorias</Link>
            <Link to='/games'>Games</Link>
        </Container>
    )
}

export default Header
