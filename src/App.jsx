import './App.css';
import { useState } from 'react';
import TodoBoard from './components/todoboard';
import TodoInput from './components/todoinput';
import DoneBoard from './components/doneboard';
// 인풋 컴포넌트 & 버튼
// 인풋 창 & 버트 클릭 => 아이템 추가
// 삭제 버튼 누르면 => 삭제

// 컴포넌트화 >>>> 투두 아이템

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  
  const addtodoitem = () => {
    console.log("adding todo item", inputValue);
    setTodoList([...todoList, inputValue]);
    setInputValue(''); 
  }

  const deleteTodoItem = (indexToDelete) => {
    console.log("deleting todo at index:", indexToDelete);
    const newTodoList = todoList.filter((item, index) => index !== indexToDelete);
    setTodoList(newTodoList);
  }

  const completeTodoItem = (indexToComplete) => {
    console.log("completing todo at index:", indexToComplete);
    const completedItem = todoList[indexToComplete];
    const newTodoList = todoList.filter((item, index) => index !== indexToComplete);
    setTodoList(newTodoList);
    setDoneList([...doneList, completedItem]);
  }

  return (
    <main>
      <h1 className="title">Todo List</h1>
      <TodoInput 
        inputValue={inputValue}
        setInputValue={setInputValue}
        onAddTodo={addtodoitem}
      />

      <TodoBoard 
        todoList={todoList}
        onDeleteTodo={deleteTodoItem}
        onCompleteTodo={completeTodoItem}
      />

      <DoneBoard doneList={doneList} />
    </main>
  );
}

export default App;
