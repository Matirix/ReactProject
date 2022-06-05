import PokeHome from './PokeHome'
import Pokesearch from "./pokesearch";

const Home = () => {
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

    return (
    <div className="home">
        <Pokesearch backgrounds={backgrounds} defaultBackground={defaultBackground}/>
        <PokeHome backgrounds={backgrounds} defaultBackground={defaultBackground} />
    </div>  );
}
 
export default Home;<div className="home">
</div>