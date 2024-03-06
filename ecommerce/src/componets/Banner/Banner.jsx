
import page from './page.jpg'

function Banner({greeting}) {
  return (
    <div className='relative'>
      <img src={page} className='object-cover w-full h-40 md:h-full md:min-h-64' alt="banner" />
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-semibold md:text-5xl md:font-bold">{greeting}</h1>
    </div>
  )
}

export default Banner