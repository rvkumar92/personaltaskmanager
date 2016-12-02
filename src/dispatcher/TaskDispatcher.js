import {Dispatcher} from 'flux';
import ObjectAssign from 'object-assign';

var TaskDispatcher = ObjectAssign(new Dispatcher(),{
    handleViewActions(action){
        var payload = {
            action: action,
            source: 'VIEW_ACTION'
        };
        this.dispatch(payload);
    }
})

export default TaskDispatcher;