/* import { useEffect, useState } from "react"
import Card from '../Cards/Card'

const ItemDetailContainer = () => {

    const [product, setProducts] = useState([]);

    //api sector2810 mangas
    
    fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=57113380`)
    //api yenny ateneo libros
    
    
    useEffect(()=>{
      fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=186616505`)
      .then((res)=>res.json())
      .then((data)=>setProducts(data.results))
      .catch((err)=>console.log(err))
    },[])

    console.log(product)

    return (
      <div className="flex flex-wrap p-8">
        {product.map((prod)=>{
            let url = `https://http2.mlstatic.com/D_NQ_NP_${prod.thumbnail_id}-O.webp`;

            return(
              <Card key={prod.id} id={prod.id} img={url} name={prod.title} price={prod.price} />
            )
        })}
      </div>
    )
}

export default ItemDetailContainer */