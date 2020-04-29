import React, {useEffect, useState} from 'react';
import shave from 'shave';
import './ConversationListItem.css';

export default function ConversationListItem(props) {
    useEffect(() => {
        shave('.conversation-snippet', 20);
    })

    const {photo, name, text, date, id} = props.data;

    const currentDate = new Date(date).toLocaleDateString('ru');

        function handleClick() {
            return console.log('click', id);
        }

    return (
        <div className="conversation-list-item" onClick={handleClick}>
            <img className="conversation-photo" src={photo} alt="conversation"/>
            <div className="conversation-info">
                <h1 className="conversation-title">{name}</h1>
                <div className="conversation-date">{currentDate}</div>
                <p className="conversation-snippet">{text}</p>
            </div>
        </div>
    );
}
