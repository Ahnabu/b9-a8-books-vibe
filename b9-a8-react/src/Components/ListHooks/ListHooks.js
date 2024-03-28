import { useEffect,  useState } from "react";
import { getWishBook } from "../SaveToLS/SaveToLs";
import { getBook } from "../SaveToLS/SaveToLs";
// const sort = []
const useWishListBooks = () => {
    
    const [wishBook, getBook] = useState([]);
    const [books, setBooks] = useState([])
    useEffect(() => { 
        const fetchData = async () => {
            const res = await fetch('/books.json')
            const data = await res.json();
            setBooks(data)
        }
        fetchData()
    },[])
    useEffect(() => {
       
        const ReadBooks = getWishBook();
        if (books) {
            // const ReadingBook = books.filter(item => ReadBooks.includes(item.bookId ));
            const ReadingBook = [];
            for (const id of ReadBooks) {
                const book = books.find(item => item.bookId == id);
                if (book) {
                    ReadingBook.push(book)
                }

            }
            getBook(ReadingBook)
           

        }
        

    }, [books])
    // sort.push(wishBook)

    return wishBook
}
const useReadListBooks = () => {
    const [itemBook, setItemBook] = useState([]);
    const [books, setBooks] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/books.json')
            const data = await res.json();
            setBooks(data)
        }
        fetchData()
    }, [])
    useEffect(() => {
        const ReadBooks = getBook();
        if (books.length > 0) {
            // const ReadingBook = books.filter(item => ReadBooks.includes(item.bookId ));
            const ReadingBook = [];
            for (const id of ReadBooks) {
                const book = books.find(item => item.bookId == id);
                if (book) {
                    ReadingBook.push(book)
                }

            }
            setItemBook(ReadingBook)
         
        }

    }, [books])
    return itemBook
}

export {useWishListBooks,useReadListBooks}