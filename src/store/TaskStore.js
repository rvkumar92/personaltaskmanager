import TaskDispatcher from '../dispatcher/TaskDispatcher';
import Constants from '../constants/Constants';
import assign from 'object-assign';
import {EventEmitter} from 'events';

var CHANGE_EVENT = 'change';

var _taskData = [];

var _cards = [];
var _listOfLists = {};
var _list = [];
var _boards = [];


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
    },
    getCards(){
        return _cards;
    },
    setCards(card){
        _cards.push(card);
    },
    setListOfLists(listOfLists){
        console.log(listOfLists);
        _taskData.push(listOfLists);
    },
    getListOfLists(){
        return _listOfLists;
    },
    getListCount(){
        return _list.length;
    },
    getBoards(){
        return _boards;
    },
    setBoard(boardData){
        _boards = boardData;
    },
    deleteListFromBoard(listToDelete){
        console.log('list',listToDelete);
        var index = _taskData.findIndex(x => x.id == listToDelete.id);        
        console.log('index',index);
        _taskData.splice(index,1);
        //var index = _taskData.findIndex(i => i._id.$oid === listToDelete.id);
        //_notes.splice(index,1);
    }
});

TaskDispatcher.register(function(payload){
    var action = payload.action;
    switch (action.actionType){
        case Constants.LOAD_TASK_DATA:
            TaskStore.setTaskData(action.taskData);
            TaskStore.emit(CHANGE_EVENT);
            break;
        case Constants.SET_BOARD_DATA:
            TaskStore.setBoard(action.boardData);
            TaskStore.emit(CHANGE_EVENT);
            break;
        case Constants.SET_LIST_OF_LISTS:
            TaskStore.setListOfLists(action.listOfLists);
            TaskStore.emit(CHANGE_EVENT);
            break;
        case Constants.SET_CARD_DATA:
            TaskStore.setCard(action.cardData);
            TaskStore.emit(CHANGE_EVENT);
            break;
        case Constants.DELETE_LIST_FROM_BOARD:
            TaskStore.deleteListFromBoard(action.listToDelete);
            TaskStore.emit(CHANGE_EVENT);
    }
    return true;
});

export default TaskStore;