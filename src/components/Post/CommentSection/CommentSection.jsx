import {Comment} from "./components/Comment/Comment";

export const CommentSection = ({}) => {
    return (
        <section className={'flex flex-col bg-[#121212] rounded-t'}>
            <h1 className={'text-white text-2xl text-center'}>Comments Section</h1>
            <Comment isCreator={true}/>
            <Comment/>
            <Comment extraStyles={'ml-5'}/>
            <Comment extraStyles={'ml-5'}/>
            <Comment/>
            <Comment/>
        </section>
    );
}
