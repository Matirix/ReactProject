// import useFetch from './useFetch'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axiosFetch from './useFetch'

const PokeHome = (currentinput) => {
    const numbers = Array.from({length: 9}, () => Math.floor(Math.random() * 880));
    const [pokemon, setPokemon] = useState('https://pokeapi.co/api/v2/pokemon/1');
    console.log(currentinput)

    useEffect(() =>{
        const fetchData = async() => {
            console.log(currentinput)
            const x = currentinput
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${x}`)
            const json = await data.json()
            console.log(json)
        }
        fetchData()
        .catch(console.error)
    }, [currentinput])
    // const fetchData = async() => {
    //     const data = await fetch(`https://pokeapi.co/api/v2/pokemon/` + {currentinput})
    //     const json = await data.json()
    //     console.log(currentinput)
    //     console.log(json)
    // }
    // fetchData()
    // .catch(console.error)





    return ( 
        <div className="pokemon">
            {/* <Link to={`pokemon/${pokemon.id}`}> */}
                <p>{pokemon.id} {pokemon.name}</p> 
                {/* <img src={`${image}`} alt="" className="img_cont" /> */}
            {/* </Link> */}
        </div>
     );
}
 
export default PokeHome;