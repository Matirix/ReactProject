import Navbar from './navbar'
import Home from './homepage'
import Footer from './footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PokeDetails from './pokeDetails';

function App() {
  const title = 'Welcome to my new blog';

  return (
    <div className="App">
      <div className="content">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path='/pokemon/:pid' element={<PokeDetails />}></Route>
          </Routes>
          <Footer/>
        </Router>


      </div>
    </div>
  );
}

export default App;
