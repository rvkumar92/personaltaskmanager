import React, {Component} from 'react';
import TaskStore from '../../store/TaskStore';
import TaskActions from '../../actions/TaskActions';
import ListOfCards from '../Card/ListOfCards';

class ListOfLists extends Component{
    constructor(props){
        super(props);
        this.state = {
            taskData: TaskStore.getTaskData()
        }
    }
    render(){
        return(
            <div className="row">
                {
                    this.state.taskData.map((task,i)=>{
                        return(
                            <div className="col-xs-3" key={i}>
                                <div className="well">
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <strong>{task.header} {task.id}</strong>
                                            <button className="btn btn-sm btn-default pull-right" onClick={this.deleteList.bind(this,task)}>Delete this list</button>
                                        </div>
                                    </div>
                                    
                                    {
                                        task.list.map((card,index)=>{
                                            return <ListOfCards card={card} index={index}/>
                                        })
                                    }
                                    <button className="btn btn-sm btn-default">Add new card...</button>
                                </div>
                            </div>
                        )
                        
                    })
                }
                <button className="btn btn-default btn-sm">Add new list...</button>
            </div>
        ) 
    }
    deleteList(task,event){
        console.log(task);
    }
}

export default ListOfLists;