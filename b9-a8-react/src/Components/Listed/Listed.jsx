import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
const Listed = () => {
  const [tab, setTab]=useState(0)
    
    return (
        <div>
            <h1 className="text-5xl text-center mt-12 mb-4 py-3 bg-[#1313130D] text-black rounded-xl">Books</h1>
            <div>
                <Menu
                    animate={{
                        mount: { y: 0 },
                        unmount: { y: 25 },
                    }}
                >
                    <MenuHandler>
                        <Button> Sort by</Button>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem>Rating</MenuItem>
                        <MenuItem>Number of Pages</MenuItem>
                        <MenuItem>Publishing Year</MenuItem>
                        
                    </MenuList>
                </Menu>
            </div>
            <div className="flex justify-start gap-6 w-[80vw] mx-auto ">
               

               
                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800 mt-6 ">
                    <Link to={'/listed-books'} onClick={() => setTab(0)} 
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 0 ? 'border border-b-0 ' :'border-b '} dark:border-gray-900 dark:text-gray-600 top-rounded-xl `}>
                        
                        <span className="font-semibold">Read</span>
                    </Link>
                    <Link to={'/listed-books/wishlist'} onClick={() => setTab(1)} 
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 1 ? 'border border-b-0' : 'border-b '} dark:border-gray-900 dark:text-gray-600 `}>
                        
                        <span className="font-semibold">WishList</span>
                    </Link>
                   
                   
                </div>
            </div>
                <Outlet></Outlet>
        </div>
    );
};

export default Listed;