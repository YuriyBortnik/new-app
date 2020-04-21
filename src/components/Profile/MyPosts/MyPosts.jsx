import React, {Component} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import * as posts from "react-bootstrap/cjs/ElementChildren";

const MyPosts = (props) => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},

    ]


    let postsElement =
        posts.map(p => <Post massage={p.message} likesCount={p.likesCount}/>);

    return <div className={s.postBlock}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea> </textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <div>New post</div>
        <div className={s.posts}>
            {postsElement}
        </div>
    </div>

};

export default MyPosts;