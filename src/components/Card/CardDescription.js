import React, {Component} from 'react';

class CardDescription extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs-10">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <p>This is the description of the card to be created.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-2">
                    <button className="btn btn-default">Delete Card</button>
                </div>
            </div>
        )
    }
}

export default CardDescription;