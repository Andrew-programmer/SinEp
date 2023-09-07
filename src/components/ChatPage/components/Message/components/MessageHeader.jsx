import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

export const MessageHeader = ({name, headerStyles,img = ''}) => {
    return (
        <section className={'flex flex-row justify-evenly ' + headerStyles}>
            <Avatar sx={{
                width: '20px',
                height: '20px',
            }}>
                A
            </Avatar>
            <span className={'text-xs mx-2'}>{name}</span>
        </section>
    );
}
