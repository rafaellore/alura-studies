import React from 'react';
import style from './List.module.scss';

export default function List() {
  const tasks = [
    {
      task: 'React',
      time: '02:00:00',
    },
    {
      task: 'JavaScript',
      time: '01:00:00',
    },
  ];

  return (
    <aside className={style.tasks}>
      <h2>Estudos do dia</h2>

      <ul>
        {tasks.map((item, index) => (
          <li key={index} className={style.item}>
            <h3>{item.task}</h3>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
