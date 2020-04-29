import React from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import './ConversationList.css';

export default function ConversationList(props) {

    const {sortedConversations} = props

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
