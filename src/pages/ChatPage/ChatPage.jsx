import {MainSectionHOC} from "../../HOCs/MainSectionHOC/MainSectionHOC";
import {Message} from "../../components/ChatPage/components/Message/Message";
import {Input} from "../../components/ChatPage/components/Input/Input";
import Divider from "@mui/material/Divider";
import moment from 'moment'
import {useState} from "react";

const mes = [

];

const ChatPageInit = ({messages}) => {


    return (
        <>
            {
                messages.map(({username, text, isSender}) => {
                    return <Message text={text} username={username} isSender={isSender}/>
                })
            }
        </>
    );
}

const ChatPageMessages = MainSectionHOC(ChatPageInit, 'px-3 pb-28 grid justify-start grid-cols-1');


export const ChatPage = () => {
    const [messages, setMessages] = useState(mes);

    const addMessage = (data) => {
        const text = data.content;
        const username = 'Pablo';
        const isSender = true;

        const newMessage = {
            text,
            username,
            isSender
        }
        setMessages(prevState => [...prevState, newMessage]);
    }


    return (
        <section className={'flex flex-col'}>
            <ChatPageMessages messages={messages}/>
            <Input addMessage={addMessage}/>
        </section>
    );
}
