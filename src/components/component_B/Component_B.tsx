import { SyntheticEvent, useContext } from 'react';
import { Context } from '../../index';

const Component_B = () => {
  const store = useContext(Context);

  const onChangeSelectHandler = (e: SyntheticEvent) => {
    store.setBuy((e.target as HTMLSelectElement).value);
  };
  return (
    <div className='b'>
      <h4>Хочет клиент</h4>
      <select onChange={onChangeSelectHandler}>
        <option value='рубли'>рубли</option>
        <option value='доллары'>доллары</option>
        <option value='евро'>евро</option>
      </select>
    </div>
  );
};

export default Component_B;
