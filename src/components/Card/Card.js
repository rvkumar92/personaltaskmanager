import React, {Component} from 'react';
import CardDescription from './CardDescription';
import CommentList from './CommentList';

class Card extends Component{
    render(){
        return(
            <div className="well">
                <h4>Card Title</h4>
                <CardDescription />
                <CommentList />    
            </div>
        )
    }
}

export default Card;