/* eslint-disable react/prop-types */




// import { useWishListBooks } from "../ListHooks/ListHooks";
import { useWishSort } from "../SortedData/SortedData";
import WishlistBook from "../WishlistBook/WishlistBook";

const Wishlist = ( ) => {
    
      
    

    
    const wishBook = useWishSort()
   

        return (

            <div className="flex 
         flex-col gap-8 mt-8">
                {
                    wishBook.map(book => <WishlistBook key={book.bookId} book={book} ></WishlistBook>)

                }

                
            </div>
        );
    };



export default Wishlist  ;