import TaskActions from '../actions/TaskActions';

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
