import { useContext, useEffect } from "react"
import PokeContext from "../context/PokeContext"
import { useParams } from "react-router-dom"


const DetallePokemon = () => {
    const { pokemones, pokeDetalle, updateDetalle } = useContext(PokeContext)
    const { name } = useParams()

    useEffect(() => {
        const pokemonConsultado = pokemones.find((pokemon) => pokemon.name === name)
        updateDetalle(pokemonConsultado)
    }, [name, pokemones])

    const nombreMayus = (nombre) => {
        let primeraLetra = nombre.charAt(0).toUpperCase()
        let resto = nombre.slice(1)
        let nombreFinal = primeraLetra + resto
        return nombreFinal
    }

    return (
        <>
            {pokeDetalle &&
                <div className="card mb-3" style={{maxWidth: '540px'}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`${pokeDetalle.sprites.other["official-artwork"].front_default}`} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{nombreMayus(pokeDetalle.name)}</h5>
                                <ul>
                                    {pokeDetalle.stats.map((stat) => (
                                        <li key={stat.stat.name} className="card-text">
                                            {`${stat.stat.name}: ${stat.base_stat}`}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {pokeDetalle.types.map((type) => (
                                <h4 key={type.type.name} className="card-text"> {`${type.type.name}`} </h4>
                            ))}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default DetallePokemon