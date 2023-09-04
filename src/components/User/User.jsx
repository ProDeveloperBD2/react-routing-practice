import React from 'react';
import { Link } from 'react-router-dom';
import './User.css'

const User = ({ user }) => {
    const { name, email, phone, id } = user;
    return (
        <div className='user'>
            <h2>{name}</h2>
            <h4>Email: {email} </h4>
            <h4>Phone: {phone} </h4>
            <Link to={`/user/${id}`}>Show Deteils</Link>
        </div>
    );
};

export default User;