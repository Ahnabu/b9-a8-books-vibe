

import { Link } from "react-router-dom";

import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";


import {  useState } from "react";
import { useWishSort } from "../SortedData/SortedData";
import Wishlist from "../Wishlist/Wishlist";
import Read from "../Read/Read";
// import { useWishListBooks } from "../ListHooks/ListHooks";
const Listed = () => {
   
    const [tab, setTab] = useState(0);
  
//  console.log(sortedBooks);
        
   
    const [selectedSort, setSelectedSort] = useState('title');
    const sortedBooks = useWishSort(selectedSort);

    const handleSortChange = (sortBy) => {

        setSelectedSort(sortBy);
        console.log(sortBy)


    };

    console.log(sortedBooks);
        return (
            <div>
                <h1 className="text-5xl text-center mt-12 mb-4 py-3 bg-[#1313130D] text-black rounded-xl">Books</h1>
                <div className="text-center">
                    <Menu
                        animate={{
                            mount: { y: 0 },
                            unmount: { y: 25 },
                        }}
                    
                    >
                        <MenuHandler>
                            <Button className="bg-[#23BE0A] "> Sort by</Button>
                        </MenuHandler>
                        <MenuList >
                            <MenuItem value={'rating'} onClick={() => handleSortChange('rating')} >Rating</MenuItem>
                            <MenuItem value={'totalPages'} onClick={() => handleSortChange('totalPages')}>Number of Pages</MenuItem>
                            <MenuItem value={'yearOfPublishing'} onClick={() => handleSortChange('yearOfPublishing')}>Publishing Year</MenuItem>
                        
                        </MenuList>
                    </Menu>
                </div>
                <div className="flex justify-start gap-6 w-[80vw] mx-auto ">
               

               
                    <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800 mt-6 ">
                        <Link to={'/listed-books'} onClick={() => setTab(0)}
                            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 0 ? 'border border-b-0 ' : 'border-b '} dark:border-gray-900 dark:text-gray-600 top-rounded-xl ` }>
                        
                            <span className="font-semibold" >Read</span>
                        </Link>
                        <Link to={'/listed-books/wishlist'} onClick={() => setTab(1)}
                            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 1 ? 'border border-b-0' : 'border-b '} dark:border-gray-900 dark:text-gray-600 `} >
                        
                            <span className="font-semibold ">WishList</span>
                        </Link>
                   
                   
                    </div>
                </div>
                <Wishlist sortedBooks={sortedBooks}></Wishlist>
                <Read sortedBooks={sortedBooks}/>
                {/* <Outlet  ></Outlet> */}
            </div>
        );
    
}

export default Listed;