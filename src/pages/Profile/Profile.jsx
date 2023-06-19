import styles from './Profile.module.css'
import {AccountBanner} from "../../components/Profile/AccountBanner/AccountBanner";
import {AccountNameSection} from "../../components/Profile/AccountNameSection/AccountNameSection";
import {ShortDescription} from "../../components/Profile/ShortDescription/ShortDescription";
import {InfoSection} from "../../components/Profile/InfoSection/InfoSection";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import Typography from "@mui/material/Typography";
import OpenInFullOutlinedIcon from '@mui/icons-material/OpenInFullOutlined';
import {SwitchSections} from "../../components/Profile/SwitchSections/SwitchSections";
import {PostsSection} from "../../components/Profile/PostsSection/PostsSection";
import {useState} from "react";
import {set} from "mobx";

export const Profile = () => {
    const [value, setValue] = useState(0);

    const TABS = [
        {
            label: 'POSTS',
            value: 0
        },
        {
            label: 'COMMENTS',
            value: 1
        },
        {
            label: 'SCORE',
            value: 2
        },
    ];

    return(
        <section className={'flex flex-col pt-12'}>
            <section className={'bg-[#121212]'}>
                <AccountBanner src={'https://images.unsplash.com/photo-1485113771930-4e8b61c60d64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'}/>
                <section className={'px-5'}>
                    <AccountNameSection accountPhotoSrc={''} nickname={'pablo'} extraStyles={'mt-[-40px] mb-4'}/>
                    <ShortDescription description={'Very short'}/>
                </section>
                <Accordion sx={{
                    backgroundColor: '#121212',
                    marginTop: '1rem',
                    '&:before': {
                        display: 'none'
                    },
                    '&:last-of-type': {
                        borderBottomLeftRadius: '0.75rem',
                        borderBottomRightRadius: '0.75rem',
                    }
                }}>
                    <AccordionSummary
                        expandIcon={<OpenInFullOutlinedIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{
                            backgroundColor: '#121212',
                        }}
                    >
                        <Typography>Personal Info</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{
                        backgroundColor: '#121212',
                        borderBottomLeftRadius: '0.75rem',
                        borderBottomRightRadius: '0.75rem',
                    }}>
                        <InfoSection data={{
                            name: 'Andrey',
                            surname: 'Cherniak'
                        }}/>
                    </AccordionDetails>
                </Accordion>
            </section>
            <section className={'flex flex-col bg-[#121212] mt-5 rounded-xl'}>
                <SwitchSections tabs={TABS} value={value} setValue={setValue}/>
                <PostsSection/>
            </section>
        </section>
    )
};

