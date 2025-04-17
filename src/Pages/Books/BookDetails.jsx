import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { addToLocalStorage } from '../../utilities/addToDB';
import Swal from 'sweetalert2';

const BookDetails = () => {
    const books = useLoaderData();
    const navigation = useNavigate();
    const { bookName, author, image, totalPages, rating, category, tags, publisher, review } = books;

    const handleAddToLoaclStorage = (id) => {
        addToLocalStorage(id);
    }


    return (
        <div className="bg-gradient-to-r from-blue-900 to-cyan-700 text-white py-10">
            <div className="max-w-6xl mx-auto px-4">
                {/* Book Details Card */}
                    {/* Back Button */}
                    <button onClick={() => navigation(-1)} className="btn btn-outline btn-secondary mb-4 text-white">
                        Back
                    </button>
                <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row gap-10 items-center space-y-8 md:space-y-0">
                    {/* Image Section */}
                    <div className="flex-1 md:w-1/3">
                        <img src={image} alt={bookName} className="rounded-lg w-full h-auto" />
                    </div>

                    {/* Text Section */}
                    <div className="flex-1 md:w-2/3 space-y-4 text-black">
                        <h1 className="text-4xl font-bold text-center md:text-left">{bookName}</h1>
                        <h2 className="text-xl font-semibold text-center md:text-left">Author: {author}</h2>
                        <p className="text-center md:text-left font-semibold">Tags: 
                            {tags.map((tag, index) => {
                                return (
                                    <span className='btn btn-outline btn-xs btn-secondary ml-3' key={index}>{tag}</span>
                                )
                            })}
                        </p>
                        <p className="text-center md:text-left">Publisher: {publisher}</p>
                        <p className="text-center md:text-left">Category: {category}</p>
                        <p className="text-center md:text-left">Total Pages: {totalPages}</p>
                        <p className="text-center md:text-left">Rating: {rating}</p>

                        {/* Review Section */}
                        <div className="bg-gray-100 p-4 rounded-lg mt-4">
                            <h3 className="font-bold text-lg">Review</h3>
                            <p>{review}</p>
                        </div>
                        <div className='flex justify-center gap-5'>
                            <button onClick={()=> handleAddToLoaclStorage(books.bookId)} className='btn btn-outline btn-primary'>Mark As Read</button>
                            <button className='btn btn-primary'>WishList</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetails;
