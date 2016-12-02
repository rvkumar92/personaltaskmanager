import TaskDispatcher from '../dispatcher/TaskDispatcher';
import Constants from '../constants/Constants';
import assign from 'object-assign';
import {EventEmitter} from 'events';

var CHANGE_EVENT = 'change';

var _taskData = [];

var TaskStore = assign({},EventEmitter.prototype,{
    addChangeListener(callback){
        this.on('change',callback);
    },
    removeChangeListener(callback){
        this.removeListener('change',callback);
    },
    emitChange(){
        this.emit(CHANGE_EVENT);
    },
    getTaskData(){
        return _taskData;
    },
    setTaskData(taskData){
        _taskData = taskData;
    }

});

TaskDispatcher.register(function(payload){
    var action = payload.action;
    switch (action.actionType){
        case Constants.LOAD_TASK_DATA:
            TaskStore.setTaskData(action.taskData);
            TaskStore.emit(CHANGE_EVENT)
            break;
    }
    return true;
});

export default TaskStore;