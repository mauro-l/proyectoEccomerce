
import { useState } from "react"
import up from '../icons/chevron-up.svg'
import down from '../icons/chevron-down.svg'

function ItemCount({stock}) {

    const [contador, setContador] = useState(0);

    const incrementar = () => {
        if(contador < stock){
            setContador(contador + 1);
        }
    }

    const decrementar = () =>{
        if(contador > 0){
            setContador(contador - 1);
        }
    }

    {/* <div className="flex">
        <p className="text-xl md:text-lg flex justify-center items-center font-roboto text-gray-400 border border-stone-300 py-2 md:py-0 px-5 w-16">{contador}</p>
        <div className="flex flex-col ms-1 space-y-1 md:space-y-0">
            <button className="text-white font-roboto bg-[#6FC9CD] px-2 md:h-5" onClick={incrementar}>+</button>
            <button className="text-white font-roboto bg-[#6FC9CD] px-2 md:h-6" onClick={decrementar}>-</button>
        </div>
    </div> */}
  return (
    <div className="flex border border-stone-300 w-20">
        <p className="text-xl md:text-lg flex justify-center items-center font-roboto text-gray-400 px-3">{contador}</p>
        <div className="flex flex-col me-2 space-y-1 md:space-y-0 w-full items-end">
            <button className="text-gray-700 font-roboto" onClick={incrementar}><img src={up} alt="chevron up" /></button>
            <button className="text-gray-700 font-roboto" onClick={decrementar}><img src={down} alt="chevron down" /></button>
        </div>
    </div>
  )
}

export default ItemCount
