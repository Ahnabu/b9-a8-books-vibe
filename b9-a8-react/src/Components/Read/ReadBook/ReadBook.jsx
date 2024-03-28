/* eslint-disable react/prop-types */


import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
   
} from "@material-tailwind/react";
import { CiTimer } from "react-icons/ci";
import { IoPeopleSharp } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const ReadBook = ({book}) => {
    
    const { bookName, author, image, rating, tags, totalPages, yearOfPublishing, publisher, category,bookId } = book
    return (
        <div className="" >
            <Card className=" w-380px lg:w-[80vw]  mx-auto h-full flex-col lg:flex-row ">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 shrink-0 rounded-r-none p-5"
                >
                    <img
                        src={image}
                        alt="card-image"
                        className="h-full w-[300px] object-fill"
                    />
                </CardHeader>
                <CardBody className="items-center text-start my-auto">
                    <Typography variant="h4" className="mb-4 text-[#131313]  text-4xl">
                        {bookName}
                    </Typography>
                    <Typography variant="h6" color="gray" className="mb-4 ">
                        By:{author}
                    </Typography>
                    <div className="flex gap-2 lg:gap-5 mt-4">
                        <h1 className="font-semibold">Tags:</h1>
                        <h1 className="text-[#23BE0A] border border-[#23BE0A] bg-[#23BE0A] bg-opacity-5 rounded-xl p-1 ml-3 text-center ">#{tags[0]}</h1>
                        <h1 className="text-[#23BE0A] border bg-[#23BE0A] bg-opacity-5 border-[#23BE0A] rounded-xl p-1 ml-3 text-center">#{tags[1]}</h1>
                        <h1 className="flex gap-1 mt-1"><CiTimer className="mt-1" /> Year of Publishing: {yearOfPublishing}</h1>
                    </div>


                    <Typography variant="h6" color="blue-gray" className="mb-2 mt-4  flex gap-5">
                        <h1 className="flex gap-1 mt-1"><IoPeopleSharp className="mt-1" /> Publisher:{publisher} </h1>
                        <h1 className="flex gap-1 mt-1"><IoBookOutline className="mt-1" />Page:{totalPages} </h1>
                    </Typography>
                    <hr />
                    <Typography variant="h6" color="blue-gray" className="mb-4 flex gap-5 mt-4">
                        <h1 className="text-[#328EFF] border border-[#328EFF] bg-[#328EFF] bg-opacity-5 rounded-xl p-1 ml-3 text-center ">Category: {category}</h1>
                        <h1 className="text-[#FFAC33] border border-[#FFAC33] bg-[#FFAC33] bg-opacity-5 rounded-xl p-1 ml-3 text-center ">Rating:{rating} </h1>
                        <h1 className="text-white border border-[#23BE0A] bg-[#23BE0A] font-semibold rounded-xl p-1 ml-3 text-center ">Category: {category}</h1>
                    </Typography>
                    

                    <Link to={`/book/${bookId}`} ><Button className="bg-[#23BE0A] ">View Details</Button> </Link>
                   
                </CardBody>
            </Card>
        </div>
    );
};

export default ReadBook;