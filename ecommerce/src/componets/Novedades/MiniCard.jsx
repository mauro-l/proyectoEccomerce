
const MiniCard = ({img, name, price}) => {
  return (
    <div className='pb-4 mb-2 mx-auto max-w-80 md:max-w-72'>
        <img src={img} alt="example" />
        <p>${price}</p>
        <p className='pb-1 mb-2 text-lg'>{name}</p>
    </div>
  )
}

export default MiniCard