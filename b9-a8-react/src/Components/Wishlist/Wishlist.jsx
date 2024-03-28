/* eslint-disable react/prop-types */
import WishlistBook from "../WishlistBook/WishlistBook";

const Wishlist = ({sortedBooks}) => {
    
    const books = sortedBooks
    

    
   

        return (

            <div className="flex 
         flex-col gap-8 mt-8">
                {
                    books.map(book => <WishlistBook key={book.bookId} book={book} ></WishlistBook>)

                }

                
            </div>
        );
    };



export default Wishlist  ;