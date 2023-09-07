import {HeaderGroup} from "../../components/Add/HeaderGroup/HeaderGroup";
import {FooterButtonGroup} from "../../components/Add/FooterButtonGroup/FooterButtonGroup";
import {useContext, useRef, useState} from "react";
import {ChoosePostPlace} from "../../components/Add/ChoosePostPlace/ChoosePostPlace";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";


import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Add.css';

export const Add = observer(() => {
    const {user} = useContext(Context);
    const [page, setPage] = useState(0);
    const [loadedImg, setLoadedImg] = useState('');

    const inputElement = useRef();

    const [value, setValue] = useState('');

    const formats = [
        'bold', 'italic', 'underline', 'strike',
        'link',
    ];

    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline','strike'],
            ['link'],
            ['clean']
        ],
    };


    const [data, setData] = useState({
        description: '',
        isNSFW: false,
        photo: '',
        creator_type: 'user',
        creatorId: user.getUser().id,
        place: ''
    });

    const changeDescription = (e) => {
        setValue(e);
        inputElement.current.innerHTML = e;
        setData(prevState => {
            return {
                ...prevState,
                description: e
            }
        })
    }


    const handleDataChange = (e, key) => {
        const value = key !== 'photo' ? e.target.value : e.files[0];
        setData(prevState => {
            return {
                ...prevState,
                [key]: value
            }
        })
    }


    return (
        <section
            className={'pt-12 pb-14 flex flex-col items-center justify-between bg-black flex-wrap w-full h-[100vh]'}>
            {
                page === 0 ?
                    <>
                        <div className={'flex flex-col w-full'}>
                            <HeaderGroup setPage={setPage} titleValue={data.title} setData={handleDataChange}/>
                            <main>
                                <div ref={inputElement} className={'text-white w-full break-words max-h-[18rem] overflow-auto px-3'}>
                                    {/*    Value*/}
                                </div>
                            </main>
                        </div>
                        <img src={!loadedImg ? '#' : loadedImg} alt={'Your picture/video'}
                             className={'h-[10rem] w-full'}/>


                        <section className={'max-h-[11rem] w-full'}>
                            <ReactQuill theme={'snow'} value={value} onChange={changeDescription} formats={formats} modules={modules}/>
                            <FooterButtonGroup setLoadedImg={setLoadedImg} handleDataChange={handleDataChange}/>
                        </section>
                    </>
                    :
                    <>
                        <ChoosePostPlace setPage={setPage} data={data}/>
                    </>
            }

        </section>
    );
});
