import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './friends.css';

const Friends = (props) => {
    const {name, email, phone, img, salary} = props.user;
    return (
        <div className="friends">
            <div>
                <img src={img} alt="Friends-img"/>
            </div>
            <div>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Salary: {salary}</p>
            <button className="add-button" onClick={() => props.handleAddFriends(props.user)}> <FontAwesomeIcon icon={faPlus} /> Add Friend</button>
            </div>
            
        </div>
    );
};

export default Friends;