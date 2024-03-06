
function ItemBook({item}) {
    return (
        <li className='flex md:py-3 md:pr-10 border-b py-3'>
            <img src={item.img} className='w-24 h-24' alt="" />
            <div className='flex flex-col justify-center p-2'>
                <h5>Novela</h5>
                <h4>{item.name}</h4>
            </div>
        </li>
    )
}

export default ItemBook