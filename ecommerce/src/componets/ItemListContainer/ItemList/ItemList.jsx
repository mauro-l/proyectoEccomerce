
//import Card from "../../../componets/Cards/Card"
import Card from "/src/componets/Cards/Card"

const ItemList = ({products}) => {
  return (
    <div className="flex flex-wrap justify-center">
        {products.map(prod => <Card key={prod.id} id={prod.id} img={prod.img} name={prod.name} price={prod.price} />)}
    </div>
  )
}

export default ItemList