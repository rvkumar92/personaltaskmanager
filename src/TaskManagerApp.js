import React from 'react';
import ReactDom from 'react-dom';
import TaskManager from './components/TaskManager.js'
import TaskManagerData from './utils/TaskManagerData';

TaskManagerData.loadTaskData();

ReactDom.render(<TaskManager />, document.getElementById('task-container'))