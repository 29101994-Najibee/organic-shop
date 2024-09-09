
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router , Route ,Routes} from 'react-router-dom'
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import Navbar from './components/navbar/Navbar';
import { ShopContextProvider } from './context/ShopContext';
import Welcome from './components/welcome'

function App() {
  return (
    <div className="App">
     < ShopContextProvider >
      <Router>
        <Navbar />
         <Welcome />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
