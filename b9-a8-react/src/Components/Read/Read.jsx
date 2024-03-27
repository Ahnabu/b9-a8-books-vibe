

import { useLoaderData } from "react-router-dom";
import { getBook } from "../SaveToLS/SaveToLs";

import { useEffect, useState } from "react";
import ReadBook from "./ReadBook/ReadBook";
const Read = () => {
    const books = useLoaderData();
    
    const [itemBook, setItemBook] = useState([]);
    
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
            console.log(ReadingBook,itemBook)
        }
       
   },[books])
    
 
    return (
       
        <div>
            {
               itemBook.map(book => <ReadBook key={book.bookId} book={book} ></ReadBook>)
                
            }

            <h1>{itemBook.length}</h1>
        </div>
    );
};

export default Read;