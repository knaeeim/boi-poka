import React from 'react';
import { Link } from 'react-router';

const ReadListBook = ({book}) => {
    const {bookName, author, image, totalPages, rating, category, tags, publisher } = book;
    return (
        <div className="card bg-base-100 w-[90%] shadow-lg bg-gradient-to-r from-blue-900 to-cyan-700 text-white">
        <figure className="px-10 pt-10">
            <img
            src={image}
            alt="Shoes"
            className="rounded-xl w-48 h-68"
            />
        </figure>
        <div className="px-8 pb-8 pt-4 flex flex-col flex-grow">
            <h2 className="text-center font-bold text-xl mb-4">Name : {bookName.length > 4 ? bookName.split(" ").slice(0, 4).join(", ") + "..": bookName}</h2>
            <div className="flex justify-between">
                <div className="text-left flex-1">
                    <h2>Author: {author.slice(0, 6)}...</h2>
                    <p> Tags: { tags[0]}... </p>
                    <p>Publisher: {publisher.slice(0, 6)}...</p>
                </div>
                <div className="divider divider-horizontal divider-secondary"></div>
                <div className="text-right flex-1">
                    <p>Category: {category}</p>
                    <h3>Total Pages:{totalPages}</h3>
                    <p>Rating: {rating}</p>
                </div>
            </div>
            <div className="flex justify-center mt-6 gap-5">
                <button className="btn btn-info">Buy Now</button>
                <Link to={`/book/${book.bookId}`}><button className="btn btn-secondary">View Details</button></Link>
            </div>
        </div>
        </div>
    );
};

export default ReadListBook;