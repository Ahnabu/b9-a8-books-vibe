import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Listed = () => {
  const [tab, setTab]=useState(0)
    
    return (
        <div>
            <h1 className="text-5xl text-center text-black">Books</h1>
            <div className="flex justify-start gap-6">
               

               
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                    <Link to={'/listed-books'} onClick={() => setTab(0)} 
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 0 ? 'border border-b-0':'border-b'} dark:border-gray-600 dark:text-gray-600 rounded-xl`}>
                        
                        <span>Read</span>
                    </Link>
                    <Link to={'/listed-books/wishlist'} onClick={() => setTab(1)} 
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 1 ? 'border border-b-0' : 'border-b'} dark:border-gray-600 dark:text-gray-600 rounded-xl`}>
                        
                        <span>WishList</span>
                    </Link>
                   
                   
                </div>
            </div>
                <Outlet></Outlet>
        </div>
    );
};

export default Listed;