import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        let {item, changeSelect, delTodo} = this.props;

        return (
            <li className="list-group-item">
                <div className="checkbox">
                    <label>
                        <input type="checkbox" checked={item.isSelected} onChange={() => {
                            changeSelect(item.id)
                        }}/> {item.content}
                    </label>
                    <button className="close" onClick={() => {
                        delTodo(item.id);
                    }}>&times;</button>
                </div>
            </li>
        )
    }
}

export default TodoItem;