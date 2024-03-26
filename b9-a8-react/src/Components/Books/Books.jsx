import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
             fetch('/books.json')
            .then(response => response.json())
            .then(data => setBooks(data))
    },[])
    console.log(books);
    
    return (
        
        <div>
            <h1 className="text-5xl text-center text-black">Books</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    books.map(book => <Book key={book.bookId} book={book} ></Book>)
                }
            </div>
            
            
        </div>
    );
};

export default Books;