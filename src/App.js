import Navbar from './components/Navbar';

/* default style sheet */
import './App.css';

/* main style sheet */
import './style/style.css';
import HomeSlider from './components/HomeSlider/HomeSlider';
import ProductsCards from './components/ProductsCards/ProductsCards';
import Banner from './components/HomeSlider/Banner';

function App() {
  return (
    <div className="App">
      <Navbar />
     <Banner></Banner>
      <ProductsCards></ProductsCards>
    </div>
  );
}

export default App;
