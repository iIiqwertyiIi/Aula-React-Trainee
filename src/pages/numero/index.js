import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import GameCard from "../../components/GameCard";
import { api } from "../../services/api";

const Numero = () => {

    let { gameId } = useParams();

    const [game, setGame] = useState({})

    useEffect(() => {
      fetchGame()
    }, [])

    const fetchGame = async () => {
        const response = await api.get(`/games/show/${gameId}`)
        setGame(response.data)
        console.log(response.data)
    }



    return (
        <div>
            <GameCard
                title={game && game.title}
                genre={game && game.genre}
                platform={game && game.platform}
                photo={game && game.photo_url}
            />
        </div>
    );
}

export default Numero