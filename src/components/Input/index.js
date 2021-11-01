import { useState } from "react";
import { Container } from "./styles";

const Input = ({addCategory}) => {

    const [input, setInput] = useState('');

    return (
        <Container>
            <input onChange={setInput} placeholder='Digite o nome da categoria' />
            <button onClick={() => addCategory(input.target.value)}>Adicionar</button>
        </Container>
    );
}

export default Input