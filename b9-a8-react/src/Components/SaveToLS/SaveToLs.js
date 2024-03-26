const getBook = () => {
    const storedBooks = localStorage.getItem('read-books');

    return (JSON.parse(storedBooks) || [])
}
const getWishBook = () => {
    const storedBooks = localStorage.getItem('wish-books');

    return (JSON.parse(storedBooks) || [])
}
const setBook = id => { 
    
    const readBooks = getBook()
    const exist = readBooks.find(bookId => bookId == id);
    if (!exist) {
        readBooks.push(id);
        localStorage.setItem('read-books', JSON.stringify(readBooks));
    }
}
const wishBook = id => {

    const readBooks = getWishBook()
    const exist = readBooks.find(bookId => bookId == id);
    if (!exist) {
        readBooks.push(id);
        localStorage.setItem('wish-books', JSON.stringify(readBooks));
    }
    else {
        localStorage.removeItem('wish-books', JSON.stringify(readBooks))
    }
}
export { getBook, setBook, wishBook, getWishBook }