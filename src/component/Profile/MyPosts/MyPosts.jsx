import React, {Component} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {reduxForm,Field} from 'redux-form';
import {required,maxLengthCreator} from './../../../utils/validators';
import {Textarea} from './../../common/formsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);



class MyPosts extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return nextProps !== this.props || nextState !== this.state;

    }
    render(){
        console.log("Render")
    let postsComponent = this.props.posts.map(po => <Post count={po.count} message={po.message}/>);
    let newPost = React.createRef();

    let addNewPost = (values)=>{
        this.props.addPost(values.newPost);
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
}
const AddNewPost = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
             <div>
                <Field component={Textarea} name="newPost" placeholder="Enter your post" 
                validate={[required, maxLength10 ]} />
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