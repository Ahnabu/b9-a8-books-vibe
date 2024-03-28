
import ReadBook from "./ReadBook/ReadBook";
// import { useReadListBooks } from "../ListHooks/ListHooks";
// eslint-disable-next-line react/prop-types
const Read = ({sortedBooks}) => {
    // const itemBook = useReadListBooks();
    

    const readBooks = sortedBooks;
  
    
 
    return (
       
        <div className="flex 
         flex-col gap-8 mt-8">
            {
               readBooks.map(book => <ReadBook key={book.bookId} book={book} ></ReadBook>)
                
            }

          
        </div>
    );
};

export default Read;