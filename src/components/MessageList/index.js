import React, {useEffect, useState} from 'react';
import Compose from '../Compose';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Message from '../Message';
import moment from 'moment';
import _getRandomId from "../../utils/get-randomId";
import './MessageList.css';

const MY_USER_ID = 'apple';

export default function MessageList(props) {
    const [messages, setMessages] = useState([])
    const {id} = props


    useEffect(() => {
        getMessages();
    }, [])


    const getMessages = () => {
        const tempMessages = [
            {chatId: id},
            {
                id: 1,
                author: 'apple',
                message: 'это супер-пупер длинное предложение, оно должно аккуратно перенестись и поместиться в пузырь =)',
                messageId: _getRandomId(),
                timestamp: new Date().getTime()
            },
            {
                id: 2,
                author: 'orange',
                message: 'оу, вроде работает, но ты черкани еще пару строк',
                messageId: _getRandomId(),
                timestamp: new Date().getTime()
            },
            {
                id: 3,
                author: 'orange',
                message: 'это супер-пупер длинное предложение, оно должно аккуратно перенестись и поместиться в пузырь =)',
                timestamp: new Date().getTime(),
                messageId: _getRandomId(),
            },
            {
                id: 4,
                author: 'apple',
                message: 'оу, вроде работает, но ты черкани еще пару строк',
                messageId: _getRandomId(),
                timestamp: new Date().getTime()
            },
            {
                id: 5,
                author: 'apple',
                message: 'это супер-пупер длинное предложение, оно должно аккуратно перенестись и поместиться в пузырь =)',
                messageId: _getRandomId(),
                timestamp: new Date().getTime()
            },
            {
                id: 6,
                author: 'apple',
                message: 'оу, вроде работает, но ты черкани еще пару строк',
                messageId: _getRandomId(),
                timestamp: new Date().getTime()
            },
            {
                id: 7,
                author: 'orange',
                message: 'это супер-пупер длинное предложение, оно должно аккуратно перенестись и поместиться в пузырь =)',
                messageId: _getRandomId(),
                timestamp: new Date().getTime()
            },
            {
                id: 8,
                author: 'orange',
                message: 'оу, вроде работает, но ты черкани еще пару строк',
                messageId: _getRandomId(),
                timestamp: new Date().getTime()
            },
            {
                id: 9,
                author: 'apple',
                message: 'это супер-пупер длинное предложение, оно должно аккуратно перенестись и поместиться в пузырь =)',
                messageId: _getRandomId(),
                timestamp: new Date().getTime()
            },
            {
                id: 10,
                author: 'orange',
                message: 'оу, вроде работает, но ты черкани еще пару строк',
                messageId: _getRandomId(),
                timestamp: new Date().getTime()
            },
        ];
        const tempMessages2 = [
            {
                id: 1,
                author: 'apple',
                message: 'это супер-пупер длинное предложение, оно должно аккуратно перенестись и поместиться в пузырь =)',
                messageId: _getRandomId(),
                timestamp: new Date().getTime()
            },
            {
                id: 2,
                author: 'orange',
                message: 'оу, вроде работает, но ты черкани еще пару строк',
                messageId: _getRandomId(),
                timestamp: new Date().getTime()
            },
            {
                id: 3,
                author: 'orange',
                message: 'это супер-пупер длинное предложение, оно должно аккуратно перенестись и поместиться в пузырь =)',
                messageId: _getRandomId(),
                timestamp: new Date().getTime()
            },
            {
                id: 4,
                author: 'apple',
                message: 'оу, вроде работает, но ты черкани еще пару строк',
                messageId: _getRandomId(),
                timestamp: new Date().getTime()
            },
            {
                id: 5,
                author: 'apple',
                message: 'это супер-пупер длинное предложение, оно должно аккуратно перенестись и поместиться в пузырь =)',
                messageId: _getRandomId(),
                timestamp: new Date().getTime()
            },
            {
                id: 6,
                author: 'apple',
                message: 'оу, вроде работает, но ты черкани еще пару строк',
                messageId: _getRandomId(),
                timestamp: new Date().getTime()
            },
            {
                id: 7,
                author: 'orange',
                message: 'это супер-пупер длинное предложение, оно должно аккуратно перенестись и поместиться в пузырь =)',
                messageId: _getRandomId(),
                timestamp: new Date().getTime()
            },
            {
                id: 8,
                author: 'orange',
                message: 'оу, вроде работает, но ты черкани еще пару строк',
                messageId: _getRandomId(),
                timestamp: new Date().getTime()
            },
            {
                id: 9,
                author: 'apple',
                message: 'это супер-пупер длинное предложение, оно должно аккуратно перенестись и поместиться в пузырь =)',
                messageId: _getRandomId(),
                timestamp: new Date().getTime()
            },
            {
                id: 10,
                author: 'orange',
                message: 'оу, вроде работает, но ты черкани еще пару строк',
                messageId: _getRandomId(),
                timestamp: new Date().getTime()
            },
        ];

        setMessages([...messages, ...tempMessages])
    }

    const renderMessages = () => {
        let i = 0;
        let messageCount = messages.length;
        let tempMessages = [];

        while (i < messageCount) {
            let previous = messages[i - 1];
            let current = messages[i];
            let next = messages[i + 1];
            let isMine = current.author === MY_USER_ID;
            let currentMoment = moment(current.timestamp);
            let prevBySameAuthor = false;
            let nextBySameAuthor = false;
            let startsSequence = true;
            let endsSequence = true;
            let showTimestamp = true;

            // Работаем с сообщениями, сортируем их в группах по времени получения\отправки


            if (previous) {
                let previousMoment = moment(previous.timestamp);
                let previousDuration = moment.duration(currentMoment.diff(previousMoment));
                prevBySameAuthor = previous.author === current.author;

                if (prevBySameAuthor && previousDuration.as('hours') < 1) {
                    startsSequence = false;
                }

                if (previousDuration.as('hours') < 1) {
                    showTimestamp = true;
                }
            }

            if (next) {
                let nextMoment = moment(next.timestamp);
                let nextDuration = moment.duration(nextMoment.diff(currentMoment));
                nextBySameAuthor = next.author === current.author;

                if (nextBySameAuthor && nextDuration.as('hours') < 1) {
                    endsSequence = false;
                }
            }

            tempMessages.push(
                <Message
                    key={i}
                    isMine={isMine}
                    startsSequence={startsSequence}
                    endsSequence={endsSequence}
                    showTimestamp={showTimestamp}
                    data={current}
                />
            );

            // Перейти к следующему сообщению в списке
            i += 1;
        }

        return tempMessages;
    }

    return (
        <div className="message-list">
            <Toolbar
                title="Список сообщений"
                rightItems={[
                    <ToolbarButton key="info" icon="ion-ios-information-circle-outline"/>,
                    <ToolbarButton key="video" icon="ion-ios-videocam"/>,
                    <ToolbarButton key="phone" icon="ion-ios-call"/>
                ]}
            />

            <div className="message-list-container" id={id}>{renderMessages()} {props.children}</div>

            <Compose rightItems={[
                <ToolbarButton key="photo" icon="ion-ios-camera"/>,
                <ToolbarButton key="image" icon="ion-ios-image"/>,
                <ToolbarButton key="audio" icon="ion-ios-mic"/>,
                <ToolbarButton key="money" icon="ion-ios-card"/>,
                <ToolbarButton key="games" icon="ion-logo-game-controller-b"/>,
                <ToolbarButton key="emoji" icon="ion-ios-happy"/>
            ]}/>
        </div>
    );
}
