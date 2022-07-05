import Chronometer from '../components/Chronometer';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Chronometer/>
    </div>
  );
}

export default App;
