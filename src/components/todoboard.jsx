import React from 'react';
import TodoItem from './todoitem';

function TodoBoard(props) {
    // console.log("todo board", props);
    return(
        <div className='todo-board'>
            {props.todoList.map((item, index) => 
                <TodoItem 
                    key={index} 
                    item={item}
                    index={index}
                    onDelete={props.onDeleteTodo}
                    onComplete={props.onCompleteTodo}
                />
            )}
        </div>
    )
}

export default TodoBoard;