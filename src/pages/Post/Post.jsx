import React from "react";
import Post from "../../components/Home/Post/Post";
import {CommentSection} from "../../components/Post/CommentSection/CommentSection";

const PHOTO = 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

export const PostPage = ({}) => {
    return (
        <section className={'pt-10 pb-12 flex flex-col items-center'}>
            <Post photoSrc={PHOTO} isPostView={true}/>
            <CommentSection/>
        </section>
    );
}
