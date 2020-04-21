import React from "react";
import s from './News.module.css';
import NewPosts from "./NewPosts/NewPosts";

const News = (props) => {
    return (
        <div className={s.content}>
            <div className={s.tatile}>
                Cheść Yuriy!

            </div>
            <div>
                <img className={s.yuriy}
                     src="https://scontent.flwo4-1.fna.fbcdn.net/v/t1.0-9/14725661_187501268363009_1527371387567084529_n.jpg?_nc_cat=109&_nc_sid=dd9801&_nc_oc=AQlw1aXXUzK01v8Xe8VQJ7Vuq24Hkplg5o9V6SmPqfx_Qb4liahqvxkxWAE3qRdnNg8&_nc_ht=scontent.flwo4-1.fna&oh=dc8cf44722bb14030fa7236dcf757290&oe=5EAB9399"
                     alt=""/>
            </div>
            <NewPosts/>
        </div>
    )
};

export default News;