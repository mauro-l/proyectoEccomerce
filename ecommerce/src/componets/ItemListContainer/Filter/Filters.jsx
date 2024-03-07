
function Filters() {

    const selectedLetter = "a";

  return (
    <section className=" max-w-1/3 mr-7 py-3">
        <article className="mb-3 border-b border-gray-300 pb-1">
            <h2 className="text-3xl">Filtros</h2>
            <p className="text-gray-300 font-roboto text-sm opacity-0">Limpiar todo <span className="ms-3">X</span></p>
        </article>
        <article className="mb-3 border-b border-gray-300 pb-1">
            <h3 className="text-3xl">Categoria</h3>
            <div className="p-2">                
                <div className="flex items-center py-1">
                    <input defaultChecked id="default-radio-1" type="radio" defaultValue="comics" name="default-radio" className="w-4 h-4 text-esky bg-gray-100 border-gray-300 focus:ring-esky dark:focus:ring-esky dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="default-radio-1" className="ms-2 text-lg font-medium text-gray-500 dark:text-gray-300">Comics & Mangas</label>
                </div>
                <div className="flex items-center py-1">
                    <input id="default-radio-2" type="radio" defaultValue="libros" name="default-radio" className="w-4 h-4 text-esky bg-gray-100 border-gray-300 focus:ring-esky dark:focus:ring-esky dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="default-radio-2" className="ms-2 text-lg font-medium text-gray-500 dark:text-gray-300">Libros</label>
                </div>
                <div className="flex items-center py-1">
                    <input id="default-radio-3" type="radio" defaultValue="funkos" name="default-radio" className="w-4 h-4 text-esky bg-gray-100 border-gray-300 focus:ring-esky dark:focus:ring-esky dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="default-radio-3" className="ms-2 text-lg font-medium text-gray-500 dark:text-gray-300">Funko Pop</label>
                </div>
            </div>
        </article>
        <article className="bg-tgray rounded-md px-2 py-3 -ml-2">
            <ul>
                <li className="flex justify-between border-b border-gray-200 pb-2">
                    <p className="text-xl text-nowrap">Envio Fast⚡</p>
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultValue="" className="sr-only peer" />
                      <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </li>
                <li className="flex justify-between my-2 border-b border-gray-200 pb-2">
                    <p className="text-xl text-nowrap">Envio Gratis</p>
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultValue="" className="sr-only peer" />
                      <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </li>
                <li className="flex justify-between">
                    <p className="text-xl text-nowrap pr-5">Cuotas Sin Interes</p>
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultValue="" className="sr-only peer" />
                      <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </li>
            </ul>
        </article>
        <article className="w-full flex flex-col py-4">
            <h3 className="text-2xl mb-2">Precio</h3>
            <div className="relative mb-6 w-full">
                <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
                <input id="labels-range-input" type="range" defaultValue="750" min="100" max="1500" className="h-1 w-full bg-gray-200 appearance-none cursor-pointer range-sm dark:bg-gray-700"/>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min ($100)</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max ($1500)</span>
            </div>
        </article>
        <article>
            <h3 className="text-2xl">A - Z</h3>
            <div className="filter-section">
                <div className="filter-buttons grid grid-cols-4 bg-gray-100/50 gap-1 py-1">
                    {[' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
                    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map(letter => (
                        <button 
                            key={letter} 
                            className={selectedLetter === letter ? 'active' : ''}
                            /* onClick={() => handleFilterChange(letter)} */
                        >
                            {letter}
                        </button>
                    ))}
                </div>
            </div>
            {/* <ul>
                <li># | A | B | C</li>
                <li>D | E | F | G</li>
                <li>H | I | J | K</li>
                <li>L | M | N | O</li>
                <li>P | Q | R | S</li>
                <li>T | U | V | W</li>
                <li>X | Y | Z</li>
            </ul> */}
        </article>
    </section>
  )
}

export default Filters