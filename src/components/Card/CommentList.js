import React, {Component} from 'react';
import Comment from './Comment';
class CommentList extends Component{
    constructor(props){
        super(props);
        this.state = {
            commentList: [],
            comment: {
                commentId: 0,
                commentText : "",
                commentDate : ""
            }
        }
    }
    handleComment(event){
        event.preventDefault();
        this.setState({
            comment: {
                commentText: event.target.value.trim(),
                commentDate: new Date()
            }
        });
    }
    addNewComments(event){
        event.preventDefault();
        var comments = this.state.commentList;
        comments.push(this.state.comment);
        this.setState({
            commentList: comments
        });
        this.refs.commentArea.value = "";
    }
    render(){
        return(
            <div>
                <form>
                    <div className="row">
                        <div className="col-xs-12">
                            <textarea rows="5" cols="95" ref="commentArea" onChange={this.handleComment.bind(this)}></textarea>
                        </div>
                    </div>
                    <button className="btn btn-default" onClick={this.addNewComments.bind(this)}>Add Comment</button>
                </form>
                {
                    this.state.commentList.map((comment,index)=>{
                        return <Comment comment={comment} index={index} />
                    })
                }
            </div>
        )
    }

}

export default CommentList;