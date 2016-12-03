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
            boards: TaskStore.getBoards()
        }
    }
    render(){
        console.log('boads',this.state.taskData);
        return(
            <div className="row">
                {
                    this.state.taskData.map((board,i)=>{
                        return(
                            <div className="col-xs-3" key={i}>
                                <div className="well">
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <strong>{board.header} {board.id}</strong>
                                            <button className="btn btn-sm btn-default pull-right" onClick={this.deleteList.bind(this,board)}>Delete this list</button>
                                        </div>
                                    </div>
                                    
                                    {
                                        board.list.map((card,index)=>{
                                            return <ListOfCards card={card} index={index}/>
                                        })
                                    }
                                    <button className="btn btn-sm btn-default">Add new card...</button>
                                </div>
                            </div>
                        )
                        
                    })
                }
                <button className="btn btn-default btn-sm" onClick={this.addNewList.bind(this)}>Add new list...</button>
            </div>
        ) 
    }
    addNewList(event){
        var listOfLists = {
            header: "List",
            id: this.state.taskData.length + 1,
            list: []
        };
        TaskActions.setListOfLists(listOfLists).bind(this);
    }
    deleteList(task,event){
        console.log(task);
        TaskActions.deleteListFromBoard(task);
    }
}

export default ListOfLists;