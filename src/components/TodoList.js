import React, {Component} from 'react';
import TodoItem from '@/components/TodoItem';
import {connect} from 'react-redux';
import actions from "@/store/action";

class TodoList extends Component {
    filterTodo() {
        let todoList = [];
        if(this.props.type === 'all') {
            todoList = this.props.todoList;
        } else if(this.props.type === 'finish') {
            todoList = this.props.todoList.filter(item => {
                return item.isSelected
            })
        } else if(this.props.type === 'unFinish') {
            todoList = this.props.todoList.filter(item => {
                return !item.isSelected
            })
        }
        return todoList;
    }

    render() {
        let {changeSelect,delTodo} = this.props;
        return (
            <div>
                <ul className="list-group">
                    {
                        this.filterTodo().map((item,index) => (
                            <TodoItem key={index} item={item} changeSelect={changeSelect} delTodo={delTodo}/>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default connect((state) => ({...state}), actions)(TodoList);