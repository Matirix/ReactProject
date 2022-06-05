import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

const PokeDetails = () => {
    const { pid } = useParams()
    async function fetchPokemon() {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pid}`)
        return res.json()
    }
    
    const {isLoading, error, data} = useQuery("pokemon", fetchPokemon)
    console.log(data)

    if (error) return <h1> Error {error.message}, try again!</h1>

    if (isLoading) return <h1> Loading </h1>

    const abilities = data.abilities
    const types = data.types
    const stats = data.stats

    
    return ( 
        <div className="pokemon-details">
            <div className="right">
                <h5>#{data.id} - {data.name}</h5>
                <div className="types">
                    {types.map((types) => (
                        <p className="specifictype" key={types.type.name}>{types.type.name}</p>
                    ))}
                </div>

                <div className="img-container">
                    <img src={data.sprites.other["official-artwork"].front_default} width="100%" alt="" />
                </div>
            </div>

            <div className="left">
            {stats.map((stats) => (
                <div className="basestats" key={stats.stat.name}>
                    <p>{stats.stat.name}</p>
                    <progress value={stats.base_stat} max="255"></progress>
                </div>
            ))}
            </div>
            <div className="moreinfobutton">
                <h4 className="hoverhere">More info</h4>
            <div className="moreinfocontent pokemon-details">
                <div className="left">
                <h5>Abilities:</h5>
                {abilities.map((abilities) => (<p className="abilities">
                {abilities.ability.name}
                </p>))}
                </div>
                <div className="right">
                    <h5>Physical Stats</h5>
                    <p className="height">Height: {data.height}</p>
                    <p className="weight">Weight: {data.weight}</p>
                </div>
                

                </div>
            
            </div>





        </div>
     );
}
 
export default PokeDetails;