import React, {Component} from 'react';
import TodoHeader from '@/components/TodoHeader';
import TodoList from '@/components/TodoList';
import TodoFooter from '@/components/TodoFooter';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3" style={{marginTop: "80px"}}>
                        <div className="panel panel-success">
                            <div className="panel-heading">
                                <TodoHeader/>
                            </div>
                            <div className="panel-body">
                                <TodoList/>
                            </div>
                            <div className="panel-footer">
                                <TodoFooter/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;