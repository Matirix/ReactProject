import { useState, useEffect, useRef} from "react";
import { Link } from 'react-router-dom';


const Pokesearch = (props) => {
    const [currentinput, setInput] = useState(null);
    const [pokemon, setpokemon] = useState(null);
    const poketext = useRef(null);
    const backgrounds = props.backgrounds
    const defaultBackground = props.defaultBackground


    useEffect(() => {
        const pokeinput = async() => {  
            console.log(currentinput)
            const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${currentinput}`).then(data => data.json());
            setpokemon(poke)
        }
        pokeinput()
        .catch(`RUH ROH`)

    }, [currentinput])


    const pokeSubmit = () => {
        (!poketext.current.value.length) ? setInput(1) : setInput(poketext.current.value)
    }
    // onChange={(e) => setInput(e.target.value)}
    return ( 
        <div className="pokesearch">
            <div className="pokemonfield">
                <label htmlFor="search">Search Pokemon Here!</label>
                <input ref={poketext} type="text" id="textsearch"/>
                <button onClick={pokeSubmit} className="pokesubmit">Search!</button>
            </div>
            <div className="pokemonpage">
            {pokemon && <div className="poke-preview" style={{backgroundImage: `linear-gradient(${backgrounds[pokemon.types[0].type.name]}, white)` || defaultBackground }}>
                <Link to={`/pokemon/${pokemon.id}`}>
                        <div className="pokename">
                        <p className="pokename">{pokemon.id}</p>
                        <p className="pokename">{pokemon.name}</p>
                    </div>
                    <div className="img-container">
                        <img src={pokemon.sprites.other["official-artwork"].front_default} width="100%" alt="" />
                    </div>
                </Link>
            </div>}

            </div>

    
        </div>
     );
}
 
export default Pokesearch;