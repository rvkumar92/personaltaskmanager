import TaskDispatcher from '../dispatcher/TaskDispatcher';
import Constants from '../constants/Constants';

var TaskActions = {
    loadTaskData(taskData){
        TaskDispatcher.handleViewActions({
            actionType: Constants.LOAD_TASK_DATA,
            taskData: taskData
        })
    }
}

export default TaskActions;