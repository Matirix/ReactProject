// import useFetch from './useFetch'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axiosFetch from './useFetch'

const PokeHome = (currentinput) => {
    const numbers = Array.from({length: 9}, () => Math.floor(Math.random() * 880));
    const [pokemon, setPokemon] = useState('https://pokeapi.co/api/v2/pokemon/1');
    const [rpoke, setrpoke] = useState([])
    const pokeinput = currentinput.currentinput
    const randompoke = [];
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


    // useEffect(() =>{
    //     const fetchData = async() => {
    //         // const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${x}`).then(data => data.json())
    //         // console.log(data)
    //     }
    //     fetchData()
    //     .catch(console.error)
    // }, [currentinput])
    // const x = rpoke.map(poke => console.log(poke))
    
    console.log(rpoke)
    return ( 
        <div className="pokemonpage">
            {rpoke.map((pokemon => {
                return <div className="poke-preview" key = {pokemon.id}>
                    <div className="pokename">
                        <p className="pokename">{pokemon.id}</p>
                        <p className="pokename">{pokemon.name}</p>
                    </div>
                    <div className="img-container">
                        <img src={pokemon.sprites.other["official-artwork"].front_default} width="100%"alt="" />
                        
                    </div>

                </div>
            }))}
        </div>
     );
}
 
export default PokeHome;