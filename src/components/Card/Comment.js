import React, {Component} from 'react';

class Comment extends Component{
    render(){
        return (
            <div className="row" key={this.props.index}>
                <div className="col-xs-4">
                    {this.props.comment.commentText}
                </div>
                <div className="col-xs-4">
                    {this.props.comment.commentDate.toDateString()}
                </div>
            </div>
        )
    }

}

export default Comment;