import logo from '../assets/images/logo.svg';
import { useState, useEffect } from 'react';
import '../assets/css/App.css';
import InputBox from '../funcComponents/InputBox'
import Button from '../funcComponents/Button'
import List from '../funcComponents/List'

function App() {
  const [state, setState] = useState(
    {
      tdtask: 'none', //variabile temporanea in cui inserisco ciò che c'è nell'input
      todo: [] //al click del bottone aggiungo al vettore todo la variabile tdtask
    }
  )
  useEffect(
    () => {
      console.log('componente pronto -> didMount')
      console.log('todocambiato', state.todo[state.todo.length - 1])
    },[state.tdtask, state.todo]
  )
  function getTask(task) {
    setState({
      ...state,
      tdtask: task
    })
  }
  function invia() {
    console.log('invia')
    console.log(state.tdtask)
    const templist = state.todo
    templist.push(state.tdtask)
    setState({
      ...state,
      todo: templist
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
