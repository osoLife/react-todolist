import * as Types from '@/store/action-types';

let actions = {
    addTodo(todo) {
        return {
            type: Types.ADD_TODO,
            todo
        }
    },
    changeSelect(id) {
        return {
            type: Types.CHANGE_SELECT,
            id
        }
    },
    delTodo(id) {
        return {
            type: Types.DEL_TODO,
            id
        }
    },
    changeType(typeValue) {
        return {
            type: Types.CHANGE_TYPE,
            typeValue
        }
    }
};

export default actions;