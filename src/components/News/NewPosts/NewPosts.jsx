import React, {Component} from 'react';
import s from './NewPosts.module.css';
import NewPost from "./NewPost/NewPost";

const NewPosts = () => {
    return <div>My post

        <div>New post</div>
        <div>
            <NewPost message='Hi, how are you?' likesCount='0'/>
            <NewPost message="It's my first post" likesCount='23'/>
        </div>
    </div>

};

export default NewPosts;