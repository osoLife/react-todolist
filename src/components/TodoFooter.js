import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from "@/store/action";

class TodoFooter extends Component {
    render() {
        let {changeType, type} = this.props;

        return (
            <div>
                <ul className="nav nav-pills" onClick={(e) => {
                    changeType(e.target.dataset.type);
                }}>
                    <li className={type === 'all' ? 'active' : ''}><a href="#" data-type="all">全部</a></li>
                    <li className={type === 'finish' ? 'active' : ''}><a href="#" data-type="finish">已完成</a></li>
                    <li className={type === 'unFinish' ? 'active' : ''}><a href="#" data-type="unFinish">待完成</a></li>
                </ul>
            </div>
        )
    }
}

export default connect((state) => ({...state}), actions)(TodoFooter);