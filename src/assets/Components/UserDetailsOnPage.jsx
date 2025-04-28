import React, { use } from 'react';

const UserDetailsOnPage = ({userPromise}) => {
    const {name,  username} = use(userPromise)
    console.log(userPromise)
    return (
        <div className='flex items-center justify-center'>
           <p>User Name: {username}</p> 
        </div>
    );
};

export default UserDetailsOnPage;