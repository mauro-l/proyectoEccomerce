
/* api sector2810 mangas
fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=57113380`) */

//import { getProducts } from "../asyncMock";

/* api yenny ateneo libros
fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=186616505`) */

//let apiUrl = 'https://api.mercadolibre.com/sites/MLA/search?seller_id=57113380';

/* export const getApiProducts = (category) => {
    
    if (category === 'comics'){
        //apiUrl = 'https://api.mercadolibre.com/sites/MLA/search?seller_id=57113380';
        fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=186616505`)
        .then((res)=>res.json())
        .then((data)=> {
            const products = data.results;
            console.log(products)
            return(products)
        })
          .catch((err)=>console.log(err))
    }

    if (category === 'funkos'){
        getProducts()
        .then((res)=>{
            const products = res;
            return(products);
        })
        .catch(err => console.log('error al cargar los productos: ', err))
    }
} */