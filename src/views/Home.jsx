import PokeContext from "../context/PokeContext"
import { useContext, useState, useEffect } from "react"


const Home = () => {
    const { pokemones } = useContext(PokeContext)
    const [pikachu, setPikachu] = useState(null)

    useEffect(() => {
        const pokemonPikachu = pokemones.find((pokemon) => pokemon.name == 'pikachu')
        setPikachu(pokemonPikachu)
    },[pokemones])
    
        return (
        <>
            <h1>Bienvenido a Maestro pokemon!</h1>
            {pikachu && (
                <img src={`${pikachu.sprites.other["official-artwork"].front_default}`} className="img-fluid rounded-start" alt={`${pikachu.name}`}/>
            )}
        </>
    )
}

export default Home