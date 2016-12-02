import React, {Component} from 'react';
import Card from './Card';
import TaskStore from '../../store/TaskStore';
import TaskActions from '../../actions/TaskActions';
import {Modal,Button} from 'react-bootstrap';

class ListOfCards extends Component{
    constructor(props){
        super(props);
        this.state = {
            showModal: false
        }
    }
    open(){
        this.setState({showModal: true})
    }
    close(){
        this.setState({showModal: false})
    }
    render(){
        return(
            <div>
                <div className="panel panel-default" key={this.props.index}>
                    <div className="panel-body" onClick={this.open.bind(this)} style={{height:'10em'}}>
                        <p>{this.props.card.title}</p>    
                    </div>
                </div>
                <Modal show={this.state.showModal} bsSize="large" onHide={this.close.bind(this)}>
                    <Modal.Body>
                        <Card />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>        
        ) 
    }   
}

export default ListOfCards;