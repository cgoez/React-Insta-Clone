import React from "react";
// import PostContainer from "./src/components/PostContainer/PostContainer";

class CommentSection extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			comments: this.props.commentList,
			username:"Guest",
			newComment: ""
		}
	}

	// handle new comments being typed in
	handleNewComment = (event) => {
		this.setState( {newComment: event.target.value });
		console.log(event.target.value);
	}

	// add new comments to a post's list of comments
	addNewComment = () => {
		const commentBox = this.state.comments;
		commentBox.push({username: this.state.username, text: this.state.newComment});
		this.setState({ comments: commentBox, newComment: "" });
	}

	render() {
		// console.log('comments: ', this.state.comments);
	  return(
	    <div>
	    	{this.state.comments.map((comment, index) => (
	    		[
	    			<div>{comment.username}</div>,
	    			<div>{comment.text}</div>
					]
				))}
				<div>
					<form>
						<input
						 type="text"
						 name="newComment"
						 value={this.state.newComment}
						 onChange={this.handleNewComment}
						 placeholder= "Add a comment..."/>
						<button type="button" onClick={this.addNewComment}>...</button>
					</form>
				</div>
	    </div>
		);
	}
}

export default CommentSection;
