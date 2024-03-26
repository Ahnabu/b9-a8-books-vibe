/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    
} from "@material-tailwind/react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const Book = ({ book }) => {
    const { bookName, author, image, rating, category, tags, bookId, }= book
    return (
        <div >
           
            <Link to={`/book/${bookId}`}>
            
            
            <Card className="mt-6 w-96 p-4">
                <CardHeader color="blue-gray" className="relative h-[380px] object-center object-cover">
                    <img
                        src={image}
                        alt="card-image"
                    />
                </CardHeader>
                <div className="flex justify-around">
                    <h1 className="text-[#23BE0A] border border-[#23BE0A] rounded-xl p-1 ml-3 text-center mt-5">{ tags[0]}</h1>
                    <h1 className="text-[#23BE0A] border border-[#23BE0A] rounded-xl p-1 ml-3 text-center mt-5">{ tags[1]}</h1>
                    
                </div>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {bookName}
                    </Typography>
                    <Typography>
                       By: {author}
                    </Typography>
                </CardBody>
                <hr className="border border-dashed" />
                <CardFooter className="pt-0">
                    <div className=" flex justify-between" >
                        <h1>{category}</h1>
                        <h1 className=" flex gap-2">{rating} <FaRegStar className="mt-[3px]"/> </h1>
                    </div>
                </CardFooter>
                </Card>
            </Link>
        </div>
    );
};

export default Book;