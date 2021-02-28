import React, { useEffect, useState } from 'react';
import userData from '../../TemporaryData/TemporaryData.json';
import Cart from '../Cart/Cart';
import Friends from '../Friends/Friends';
import './user.css';

const User = () => {
    const [users, setUser] = useState([]);
    const [cart, setCart] = useState([]);	
    useEffect(() =>{
        setUser(userData);
    }, []);

    const handleAddFriends = (user) => {
        console.log("user added", user)
        const newFriend = [...cart, user];
        setCart(newFriend);
    }

    return (
        <div className="user-container">
            <div className="friends-container">
            {
                users.map(user => <Friends handleAddFriends={handleAddFriends} user={user}></Friends>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default User;