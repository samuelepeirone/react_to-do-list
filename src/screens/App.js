import logo from '../assets/images/logo.svg';
import { useState, useEffect } from 'react';
import '../assets/css/App.css';
import InputBox from '../funcComponents/InputBox'
import Button from '../funcComponents/Button'
import List from '../funcComponents/List'

function App() {
  const [state, setState] = useState(
    {
      todo: [], //al click del bottone aggiungo al vettore todo la variabile tdtask
      message: ''
    }
  )
  useEffect(
    () => {
      console.log('componente pronto -> didMount')
      console.log('todocambiato', state.todo[state.todo.length - 1])
    },[]
  )
  function getTask(task) {
    setState({
      ...state,
      message: task
    })
  }
  function invia() {
    console.log('invia')
    console.log(state.tdtask)
    const templist = state.todo
    templist.push(state.message)
    setState({
      ...state,
      todo: templist,
      message: ''
    })
    console.log(state.todo)
  }
  return (
    <div className="App">
      <h1>La tua to-do list</h1>
      <InputBox
        inputType={'text'}
        inputPlaceholder={'inserisci un task'}
        inputMaxLength={60}
        callbackInput={getTask}
        value={state.message}
      />
      <Button
        name={'invia'}
        callbackButton={invia}
      />
      <List 
        toDoList={state.todo}
      />
    </div>
  );
}
export default App;
