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
        var index = _taskData.findIndex(x => x.id == listToDelete.id);        
        _taskData.splice(index,1);    
    },
    setNewCard(card,board){
        for(let value of _taskData ){
            if(value.id == board.id){
                value.list.push(card);
            }
        }
    },
    deleteCardFromList(cardToDelete){
        for(let list of _taskData){
            for(let card of list.list){
                if(card.listId == cardToDelete.listId){
                    list.list.splice(cardToDelete.id - 1);
                }
            }
        }
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
        case Constants.SET_NEW_CARD:
            TaskStore.setNewCard(action.card,action.board);
            TaskStore.emit(CHANGE_EVENT);
            break;
        case Constants.DELETE_CARD_FROM_LIST:
            TaskStore.deleteCardFromList(action.cardToDelete);
            TaskStore.emit(CHANGE_EVENT);
            break;
    }
    return true;
});

export default TaskStore;