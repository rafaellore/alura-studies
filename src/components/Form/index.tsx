import React from 'react';
import { Itask } from '../../types/task';
import Button from '../Button';
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid';

export default class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<Itask[]>>;
}> {
  state = {
    task: '',
    time: '00:00',
  };

  handleAddTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTasks((tasks) => [
      ...tasks,
      { ...this.state, selected: false, completed: false, id: uuidv4() },
    ]);
    this.setState({
      task: '',
      time: '00:00',
    });
  }

  render() {
    return (
      <form className={style.newTask} onSubmit={this.handleAddTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar"
            required
            value={this.state.task}
            onChange={(event) =>
              this.setState({ ...this.state, task: event.target.value })
            }
          />
        </div>

        <div className={style.inputContainer}>
          <label>Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
            value={this.state.time}
            onChange={(event) =>
              this.setState({ ...this.state, time: event.target.value })
            }
          />
        </div>

        <Button type="submit">Adicionar</Button>
      </form>
    );
  }
}
