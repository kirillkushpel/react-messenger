import React, {useEffect, useState} from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import './Messenger.css';
import axios from "axios";
import _getRandomId from "../../utils/get-randomId";

export default function Messenger(props) {
    const [sortedConversations, setConversations] = useState([]);
    useEffect(() => {
        getConversations()
    }, [])

    const getConversations = () => {
        axios.get('https://randomuser.me/api/?results=20').then(response => {
            let newConversations = response.data.results.map(result => {
                return {
                    photo: result.picture.large,
                    name: `${result.name.first} ${result.name.last}`,
                    text: 'Привет-привет! Тут супер-длинное сообщение, которое надо обрезать',
                    date: result.dob.date,
                    id: _getRandomId()
                };
            });
            const sortedConversations = newConversations.slice().sort((a, b) => b.date - a.date)

            setConversations([...sortedConversations])
        });
    }

    const conversationsId = sortedConversations.map(item => item.id);

    const clickHandler = () => {
        console.log('click')
    }

    return (
        <div className="messenger">
            <div className="scrollable sidebar">
                <ConversationList sortedConversations={sortedConversations}/>
            </div>
            <div className="scrollable content">
                <MessageList conversationsId={conversationsId}/>
            </div>
        </div>
    );
}
