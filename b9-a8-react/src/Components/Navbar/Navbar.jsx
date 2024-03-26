import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
  
   
} from "@material-tailwind/react";
import {  NavLink } from "react-router-dom";

export function StickyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to={'/'} className="flex items-center" style={({ isActive }) => {
                    return isActive ? { color: '#23BE0A', borderRadius: "15px", border: "1px solid #23BE0A", padding: '10px 15px' } : {};
                }}>Home</NavLink>
                
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to={'/listed-books'} className="flex items-center" style={({ isActive }) => {
                    return isActive ? { color: '#23BE0A', borderRadius: "15px", border: "1px solid #23BE0A", padding: '10px 15px' } : {};
                }}>Listed Books</NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to={'/pages-to-read'} className="flex items-center  text-primary" style={({ isActive }) => {
                    return isActive ? { color: '#23BE0A', borderRadius: "15px", border:"1px solid #23BE0A", padding:'10px 15px'} : {};
                }}> page to read</NavLink>
            </Typography>
            {/* <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Docs
                </a>
            </Typography> */}
        </ul>
    );

    return (
        <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between mt-3">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-bold text-black"
                    >
                        Book Vibe
                    </Typography>
                    <div className="mr-4 hidden lg:block text-[#131313CC] ">{navList}</div>
                    <div className="flex items-center gap-4">
                       
                        <div className="flex items-center gap-x-1">
                            <Button
                                
                                size="sm"
                                className="hidden lg:inline-block bg-[#23BE0A]"
                            >
                                <span>Sing In</span>
                            </Button>
                            <Button
                            
                                size="sm"
                                className="hidden lg:inline-block bg-[#59C6D2]"
                            >
                                <span>Sign Up</span>
                            </Button>
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit text-black hover:bg-transparent focus:bg-transparent active:bg-transparent block lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    <div className="flex items-center gap-x-1">
                        <Button fullWidth variant="text" size="sm" className="bg-[#23BE0A]">
                            <span>Log In</span>
                        </Button>
                        <Button fullWidth variant="gradient" size="sm" className="bg-[#59C6D2]">
                            <span>Sign in</span>
                        </Button>
                    </div>
                </MobileNav>
            </Navbar>
            
        </div>
    );
}