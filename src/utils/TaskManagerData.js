import TaskActions from '../actions/TaskActions';

var board = [];
var listOfLists = {};
var cards = [];
var card = {};
//card data
card = {
    title: "Card title",
    description: "description",
    comments: [
        {
            text: "Comment 1",
            date: "10/11/2016"
        },
        {
            text: "Comment 1",
            date: "10/11/2016"
        },
        {
            text: "Comment 1",
            date: "10/11/2016"
        }
    ]
};

cards.push(card);
cards.push(card);
cards.push(card);
//list data
var listOfLists1 = {
    header: "List",
    id: 1,
    cards: cards 
}
var listofLists = [];
listofLists.push(listOfLists1);
board.push(listOfLists);


var _taskData = [
            {
                header: "List",
                id: 1,
                list:[
                    {
                        listId: 1,
                        id: 1,
                        title: "Card title",
                        description: "Card description",
                        comments: [
                            {
                                text: "Comment 1",
                                date: "10/11/2016"
                            },
                            {
                                text: "Comment 1",
                                date: "10/11/2016"
                            },
                            {
                                text: "Comment 1",
                                date: "10/11/2016"
                            }
                        ]
                    },
                    {
                        listId: 1,
                        id: 2,
                        title: "Card title",
                        description: "Card description",
                        comments: [
                            {
                                text: "Comment 1",
                                date: "10/11/2016"
                            },
                            {
                                text: "Comment 1",
                                date: "10/11/2016"
                            },
                            {
                                text: "Comment 1",
                                date: "10/11/2016"
                            }
                        ]
                    },
                    {
                        listId: 1,
                        id: 3,
                        title: "Card title",
                        description: "Card description",
                        comments: [
                            {
                                text: "Comment 1",
                                date: "10/11/2016"
                            },
                            {
                                text: "Comment 1",
                                date: "10/11/2016"
                            },
                            {
                                text: "Comment 1",
                                date: "10/11/2016"
                            }
                        ]
                    }
                ]
            },
            {
                header: "List",
                id: 2,
                list:[
                    {
                        listId:2,
                        id: 1,
                        title: "Card title",
                        description: "Card description",
                        comments: [
                            {
                                text: "Comment 1",
                                date: "10/11/2016"
                            },
                            {
                                text: "Comment 1",
                                date: "10/11/2016"
                            },
                            {
                                text: "Comment 1",
                                date: "10/11/2016"
                            }
                        ]
                    },
                    {
                        listId:2,
                        id: 2,
                        title: "Card title",
                        description: "Card description",
                        comments: [
                            {
                                text: "Comment 1",
                                date: "10/11/2016"
                            },
                            {
                                text: "Comment 1",
                                date: "10/11/2016"
                            },
                            {
                                text: "Comment 1",
                                date: "10/11/2016"
                            }
                        ]
                    }
                ]
            },
            {
                header: "List",
                id: 3,
                list:[
                    {
                        listId: 3,
                        id: 1,
                        title: "Card title",
                        description: "Card description",
                        comments: [
                            {
                                text: "Comment 1",
                                date: "10/11/2016"
                            },
                            {
                                text: "Comment 2",
                                date: "10/11/2016"
                            },
                            {
                                text: "Comment 3",
                                date: "10/11/2016"
                            }
                        ]
                    }
                ]
            }
        ];

module.exports = {
    loadTaskData(){
        TaskActions.loadTaskData(_taskData);
    }
}
