import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './UserDeteils.css'

const UserDeteils = () => {
    const usersId = useLoaderData();
    const { name, website, id, username } = usersId;
    return (
        <div>
            <h1>Fake User Deteils Hum</h1>
            <div className='userDeteils'>
                <h2>{name}</h2>
                <h4>Id: {id}</h4>
                <h2>Username: {username}</h2>
                <h2>Website: {website}</h2>
            </div>
        </div>
    );
};

export default UserDeteils;