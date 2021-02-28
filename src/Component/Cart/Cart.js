import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const friend = cart[i];
        console.log(friend)
        total = total + friend.salary;
        console.log(total);
    }
    return (
        <div>
            <h3>Friend Added: {cart.length}</h3>
            <h3>Total Salary: {total}</h3>
        </div>
    )
}

export default Cart;