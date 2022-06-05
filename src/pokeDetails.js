import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const PokeDetails = () => {
    const { pid } = useParams()
    // gradient
    const backgrounds = {
        fire: '#F08030',
        bug: '#A8A878',
        poison: '#A040A0',
        water: "#6890F0",
        grass: "#78C850",
        normal: "#A8A878",
        electric: "#F8D030",
        ground: "#E0C068",
        fairy: "#EE99AC",
        fighting: "#C03028",
        psychic: "#F85888",
        rock: "#B8A038",
        ghost: "#705898",
        ice: "#98D8D8",
        dragon: "#7038F8",
        dark: "#705746",
        steel: "#B7B7CE",
        flying: "A98FF3"
    }
    const defaultBackground = 'white';
    //Fetch the pokemon
    async function fetchPokemon() {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pid}`)
        return res.json()
    }
    // React Query
    const {isLoading, error, data} = useQuery("pokemon", fetchPokemon)
    console.log(data)
    // For Error
    if (error) return <h1> Error {error.message}, try again!</h1>
    // For Loading
    if (isLoading) return <h1> Loading </h1>

    const abilities = data.abilities
    const types = data.types
    const stats = data.stats

    const handleClick = () => {
        console.log("Hello")
        // if ( document.getElementById("show").classList.contains('displaycontent') )
            document.getElementById("show").classList.toggle('displaycontent');
        // else
        // document.getElementById("show").style.visibility = "visible";
    }

    
    return ( 
        <div className="pokemon-details" style={{backgroundImage: `linear-gradient(${backgrounds[data.types[0].type.name]}, white)` || defaultBackground }}>
            <div className="right">
                <h4>#{data.id} - {data.name}</h4>
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
            <div className="">
                <button className="hoverhere" onClick={handleClick}>More info</button>
                {/* <h4 className="hoverhere">More info</h4> */}
            <div id="show" className="moreinfocontent pokemon-details displaycontent" style={{backgroundImage: `linear-gradient(${backgrounds[data.types[0].type.name]}, white)` || defaultBackground }}>
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