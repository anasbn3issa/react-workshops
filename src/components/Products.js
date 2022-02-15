 

import products from '../products.json';
import Product from './Product';
 export default function Products() {

return (
    
        products.map((produit,index) => {
        return (<Product product={produit} key={index} />)
      }) 
      
)


 }