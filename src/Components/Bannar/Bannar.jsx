import React from 'react';
import bookimage from '../../assets/bookcover.jpg'

const Bannar = () => {
    return (
        <div className='relative'>
            <img className='w-full md:h-[70vh] h-[40vh] object-cover' src={bookimage} alt="" />
            <div className='absolute md:top-36 top-16 md:left-20 left-10 space-y-6'>
                <h1 className='md:text-6xl text-3xl text-center md:text-left font-bold text-white md:leading-20'>Books to freshen up <br /> your bookshelf</h1>
                <div className='flex justify-center md:justify-start'>
                    <button className='btn btn-secondary'>View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Bannar;