import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {
    const [booksData, setBooksData] = useState([]);

    useEffect(()=>{
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => {
            setBooksData(data)
            console.log(data);
        })
    },[])

    return (
        <div>
            <h1 className='text-2xl font-bold text-center my-10'>Just the Tip of the Bookberg</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:gap-5 pb-10 md:px-10 justify-items-center gap-y-10'>
                {
                    booksData.map((book) => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;