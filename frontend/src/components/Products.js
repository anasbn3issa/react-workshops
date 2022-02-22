 import products from '../products.json';
import { useApi } from "../hooks/useApi";
import Product from "./Product";
export default function Products() {
  const [result, error, query] = useApi(`products`)
  console.log("result:",result)
  return (
    <>
    {
      result ?
      (
        result.map((res,index) => {
          return (<Product product={res} key={index} />)
        })

      )
      : 
      (<h1>no products found</h1>)
    }
    </>
  
) 
    /*products.map((produit,index) => {
      
    return (<Product product={produit} key={index} />)
  })*/
}
