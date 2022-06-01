import { useEffect, useState } from "react";
import BlogList from './bloglist';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "Initial", body: "Site release by me", author: "Me", id: "1"},
        {title: "Initial", body: "Site release by me", author: "Notme", id: "2"},
        {title: "Initial", body: "Site release by me", author: "Me", id: "3"},

    ]);

    const [pokemon, newpokemon] = useState([]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("This function runs when x state is changed")
        fetch('https://pokeapi.co/api/v2/pokemon/1')
        .then(res => {
            return res.json();
        })
        .then(data => {
            newpokemon(data.name)
        })
    }, [])


    console.log(pokemon)

    return (
    <div className="home">
        <BlogList blogs={blogs} title={pokemon} handleDelete={handleDelete}/>
        <BlogList blogs={blogs.filter((blogs) => blogs.author === 'Notme')} title="Blogs by not me" handleDelete={handleDelete}/>



    </div>  );
}
 
export default Home;<div className="home">
</div>