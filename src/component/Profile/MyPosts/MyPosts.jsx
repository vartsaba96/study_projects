import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {reduxForm,Field} from 'redux-form';

const MyPosts = (props) => {
    let postsComponent = props.posts.map(po => <Post count={po.count} message={po.message}/>);
    let newPost = React.createRef();

    let addNewPost = (values)=>{
        props.addPost(values.newPost);
    }
    return (
        <div className={s.postsBlock}>
             <h1>My posts</h1>
             <AddNewPostRedux onSubmit={addNewPost} />
        <div className={s.posts}>
            {postsComponent}
        </div>
        </div>
    )
}

const AddNewPost = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
             <div>
                <Field component="textarea" name="newPost" placeholder="Enter your post"/>
            </div>
             <div>
                <button>Add post</button>
             </div>
        </form>
    )
}

const AddNewPostRedux = reduxForm({
    form: "newPostForm"
})(AddNewPost);

export default MyPosts;