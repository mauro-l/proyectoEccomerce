
//import Card from "../../../componets/Cards/Card"
import Card from "/src/componets/Cards/Card"

const ItemList = ({products}) => {
  console.log('acaaaaassf')
  return (
    <div className="flex flex-wrap justify-center">
        {products.map(prod =>{
          let url = `https://http2.mlstatic.com/D_NQ_NP_${prod.thumbnail_id}-O.webp`;
          return(
            <Card key={prod.id} id={prod.id} img={prod.img} imgML={`${url}`} category={prod.category} name={prod.name} title={prod.title} price={prod.price} />)}

          )
        } 
    </div>
  )
}

export default ItemList