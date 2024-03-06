
import { useEffect, useState } from "react"
import { getProducts } from "../../../asyncMock"
import Libro from "./Libro";

function Libros() {

    const [book, getBook] = useState([]);
    const [bookUpdate, getBookUpdate] = useState(false)

    useEffect (()=>{
        getProducts()
        .then(res=>{
            getBook(res)
            getBookUpdate(true)
        })
        .catch(err=>console.log('Error al cargar los libros: ', err))
    },[])

    const bookList = [...book];
    const newBooks = bookList.splice(0,4);
    const simpleBook = newBooks.shift();
  return (
    <div>
        {bookUpdate && (
            <Libro books={newBooks} simple={simpleBook} />
        )}
    </div>
  )
}

export default Libros