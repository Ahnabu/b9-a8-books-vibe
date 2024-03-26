import { Outlet } from 'react-router-dom';
import { StickyNavbar } from '../Components/Navbar/Navbar';



const Router = () => {
    return (
        <>
            <StickyNavbar></StickyNavbar>
            <Outlet></Outlet>
        
        </>
            
       
    );
};

export default Router;