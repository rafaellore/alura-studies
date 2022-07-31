import Button from '../Button';
import Clock from './Clock';
import style from './Chronometer.module.scss';
import { Itask } from '../../types/task';
import { useEffect, useState } from 'react';
import { timeToSeconds } from '../../common/utils/time';

interface Props {
  selected: Itask | undefined;
    finishTask : () => void
}

export default function Chronometer({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if(contador > 0) {
        setTime(contador - 1);
        return regressiva(contador - 1);
      }

      finishTask();
    }, 1000)
  }
  return (
    <div className={style.chronometer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressiva(time)}>Começar!</Button>
    </div>
  );
}
