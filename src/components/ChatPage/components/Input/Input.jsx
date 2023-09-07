import IconButton from "@mui/material/IconButton";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import {useInput} from "../../../../customHooks/useInput";
import Divider from "@mui/material/Divider";
import {socket} from "../../../../socket";

export const Input = ({addMessage}) => {
    const [value, changeValue] = useInput('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (value) {
            socket.emit('chat message', {
                date: Date.now(),
                content: value
            })
            changeValue('');
        }
    }

    socket.on('chat message', (data) => {
        addMessage(data);
    })

    return (
        <>
            <form className={'flex flex-row justify-between fixed bottom-12 py-2 bg-[#121212e3] backdrop-blur-md border-b-[#171717] border-b-2 w-full'} onSubmit={onSubmit}>
                <article className={'flex flex-row justify-between'}>
                    <IconButton>
                        <InsertPhotoIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                </article>
                <input type="text" value={value} onChange={changeValue} placeholder={'Type message...'}
                    className={'border-none outline-none bg-transparent text-white'}
                />
                <IconButton sx={{
                    marginRight: '0.2rem'
                }}>
                    <KeyboardVoiceIcon/>
                </IconButton>
            </form>

        </>

    );
}
