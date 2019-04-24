import React from 'react';
import p from './Post.module.css';
class Post extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {

        return (
            <div className={p.item}>
                <img src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png" />
                {this.props.message}
            <div>
                    <span>LIKE</span>
                    <span>{this.props.count}</span>
                </div>
            </div>

        )
    }
}

export default Post;