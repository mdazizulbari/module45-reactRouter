import React, { use } from 'react';

const Users2 = ({usersPromise}) => {
const users = use(usersPromise)    
console.log("from users2",users)

    return (
        <div>
           <h4>This is users page</h4> 
        </div>
    );
};

export default Users2;