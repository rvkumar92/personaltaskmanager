import React, {Component} from 'react';
import Header from './Header.js';
import TaskStore from '../store/TaskStore';
import ListOfLists from './List/ListOfLists';

class TaskManager extends Component{
    constructor(props){
        super(props);
        this.state = getAppState();
    }
    componentDidMount(){
        TaskStore.addChangeListener(this.onChange);
    }
    componentWillUnmount(){
        TaskStore.removeChangeListener();
    }
    onChange(){
      this.setState(getAppState());
    }
    createNewList(event){
        this.setState({
            isCreateNewList: true
        })
    }
    render(){
        return(
            <div>
                <Header />
                <ListOfLists taskData={this.state.taskData} />
                
            </div>
        ) 
    }
}

function getAppState(){
    return {
        taskData: TaskStore.getTaskData()
    }
}

export default TaskManager;