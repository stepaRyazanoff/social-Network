import React from 'react'
import Posts from "./Posts/Posts";
import {addPostAC, updatePostTextAC} from "../../redux/profileReducer";
import {connect} from "react-redux";

class PostsContainer extends React.Component {

    addPost() {
        this.props.addPost()
    }

    updatePostText(text) {
        this.props.updatePostText(text)
    }

    render() {
        return (
            <Posts posts={this.props.posts}
                   postText={this.props.postText}
                   addPost={this.addPost.bind(this)}
                   updatePostText={this.updatePostText.bind(this)}/>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.profilePage.posts,
    postText: state.profilePage.postText
})

export default connect(mapStateToProps, {
    addPost: addPostAC,
    updatePostText: updatePostTextAC
})(PostsContainer)