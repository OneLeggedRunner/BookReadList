import React, { useState, createContext, useEffect } from 'react';


export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title:"The Shiva Triloki", author: "Amish", id: 10},
        {title:"Legend of Sunil Dev", author: "Sunil Dev", id: 20},
        {title:"The Secret of Nagas", author: "Hrithik Thrikha", id: 30}
    ]);

    const addBooks = (title, author, id) => {
        setBooks([...books, {title, author,id:id}]);
    };

    const removeBooks = (id) => {
        setBooks(books.filter(book => book.id !== id));
    }

    useEffect(() => {
        localStorage.setItem('books',JSON.stringify(books))
    }, [books])

    return(
        <BookContext.Provider value={{ books, addBooks, removeBooks }}> 
            { props.children }
        </BookContext.Provider>
    )
}

export default BookContextProvider