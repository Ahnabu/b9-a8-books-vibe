import { useLoaderData } from "react-router-dom";
import {  getWishBook } from "../SaveToLS/SaveToLs";

import { useEffect, useState } from "react";
import WishlistBook from "../WishlistBook/WishlistBook";
const Wishlist = () => {
    
        const books = useLoaderData();

        const [itemBook, setItemBook] = useState([]);

        useEffect(() => {
            const ReadBooks = getWishBook();
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
                console.log(ReadingBook, itemBook)
            }

        }, [books])


        return (

            <div className="flex
         flex-col gap-8 mt-8">
                {
                    itemBook.map(book => <WishlistBook key={book.bookId} book={book} ></WishlistBook>)

                }

                <h1>{itemBook.length}</h1>
            </div>
        );
    };



export default Wishlist;