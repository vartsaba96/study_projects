import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../state/profilePageReducer";


const MyPosts = (props) => {
    let postsComponent = props.posts.map(po => <Post count={po.count} message={po.message}/>);
    let newPost = React.createRef();


    let addPost = () => {
        props.dispatch(addPostActionCreator());

    }
    let newPostOnChange = () => {
        let text = newPost.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }
    return (
        <div className={s.postsBlock}>
            <h1>My posts</h1>
            <div>
                <textarea onChange={newPostOnChange} ref={newPost} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsComponent}
            </div>
        </div>
    )
}

export default MyPosts;