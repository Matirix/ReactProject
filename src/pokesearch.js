import { useState, useEffect, useRef} from "react";

const Pokesearch = () => {
    const [currentinput, setInput] = useState(null);
    const [pokemon, setpokemon] = useState(null);
    const poketext = useRef(null);


    useEffect(() => {
        const pokeinput = async() => {  
            console.log(currentinput)
            const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${currentinput}`).then(data => data.json());
            setpokemon(poke)
            console.log(pokemon)
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
            {pokemon && <div className="poke-preview">
                    <div className="pokename">
                        <p className="pokename">{pokemon.id}</p>
                        <p className="pokename">{pokemon.name}</p>
                    </div>
                    <div className="img-container">
                        <img src={pokemon.sprites.other["official-artwork"].front_default} width="100%" alt="" />
                    </div>
            </div>}

            </div>

    
        </div>
     );
}
 
export default Pokesearch;