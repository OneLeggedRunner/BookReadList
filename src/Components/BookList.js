import React, { useContext } from "react";
import { BookContext } from "./BookContext";
import BookDetail from "./BookDetail";

const BookList = () => {
    const{ books } = useContext(BookContext);
    return books.length ?
    ( 
        <div className="book-list">
            <ul>
                { books.map(book => {
                    return ( <BookDetail book={book} key={book.id}/>)
                })}
            </ul>
        </div>
     ): ( 
            <div className="emptycase">No books to read :)</div>
      );
}
 
export default BookList;