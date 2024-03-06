import { useEffect, useState } from "react"
import { getProductsbyId } from "../../asyncMock";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  const [product, setProducts] = useState(null);
  const { productId } = useParams();

  useEffect(()=>{
    getProductsbyId(productId)
    .then((res)=>{setProducts(res)})
    .catch((err)=>console.log('error: ', err))
  }, [productId])


  return (
    <div>
      <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer