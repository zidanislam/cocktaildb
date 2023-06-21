import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Error.css";
const Error = () => {
    return (
        <div className='body error text-center align-bottom'>
           <Button className='button mt-5' as={Link} to={"/"}>Return Home</Button>
        </div>
    );
};

export default Error;