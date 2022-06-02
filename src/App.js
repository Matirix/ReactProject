import Navbar from './navbar'
import Home from './homepage'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  const title = 'Welcome to my new blog';

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>


      </div>
    </div>
  );
}

export default App;
