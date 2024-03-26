import { useLoaderData } from "react-router-dom";
import { getBook, getWishBook } from "../SaveToLS/SaveToLs";


const Listed = () => {
    const books = useLoaderData();
    const readBooks = getBook();
    const wishBook = getWishBook()
    console.log(readBooks);
    console.log(wishBook);
    return (
        <div>
            <h1 className="text-5xl text-center text-black">Books</h1>
            <div>
                
           </div>
        </div>
    );
};

export default Listed;