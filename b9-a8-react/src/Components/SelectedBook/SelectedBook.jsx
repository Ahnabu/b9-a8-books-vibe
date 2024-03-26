/* eslint-disable react/prop-types */
import { useLoaderData, useParams } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import toast, { Toaster } from 'react-hot-toast';
import {  getBook, setBook, wishBook } from "../SaveToLS/SaveToLs";

const SelectedBook = () => {
    const books = useLoaderData();
    const {id} = useParams()
    
   
    const book = books.find(item => item.bookId == id);
    
    const { bookName, author, image, rating, review, tags, totalPages, yearOfPublishing, publisher, category,bookId } = book
    const ReadHandler = (id) => {
        const readBooks = getBook()
        const exist = readBooks.find(bookId => bookId == id);
        if (!exist) {
            setBook(id);
            toast.success('successfully added to read section')
        }
        else {
            toast.error("already read this book")
        }
        
    }
    const WishHandler = id => {
        const readBooks = getBook()
        const exist = readBooks.find(bookId => bookId == id);
        if (!exist) {
            toast.success('successfully added to the wishlist')
            wishBook(id)
        }
        else {
            toast.error("already read this book")
        }
    }

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
                        <Typography variant="h6" color="blue-gray" className="mb-2">
                            By:{author}
                        </Typography>
                        <hr />
                        <Typography variant="h6" color="blue-gray" className="mb-2">
                            {category}
                        </Typography>
                        <hr />
                        <Typography color="gray" className="mb-8 font-normal">
                           <span className="font-bold text-black">Review:</span> {review}
                        </Typography>
                        <div className="flex gap-5">
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
                            
                            
                        
                        <div className="flex gap-5">
                            <Button variant="outlined" className="flex items-center gap-2" onClick={()=>ReadHandler(bookId)}>
                                Read
                            </Button>
                            
                            <Button className="bg-[#50B1C9] " onClick={() => WishHandler(bookId)} >Wishlist</Button>
                            <Toaster
                                position="top-right"
                                reverseOrder={false}
                                gutter={8}
                                containerClassName=""
                                containerStyle={{}}
                                toastOptions={{
                                    // Define default options
                                    className: '',
                                    duration: 5000,
                                    style: {
                                        background: '#363636',
                                        color: '#fff',
                                    },

                                    // Default options for specific types
                                    success: {
                                        duration: 3000,
                                        theme: {
                                            primary: 'green',
                                            secondary: 'black',
                                        },
                                    },
                                }}
                            />
                        </div>
                        
                       
                    </CardBody>
                </Card>
            </div>
        );
    }
};

export default SelectedBook;