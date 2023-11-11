import { useContext } from "react"
import PokeContext from "../context/PokeContext"
import { useNavigate } from "react-router-dom"

const Pokemones = () => {
    const { pokemones, updateSelect, pokemonSelect } = useContext(PokeContext)
    const navigate = useNavigate()
    const detallePokemon = () => {
        navigate(`/pokemones/${pokemonSelect}`)
    }

    return (
        <>
            <h1>Selecciona un pokemon: </h1>
            <select className="form-select" aria-label="Default select example" value={pokemonSelect} onChange={updateSelect}>
                    <option defaultValue={null}>Pokemones</option>
                    {pokemones.map((pokemon) => (
                        <option key={`${pokemon.id}`} value={`${pokemon.name}`}>{pokemon.name}</option>
                    ))
                }
            </select>
            <button type="button" className="btn btn-primary" onClick={detallePokemon}>Ver Detalle</button>
        </>
    )
}

export default Pokemones