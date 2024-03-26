/* eslint-disable react/prop-types */
import { useLoaderData, useParams } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
const SelectedBook = () => {
    const books = useLoaderData();
    const {id} = useParams()
    console.log(id);
    const book = books.find(item => item.bookId == id);
    console.log(book);
    const { bookName, author, image, rating, review, tags, totalPages, yearOfPublishing, publisher, category } = book

    {
        
        return (

            <div className="mt-16 w-full  mx-auto">
                <Card className="w-full flex-row item-center h-[80vh]">
                    <CardHeader
                        shadow={false}
                        floated={false}
                        className="m-3 w-2/5 shrink-0  rounded-3xl"
                    >
                        <img
                            src={image}
                            alt="card-image"
                            className="h-full w-full object-contain "
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h6" color="gray" className="mb-4 uppercase text-4xl">
                            {bookName}
                        </Typography>
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            By:{author}
                        </Typography>
                        <hr />
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            {category}
                        </Typography>
                        <hr />
                        <Typography color="gray" className="mb-8 font-normal">
                           <span className="font-bold text-black">Review:</span> {review}
                        </Typography>
                        <div className="flex justify-between">
                            <h1 className="font-semibold">Tags:</h1>
                            <h1 className="text-[#23BE0A] border border-[#23BE0A] bg-[#23BE0A] bg-opacity-5 rounded-xl p-1 ml-3 text-center ">#{tags[0]}</h1>
                            <h1 className="text-[#23BE0A] border bg-[#23BE0A] bg-opacity-5 border-[#23BE0A] rounded-xl p-1 ml-3 text-center">#{tags[1]}</h1>
                        </div>

                        <hr />
                       
                        <Typography color="gray" className="my-3 font-normal flex gap-6">
                            <ul>
                                <li><p className="">Number of Pages</p> </li>
                                <li><p className="">Publisher</p> </li>
                                <li><p className="">Year of Publishing</p> </li>
                                <li><p className="">Rating</p> </li>
                            </ul>
                            
                            <ul>
                                <li><p className="font-bold text-black">{totalPages}</p></li>
                                <li><p className="font-bold text-black">{publisher}</p></li>
                                <li><p className="font-bold text-black">{yearOfPublishing}</p></li>
                                <li><p className="font-bold text-black">{rating}</p></li>
                            </ul>
                            
                            </Typography>
                            
                            
                        
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
    }
};

export default SelectedBook;