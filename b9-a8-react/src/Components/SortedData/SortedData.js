import { useEffect, useState } from 'react';
import { useWishListBooks } from '../ListHooks/ListHooks';

function useWishSort(sortBy) {
    
    const [sortedData, setSortedData] = useState([]);
    const data =useWishListBooks()
    useEffect(() => {
        const sortData = [...data]; // Avoid mutating the original data

        sortData.sort((a, b) => {
            if (sortBy === 'yearOfPublishing') {
                return b.yearOfPublishing - a.yearOfPublishing;
            } else if (sortBy === 'totalPages') {
                return b.totalPages - a.totalPages; // Sort by pages in descending order
            } else if (sortBy === 'rating') {
                return b.rating - a.rating;

            }
            else {
                return b.bookId - a.bookId;

            }
        });
        setSortedData(sortData);
    }, [data, sortBy]); // Re-run useEffect when data or sortBy changes

    return sortedData;
}

export { useWishSort } 
