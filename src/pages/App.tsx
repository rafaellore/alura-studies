import { useState } from 'react';
import Chronometer from '../components/Chronometer';
import Form from '../components/Form';
import List from '../components/List';
import { Itask } from '../types/task';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<Itask[] | []>([]);
  const [selected, setSelected] = useState<Itask>();

  function selectTask(selectedTask: Itask) {
    setSelected(selectedTask);

      setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })))
  }


  function finishTask() {
    if(selected) {
      setSelected(undefined);
      setTasks(tarefasAnteriores => tarefasAnteriores.map(task => {
        if(task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Chronometer selected={selected} finishTask={finishTask}/>
    </div>
  );
}

export default App;
