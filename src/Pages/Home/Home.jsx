import React from 'react';
import Bannar from '../../Components/Bannar/Bannar';
import Books from '../Books/Books';

const Home = () => {
    return (
        <div className='bg-gradient-to-b from-blue-100 to-white'>
           <Bannar></Bannar> 
           <Books></Books>
        </div>
    );
};

export default Home;