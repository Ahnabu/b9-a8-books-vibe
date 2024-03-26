import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";





const Banner = () => {
    return (
        <div className="bg-[#1313130D] rounded-2xl p-9 lg:m-6 items-center lg:mt-12  flex justify-around">
            <div className=" p-9">
                <h1 className="font-bold text-5xl  mt-6 mb-4">Books to freshen up <br /> your bookshelf</h1>
                <NavLink to={'/listed-books'}> <Button  className="bg-[#23BE0A] ">View the List</Button> </NavLink>
            </div>
            <div className="w-[320px] h-[400px] items-center">
                <img src="https://i.ibb.co/cyJ9kLH/431451026-1415861735984364-531185032160950367-n.png" className="object-cover w-[320px] h-[400px] rounded-lg" alt="" />
            </div>
        </div>
    );
};

export default Banner;