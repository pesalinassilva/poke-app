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
        <div className="container-fluid text-center w-50">
            <h1 className="pt-4">Selecciona un pokemon: </h1>
            <select className="form-select mb-2" aria-label="Default select example" value={pokemonSelect} onChange={updateSelect}>
                    <option defaultValue={null}>Pokemones</option>
                    {pokemones.map((pokemon) => (
                        <option key={`${pokemon.id}`} value={`${pokemon.name}`}>{pokemon.name}</option>
                    ))
                }
            </select>
            <button type="button" className="btn btn-primary" onClick={detallePokemon}>Ver Detalle</button>
        </div>
    )
}

export default Pokemones