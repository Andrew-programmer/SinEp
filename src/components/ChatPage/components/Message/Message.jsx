import {MessageHeader} from "./components/MessageHeader";
import Divider from "@mui/material/Divider";

export const Message = ({username, text, isSender = true}) => {
    const bgStyles = isSender ?
        'bg-[#1C80DB] justify-self-end'
        :
        'bg-[#121212] justify-self-start';

    const headerStyles = isSender ?
        'text-white flex-row-reverse'
        :
        'text-gray-600';

    return (

        <article className={'text-white max-w-[50%] bg-[#121212] rounded p-3 my-2 flex flex-col justify-between  ' + bgStyles}>
            <MessageHeader name={username} headerStyles={headerStyles}/>
            <Divider variant={'middle'} sx={{
                marginY: '5px'
            }}/>
            <p className={'text-xs'}>
                {text}
            </p>
        </article>
    );
}
