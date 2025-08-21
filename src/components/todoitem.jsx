function TodoItem(props) {
    return (
        <div className='todo-item-wrapper'>
            <div className='todo-item'>
                {props.item}
            </div>
            <button onClick={() => props.onDelete(props.index)} className='delete-button'>삭제</button>
            <button onClick={() => props.onComplete(props.index)} className='complete-button'>완료</button>
        </div>
    )
}

export default TodoItem;