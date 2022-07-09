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

    setTasks((previousTasks) =>
      previousTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false,
      })),
    );
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Chronometer />
    </div>
  );
}

export default App;
