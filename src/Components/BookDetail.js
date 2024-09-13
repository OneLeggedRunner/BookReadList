import React, { useContext } from 'react';
import { BookContext } from './BookContext';


const BookDetail = ({book}) => {
    const {removeBooks} = useContext(BookContext);

    return ( 
        <div className="details_form">
            <li onClick={() => removeBooks(book.id)}>
                <div className="title">{ book.title }</div>
                <div className="author">{ book.author }</div>
            </li>
        </div>
     );
}
 
export default BookDetail;