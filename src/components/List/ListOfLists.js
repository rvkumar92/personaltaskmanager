import React, {Component} from 'react';
import TaskStore from '../../store/TaskStore';
import TaskActions from '../../actions/TaskActions';
import ListOfCards from '../Card/ListOfCards';

class ListOfLists extends Component{
    constructor(props){
        super(props);
        this.state = {
            taskData: TaskStore.getTaskData(),
            listOfLists: TaskStore.getListOfLists(),
            listCount: TaskStore.getListCount(),
            boards: TaskStore.getBoards(),
            selectedBoard: []
        }
    }
    render(){
        return(
            <div className="board">
                {
                    this.state.taskData.map((board,i)=>{
                        return(
                            <div className="cardBoard" key={i}>
                                <div className="well">
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <strong>{board.header} {board.id}</strong>
                                            <button className="btn btn-sm btn-default pull-right" onClick={this.deleteList.bind(this,board)}>Delete this list</button>
                                        </div>
                                    </div>
                                    {
                                        board.list.map((card,index,board)=>{
                                            return <ListOfCards card={card} index={index}/>
                                        })
                                    }
                                    <button className="btn btn-sm btn-default" onClick={this.addNewCard.bind(this,board)}>Add new card...</button>
                                </div>
                            </div>
                        )
                        
                    })
                }
                <button className="btn btn-default btn-sm cardBoardButton" onClick={this.addNewList.bind(this)}>Add new list...</button>
            </div>
        ) 
    }
    addNewCard(board,event){
        var card = {
            listId: board.list.id,
            id: board.list.length + 1,
            title: "Card title",
            desription: "This is the description of the card to be created.",
            comments: []
        };
        TaskActions.setNewCard(card,board);
    }
    addNewList(event){
        var listOfLists = {
            header: "List",
            id: this.state.taskData.length + 1,
            list: []
        };
        TaskActions.setListOfLists(listOfLists);
    }
    deleteList(task,event){
        TaskActions.deleteListFromBoard(task);
    }
}

export default ListOfLists;