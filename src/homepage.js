import { useEffect, useState } from "react";
import BlogList from './bloglist';
import PokeHome from './PokeHome'

const Home = () => {
    // const [blogs, setBlogs] = useState([
    //     {title: "Initial", body: "Site release by me", author: "Me", id: "1"},
    //     {title: "Initial", body: "Site release by me", author: "Notme", id: "2"},
    //     {title: "Initial", body: "Site release by me", author: "Me", id: "3"},

    // ])

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    return (
    <div className="home">
        {/* <BlogList blogs={blogs} handleDelete={handleDelete}/> */}
        <PokeHome />

        {/* <BlogList blogs={blogs.filter((blogs) => blogs.author === 'Notme')} title="Blogs by not me" handleDelete={handleDelete}/> */}



    </div>  );
}
 
export default Home;<div className="home">
</div>