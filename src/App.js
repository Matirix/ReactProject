import Navbar from './navbar'
import Home from './homepage'

function App() {
  const title = 'Welcome to my new blog';

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
