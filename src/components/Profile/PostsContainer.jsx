import {addPostAC, updatePostTextAC} from "../../redux/profileReducer";
import Posts from "./Posts/Posts";

class ProfileContainer extends React.Component {
    constructor() {
        super()
    }

    addPost() {
        this.props.dispatch(addPostAC())
    }

    updatePostText(text) {
        this.props.dispatch(updatePostTextAC(text))
    }

    render(){
        return(
            <div><Posts dispatch={this.props.dispatch} posts={this.props.posts}/></div>
        )
    }
}

export default ProfileContainer