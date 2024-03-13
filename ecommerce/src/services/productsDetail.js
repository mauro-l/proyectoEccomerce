
import { getProductsbyId } from "../asyncMock";

export const getApiDetails = async ({typeId, productId }) =>{

    let product = [];

    if(typeId === 'f'){

        try{
            product = await getProductsbyId(productId);
        }
        catch(err){
            console.log('error al cargar el producto', err);
        }
    }

    if(typeId === 'p'){

        try{
            const res = await fetch(`https://api.mercadolibre.com/items/${productId}`);
            const data = await res.json();
            product = data;
        }
        catch (err){
            console.log('error al traer el producto: ', err);            
        }

        return product;
    }
}