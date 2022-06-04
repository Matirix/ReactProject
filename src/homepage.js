import { useEffect, useState } from "react";
import BlogList from './bloglist';
import PokeHome from './PokeHome'
import Pokesearch from "./pokesearch";

const Home = () => {
    const [currentinput, setInput] = useState(1);

    return (
    <div className="home">
        <label htmlFor="search">Search Pokemon Here!</label>
        <input type="text" id="textsearch" onChange={(e) => setInput(e.target.value)}/>
        <Pokesearch currentinput={parseInt(currentinput)}/>
        <hr></hr>
        <PokeHome/>
    </div>  );
}
 
export default Home;<div className="home">
</div>