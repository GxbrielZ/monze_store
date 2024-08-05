import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import { CartProvider } from './components/Cart/CartContext';
import { FavsProvider } from './components/Favourites/FavsContext';

const App: React.FC = () => {
  return (
    <CartProvider>
      <FavsProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </FavsProvider>
    </CartProvider>
  );
}

export default App;
