
import Banner from '../Banner/Banner'
import { useEffect, useState } from "react"
//import { getProducts } from "../../asyncMock";
import ItemList from "./ItemList/ItemList";
import Filters from './Filter/Filters';
import { useParams } from 'react-router-dom';
import { getApiProducts } from '../../services/products';

const ItemListContainer2 = ({titulo}) => {

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    
    useEffect(()=>{

      const fetchData = async () => {
        try{
          const product = await getApiProducts(categoryId);
          setProducts(product);
        } catch (error) {console.log(error)}
      }
        /* getProducts()
        .then((res)=>setProducts(res))
        .catch(err => console.log('error al cargar los productos: ', err)) */

        /* console.log(getApiProducts(categoryId)) */
        fetchData();
    }, [categoryId]);

    console.log('item list container: ', products, titulo)

  return (
    <>
        <Banner greeting={"Shop"} />
        <h1 className="text-5xl font-bold text-center pt-8 pb-4">Productos</h1>
        <div className='flex container mx-auto px-8 py-5 pb-10 mb-3'>
          <Filters />
          <ItemList products={products} />
        </div>
    </>

  )
}

export default ItemListContainer2