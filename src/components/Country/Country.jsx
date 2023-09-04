import React from 'react';
import './Country.css'

const Country = ({ country }) => {
    const { name, region, status, flags } = country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>{name.common}</h2>
            <h3>Region: {region}</h3>
            <h4>Status: {status}</h4>
        </div>
    );
};

export default Country;