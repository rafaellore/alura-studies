import { useState } from 'react';
import Item from './Item';
import style from './List.module.scss';

export default function List() {
  const [list, setList] = useState([
    {
      task: 'React',
      time: '02:00:00',
    },
    {
      task: 'Javascript',
      time: '01:00:00',
    },
    {
      task: 'Typescript',
      time: '03:00:00',
    },
  ]);

  return (
    <aside className={style.tasks}>
      <h2
        onClick={() =>
          setList([...list, { task: 'Estudar estado', time: '05:00:00' }])
        }
      >
        Estudos do dia
      </h2>

      <ul>
        {list.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}
