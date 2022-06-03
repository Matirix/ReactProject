import { useEffect, useState } from "react";
import BlogList from './bloglist';
import PokeHome from './PokeHome'

const Home = () => {
    const [currentinput, setInput] = useState(1);

    return (
    <div className="home">
        <label htmlFor="search">Search Pokemon Here!</label>
        <input type="text" id="textsearch" onChange={(e) => setInput(e.target.value)}/>
        <PokeHome currentinput={parseInt(currentinput)}/>
    </div>  );
}
 
export default Home;<div className="home">
</div>