
import ReadBook from "./ReadBook/ReadBook";

// eslint-disable-next-line react/prop-types
const Read = ({ sortedReadBooks }) => {
  
    

    const readBooks = sortedReadBooks;
  console.log(readBooks);
    
 
    return (
       
        <div className="flex 
         flex-col gap-8 mt-8">
            {
            readBooks.map(book => <ReadBook key={book.bookId} book={book}/>)
            }

          
        </div>
    );
};

export default Read;