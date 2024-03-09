
import { getProductsbyId } from "../asyncMock";

export const getApiDetails = async ({typeId, productId }) =>{

    let product = [];
    //console.log('dentro de PD:', productId)

    if(typeId === 'f'){
        try{
            product = await getProductsbyId(productId);
            console.log('pasa por f', product)
        }
        catch(err){
            console.log('error al cargar el producto', err);
        }
    }

    if(typeId === 'p'){
        console.log('pasa por p')
        try{
            const res = await fetch(`https://api.mercadolibre.com/items/${productId}`);
            const data = await res.json();
            product = data;
        }
        catch (err){
            console.log('error al traer el producto: ', err);
        }
        console.log('dentro de PD:', product)
        return product;
    }
}