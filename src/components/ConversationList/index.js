import React, {useState, useEffect} from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';
import _getRandomId from "../../utils/get-randomId";

import './ConversationList.css';

export default function ConversationList(props) {
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

    return (
        <div className="conversation-list">
            <Toolbar
                title="Чаты"
                leftItems={[
                    <ToolbarButton key="cog" icon="ion-ios-cog"/>
                ]}
                rightItems={[
                    <ToolbarButton key="add" icon="ion-ios-add-circle-outline"/>
                ]}
            />
            <ConversationSearch/>
            {
                sortedConversations.map(conversation =>
                    <ConversationListItem
                        key={conversation.name}
                        data={conversation}
                        id={conversation.id}
                    />
                )
            }
        </div>
    );
}
