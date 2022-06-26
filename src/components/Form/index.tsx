import React from 'react';
import Button from '../Button';

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label>Tarefa</label>
          <input type="text" />
        </div>

        <div>
          <label>Tempo</label>
          <input type="time" />
        </div>

        <Button>Botão</Button>
      </form>
    );
  }
}
