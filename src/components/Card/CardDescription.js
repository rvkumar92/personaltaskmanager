import React, {Component} from 'react';
import TaskActions from '../../actions/TaskActions';
class CardDescription extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs-10">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <p>{this.props.singleCard.description}.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-2">
                    <button className="btn btn-default" onClick={this.deleteCardFromList.bind(this,this.props.singleCard)}>Delete Card</button>
                </div>
            </div>
        )
    }
    deleteCardFromList(cardToDelete,event){
        TaskActions.deleteCardFromList(cardToDelete);
    }
}

export default CardDescription;