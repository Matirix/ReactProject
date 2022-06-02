import useFetch from './useFetch'

const PokeHome = () => {
    const {error, status, data: pokemon} = useFetch('https://pokeapi.co/api/v2/pokemon/ditto')
    console.log(pokemon.name)
    return ( 
        <div className="pokemon">
            <p>{pokemon.name}</p>
        </div>
     );
}
 
export default PokeHome;