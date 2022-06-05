import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axiosFetch from './useFetch'

const PokeHome = (props) => {
    const numbers = Array.from({length: 9}, () => Math.floor(Math.random() * 880));
    const [rpoke, setrpoke] = useState([])
    const randompoke = [];
    const backgrounds = props.backgrounds
    const defaultBackground = props.defaultBackground

    useEffect(() => {
        const randompokemons = async() => {
            for (const p of numbers) {
                const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${p}`).then(data => data.json());
                randompoke.push(poke)
            }
            setrpoke(randompoke)
        }
        randompokemons()
        .catch(console.error)
    },[])
    
    return ( 
        <div className="pokemonpage">
            {rpoke.map((pokemon => {
                return <div className="poke-preview" style={{backgroundImage: `linear-gradient(${backgrounds[pokemon.types[0].type.name]}, white)` || defaultBackground }}>
                <Link to={`/pokemon/${pokemon.id}`}>

                    <div className="pokename">
                        <p className="pokename">{pokemon.id}</p>
                        <p className="pokename">{pokemon.name}</p>
                    </div>
                    <div className="img-container">
                        <img src={pokemon.sprites.other["official-artwork"].front_default} width="100%"alt="" />
                        
                    </div>
                </Link>
                </div>
            }))}
        </div>
     );
}
 
export default PokeHome;