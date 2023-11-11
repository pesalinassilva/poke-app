import PokeContext from "../context/PokeContext"
import { useContext } from "react"

const Home = () => {
    const { pokemones } = useContext(PokeContext)

    const randomId = () => {
        const idRandom = Math.random();
        const idFinal = Math.floor(idRandom * 20) + 1;
        return idFinal;
    }

    const id = randomId()

    return (
        <>
            <h1>Bienvenido a Maestro pokemon!</h1>
            <img src={`${pokemones[id].sprites.other["official-artwork"].front_default}`} className="img-fluid rounded-start" alt={`${pokemones[id].name}`}/>
        </>
    )
}

export default Home