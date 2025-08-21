function TodoInput(props) {
    return (
        <div className='todo-input-wrapper'>
            <input 
                type="text" 
                value={props.inputValue}
                placeholder="할 일을 입력하세요"
                onChange={(event)=>props.setInputValue(event.target.value)}
            />
            <button onClick={props.onAddTodo}>추가</button>
        </div>
    )
}

export default TodoInput;