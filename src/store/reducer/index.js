import * as Types from '@/store/action-types';

let initState = {
    type: 'all',
    todoList: [
        {id: 1, content: '编程', isSelected: false},
        {id: 2, content: '锻炼', isSelected: true},
    ]
};

function reducer(state = initState, action) {
    switch (action.type) {
        case Types.ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList, action.todo]
            };
        case Types.CHANGE_SELECT:
            return {
                ...state,
                todoList: [...state.todoList.filter(item => {
                    if (item.id === action.id) {
                        item.isSelected = !item.isSelected;
                    }
                    return item;
                })]
            };
        case Types.DEL_TODO:
            return {
                ...state,
                todoList: [...state.todoList.filter(item => (item.id !== action.id))]
            };
        case Types.CHANGE_TYPE:
            return {...state, type: action.typeValue};
        default:
            return state;
    }
}

export default reducer;