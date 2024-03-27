
import ReadBook from "./ReadBook/ReadBook";
import { useReadListBooks } from "../ListHooks/ListHooks";
const Read = () => {
    const itemBook = useReadListBooks();
    

    console.log(itemBook);
   
    
 
    return (
       
        <div className="flex
         flex-col gap-8 mt-8">
            {
               itemBook.map(book => <ReadBook key={book.bookId} book={book} ></ReadBook>)
                
            }

          
        </div>
    );
};

export default Read;