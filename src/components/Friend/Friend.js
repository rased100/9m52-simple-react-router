import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const { id, name, phone, website, address } = props.friend;
    const history = useHistory();

    const url = `/friend/${id}`;

    const handleFriendClick = () => {
        history.push(`/friend/${id}`)
    }
    return (
        <div className="friendStyle">
            <h2>I am : {name} {id}</h2>
            <h5>call me: {phone}</h5>
            <p>visit me: {website}</p>
            <p><small>I live in: {address.city}</small></p>
            <Link to={url}>Visit me</Link>
            <br />
            <Link to={url}>
                <button>Visit Me</button>
            </Link>
            <br />
            <button onClick={handleFriendClick}>Visit me 2</button>
        </div>
    );
};

export default Friend;