
import ItemBook from './ItemBook'

const Libro = ({books, simple}) => {
    return (
        <div className='flex flex-col'>
          <section>
            <h3 className='text-center'>Libros de autor</h3>
            <h2 className='text-center text-3xl pb-4'>Amplio catalogo de libros</h2>
          </section>
          <section className='flex flex-col lg:flex-row'>
            <article className='mx-auto sm:flex sm:items-center bg-tgray md:max-w-[700px] lg:order-2'>
                <picture className='mx-auto flex max-h-[450px] md:max-h-full max-w-[350px]'>
                    <img src={simple.img} alt="" />
                </picture>
                <div className='flex mx-auto max-h-[450px] md:max-h-full max-w-[350px]'>
                    <div className='p-4'>
                        <h5 className='my-2 p-1 px-3 text-white bg-ered inline-block'>Novela</h5>
                        <h4 className='text-lg text-wrap'>{simple.name}</h4>
                        <p className='text-gray-400 font-roboto py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ea voluptas odio.</p>
                        <div className='inline-flex gap-3 border-t-2 border-black/50 py-2 px-4'>
                            <p className='text-gray-500'>genero</p>
                            <p className='text-gray-500'>año</p>
                        </div>
                    </div>
                </div>
                
            </article>
            <article className='m-2 lg:order-1 lg:w-1/3'>
                <ul className='space-y-2 md:space-y-5'>
                    {books.map(item => (
                        <ItemBook key={item.id} item={item} />
                    ))}
                </ul>
            </article>
          </section>
        </div>
    )
}

export default Libro