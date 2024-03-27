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

const WishlistBook = ({book}) => {
    console.log(book)
    const { bookName, author, image, rating, tags, totalPages, yearOfPublishing, publisher, category } = book
    return (
        <div>
            <Card className="w-full max-w-[48rem] flex-row">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 w-2/5 shrink-0 rounded-r-none"
                >
                    <img
                        src={image}
                        alt="card-image"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h4" color="gray" className="mb-4  text-4xl">
                        {bookName}
                    </Typography>
                    <Typography variant="h6" color="gray" className="mb-4 ">
                        By:{author}
                    </Typography>
                    <div className="flex gap-5">
                        <h1 className="font-semibold">Tags:</h1>
                        <h1 className="text-[#23BE0A] border border-[#23BE0A] bg-[#23BE0A] bg-opacity-5 rounded-xl p-1 ml-3 text-center ">#{tags[0]}</h1>
                        <h1 className="text-[#23BE0A] border bg-[#23BE0A] bg-opacity-5 border-[#23BE0A] rounded-xl p-1 ml-3 text-center">#{tags[1]}</h1>
                        <h1><CiTimer /> Year of Publishing: {yearOfPublishing}</h1>
                    </div>


                    <Typography variant="h6" color="blue-gray" className="mb-2 flex gap-5">
                        <h1><IoPeopleSharp /> Publisher:{publisher} </h1>
                        <h1><IoBookOutline />Page:{totalPages} </h1>
                    </Typography>
                    <hr />
                    <Typography variant="h6" color="blue-gray" className="mb-2 flex gap-5">
                        <h1 className="text-[#328EFF] border border-[#328EFF] bg-[#328EFF] bg-opacity-5 rounded-xl p-1 ml-3 text-center ">Category: {category}</h1>
                        <h1 className="text-[#FFAC33] border border-[#FFAC33] bg-[#FFAC33] bg-opacity-5 rounded-xl p-1 ml-3 text-center ">Rating:{rating} </h1>
                        <h1 className="text-white border border-[#23BE0A] bg-[#23BE0A] font-semibold rounded-xl p-1 ml-3 text-center ">Category: {category}</h1>
                    </Typography>
                    <hr />


                    <a href="#" className="inline-block">
                        <Button variant="text" className="flex items-center gap-2">
                            Learn More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </Button>
                    </a>
                </CardBody>
            </Card>
        </div>
    );
};

export default WishlistBook;