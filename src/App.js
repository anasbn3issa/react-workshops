import './App.css';
import Product from './components/Product';
import products from './products.json'

function App() {
  const menu = (<div>
    <ul id="nav">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">FAQ</a></li>
    <li><a href="#">Contact</a></li>
    </ul>
    </div>
    );
      return (
        <div>
          {menu}
          <div>[Page content h
            ere]</div>
          <div className="App">
            {
              products.map((produit,index) => {
              return (<Product product={produit} key={index} />)
            })
            }
          </div>
        </div>
      );
}

export default App;
