import React, { useContext, useState } from 'react';
import { BookContext } from './BookContext';

const NewBookForm = () => {
    const { addBooks } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [id, setID] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, author, id);
        addBooks( title, author, id);
        setTitle('');
        setAuthor('');
        setID('');
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Input Book Title' value={title} 
            onChange = {(e) => setTitle(e.target.value)} required/>
            <input type="text" placeholder='Input Book Author' value={author} 
            onChange = {(e) => setAuthor(e.target.value)} required/>
            <input type="number" placeholder='Input Book ID' value={id} 
            onChange = {(e) => setID(e.target.value)} required/>
            <input type="submit" value="Add Me!"/>
        </form>
     );
}
 
export default NewBookForm;