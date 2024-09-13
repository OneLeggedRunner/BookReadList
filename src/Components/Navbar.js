import React, { useContext, useState } from 'react';
import { BookContext } from './BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext);

    return ( 
        <div className="Navbar">

        <h1 className="heading">
            Phantom's Reading WishList🐸🐸🐸
        </h1>
        <p>Currently you have { books.length } books to go through</p>
        </div>
     );
}
 
export default Navbar;