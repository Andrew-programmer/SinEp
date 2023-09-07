import {ChatUser} from "../../components/Chat/ChatUser/ChatUser";
import {SearchBar} from "../../components/Chat/SearchBar/SearchBar";
import Divider from "@mui/material/Divider";
import {useNavigate} from "react-router";
import {CHAT, CHAT_ROUTE} from "../../uutils/consts";

const chatUsers = [
    {
        name: 'Pokora',
        message: 'I dunno, man, seems pretty sus to me...',
        status: false
    },
    {
        name: 'HugoLoad277',
        message: 'I believe you to be wrong.',
        status: true
    },
    {
        name: 'Punk',
        message: 'Yo guys I\'m here',
        status: false
    },
    {
        name: 'Pokora',
        message: 'I dunno, man, seems pretty sus to me...',
        status: false
    },
    {
        name: 'HugoLoad277',
        message: 'I believe you to be wrong.',
        status: true
    },
    {
        name: 'Punk',
        message: 'Yo guys I\'m here',
        status: false
    },
    {
        name: 'Pokora',
        message: 'I dunno, man, seems pretty sus to me...',
        status: false
    },
    {
        name: 'HugoLoad277',
        message: 'I believe you to be wrong.',
        status: true
    },
    {
        name: 'Punk',
        message: 'Yo guys I\'m here',
        status: false
    },
    {
        name: 'Pokora',
        message: 'I dunno, man, seems pretty sus to me...',
        status: false
    },
    {
        name: 'HugoLoad277',
        message: 'I believe you to be wrong.',
        status: true
    },
    {
        name: 'Punk',
        message: 'Yo guys I\'m here',
        status: false
    },
]

export const Chat = () => {
    const navigate = useNavigate();

    const onChatClick = (id = 1) => {
        navigate(CHAT_ROUTE + `/${id}`)
    }

    return (
        <section className={'pt-12 pb-14 flex items-center justify-around bg-black flex-wrap'}>
            <SearchBar
                extraStyles={'sticky top-12 z-50'}
            />
            <section className={'mt-2'}>
                {
                    chatUsers.map(({name, message, status}) => {
                        return <>
                            <Divider variant={'middle'}/>
                            <ChatUser name={name} status={status} message={message} navigateToChat={() => onChatClick()}/>
                        </>
                    })
                }
            </section>
        </section>
    );
}
