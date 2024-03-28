import { useEffect, useState } from 'react';
import { useReadListBooks, useWishListBooks } from '../ListHooks/ListHooks';

function useReadSort(sortBy) {
    
    const [sortedData, setSortedData] = useState([]);
    
    const data = useReadListBooks()
    
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
function useWishSort(sortBy) {
    
    const [sortedWishData, setSortedWishData] = useState([]);
    
    const data = useWishListBooks()
   
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
        setSortedWishData(sortData);
    }, [data, sortBy]); // Re-run useEffect when data or sortBy changes
    return sortedWishData;
}


export { useWishSort, useReadSort } 
