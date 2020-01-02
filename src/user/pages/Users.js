import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        { 
            id: "id1", 
            name: "Bob Jones", 
            image: "https://pixabay.com/photos/cat-sweet-kitty-animals-feline-323262/", 
            places: 3
        }
    ];

    return ( 
        <UsersList items={USERS} />
     );
}
 
export default Users;