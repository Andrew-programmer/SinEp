import Avatar from "@mui/material/Avatar";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ReplyIcon from '@mui/icons-material/Reply';
import {Button, ButtonGroup} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const Comment = ({extraStyles = '', isCreator = false}) => {
    return (
        <article className={'bg-[#121212] flex p-2 border-l-white border-l-2 ' + extraStyles}>
            <section className={'flex flex-col'}>
                <section className={'flex items-center text-white text-xs'}>
                    <Avatar>
                        P
                    </Avatar>
                    <section>
                        <p className={'text-sm text-gray-500'}>User 2 <span className={'text-blue-500'}>{isCreator ? 'Creator': ''}</span> </p>
                        <p className={'pl-2'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </section>
                </section>
                <section className={'flex items-center'}>
                    <ButtonGroup>
                        <IconButton>
                            <ThumbUpIcon sx={{
                                fontSize: 'medium',
                                color: 'gray'
                            }}/>
                        </IconButton>
                        <IconButton>
                            <ThumbDownIcon sx={{
                                fontSize: 'medium',
                                color: 'gray'
                            }}/>
                        </IconButton>
                    </ButtonGroup>
                    <IconButton>
                        <ReplyIcon sx={{
                            fontSize: 'medium',
                            color: 'gray'
                        }}/>
                    </IconButton>
                </section>
            </section>
            <IconButton>
                <MoreVertIcon/>
            </IconButton>
        </article>
    );
}
