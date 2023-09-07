// import {Button} from "@mui/material";
import React from "react";
import {Button} from "../../Button/Button";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import IconButton from "@mui/material/IconButton";

export const HeaderGroup = ({setPage, setData, titleValue, placeValue}) => {
    const handleNextButton = () => {
        setPage(1);
    };

    return (
        <>
            <section>
                <input type="text"
                       className={'border-0 outline-0 px-4 text-white bg-transparent'}
                       placeholder={'place'}
                       onChange={e => setData(e, 'place')}
                       value={placeValue}
                />
            </section>
            <section className={'flex flex-row justify-between w-full items-center'}>
                <input type="text"
                       className={'border-0 outline-0 p-4 text-white bg-transparent'}
                       placeholder={'TITLE'}
                       onChange={e => setData(e, 'title')}
                       value={titleValue}
                />
                <IconButton sx={{
                    color: '#F73F08'
                }}
                            onClick={handleNextButton}
                >
                    <ArrowForwardIosOutlinedIcon/>
                </IconButton>
            </section>
        </>
    );
}
