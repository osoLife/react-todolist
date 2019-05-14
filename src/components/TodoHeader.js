import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from "@/store/action";

class TodoHeader extends Component {
    render() {
        let {addTodo} = this.props;

        return (
            <div className="text-center">
                <h1>待办事项</h1>
                <input type="text" onKeyUp={(e) => {
                    if (e.keyCode === 13 && e.target.value !== '') {
                        addTodo({
                            id: Math.random(),
                            content: e.target.value,
                            isSelected: false
                        });
                        e.target.value = '';
                    }
                }} className="form-control" placeholder="回车添加任务"/>
            </div>
        )
    }
}

export default connect((state) => ({...state}), actions)(TodoHeader);