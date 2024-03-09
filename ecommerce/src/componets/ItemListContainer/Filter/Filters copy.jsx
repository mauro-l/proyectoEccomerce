
import { Link } from "react-router-dom";

function Filters2() {

    const selectedLetter = "a";

  return (
        <section className=" max-w-1/3 mr-7 py-3">
                            <article className="mb-3 border-b border-gray-300 pb-1">
                                <h2 className="text-3xl">Filtros</h2>
                                <p className="text-gray-300 font-roboto text-sm opacity-0">Limpiar todo <span className="ms-3">X</span></p>
                            </article>
                            <article className="mb-3 pb-1">
                                <h3 className="text-3xl my-2">Categoria</h3>
                                <div className="w-48 text-gray-900 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                    <Link to={'/shop/category/comics'} type="button" className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                        <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                        </svg>
                                        Comics
                                    </Link>
                                    <Link to={'/shop/category/libros'} type="button" className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-x border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                        <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25"/>
                                        </svg>
                                        Libros
                                    </Link>
                                    <Link to={'/shop/category/funkos'} type="button" className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border border-gray-200 rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                        <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="currentColor">
                                            <path d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z" fill="currentColor"/>
                                            <path d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z" fill="currentColor"/>
                                        </svg>
                                        Funkos
                                    </Link>
                                </div>

                                {/* <div className="p-2">                
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
                                </div> */}
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

export default Filters2