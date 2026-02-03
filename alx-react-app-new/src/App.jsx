import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';
import UserContext from './UserContext';
function App() {
  const user = { name: "Ganiyu", age: 20, bio: "Learning React step by step!" };

  return (
    <UserContext.Provider value={user}>
      <Router>
        <div>
          <Header />
          <nav style={{ textAlign: 'center', margin: '20px' }}>
            <Link to="/" style={{ margin: '10px' }}>Home</Link>
            <Link to="/about" style={{ margin: '10px' }}>About</Link>
            <Link to="/contact" style={{ margin: '10px' }}>Contact</Link>
            <Link to="/counter" style={{ margin: '10px' }}>Counter</Link>
            <Link to="/profile" style={{ margin: '10px' }}>Profile</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
