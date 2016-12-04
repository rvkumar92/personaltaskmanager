import TaskDispatcher from '../dispatcher/TaskDispatcher';
import Constants from '../constants/Constants';

var TaskActions = {
    loadTaskData(taskData){
        TaskDispatcher.handleViewActions({
            actionType: Constants.LOAD_TASK_DATA,
            taskData: taskData
        })
    },
    setBoardData(boardData){
        TaskDispatcher.handleViewActions({
            actionType: Constants.SET_BOARD_DATA,
            boardData: boardData
        })
    },
    setCardData(cardData){
        TaskDispatcher.handleViewActions({
            actionType: Constants.SET_CARD_DATA,
            cardData: cardData
        })
    },
    setListOfLists(listOfLists){
        TaskDispatcher.handleViewActions({
            actionType: Constants.SET_LIST_OF_LISTS,
            listOfLists: listOfLists
        })
    },
    deleteListFromBoard(list){
        TaskDispatcher.handleViewActions({
            actionType: Constants.DELETE_LIST_FROM_BOARD,
            listToDelete: list
        })
    },
    setNewCard(card,board){
        TaskDispatcher.handleViewActions({
            actionType: Constants.SET_NEW_CARD,
            card: card,
            board: board
        })
    },
    deleteCardFromList(cardToDelete){
        TaskDispatcher.handleViewActions({
            actionType: Constants.DELETE_CARD_FROM_LIST,
            cardToDelete: cardToDelete
        })
    }
}

export default TaskActions;