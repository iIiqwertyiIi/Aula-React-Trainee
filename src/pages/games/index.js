import Game from "../../components/Games";
import { api } from "../../services/api";
import { useEffect, useState } from 'react';

const GamesPage = () => {

    const [games, setGames] = useState([])

    useEffect(() => {
      fetchGames()
    }, [])

    const fetchGames = async () => {
      const response = await api.get('/games/index')
      setGames(response.data)
    }


    return (
        <Game games={games} />
    );
}

export default GamesPage