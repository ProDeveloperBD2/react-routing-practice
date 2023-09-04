import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const countries = useLoaderData()
    return (
        <div>
            <h1>hallo my countries components</h1>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;