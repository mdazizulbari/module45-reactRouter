import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const users = useLoaderData()
    console.log(users)
    return (
        <div className='text-3xl'>
            <h4>This is users page</h4>
        </div>
    );
};

export default Users;