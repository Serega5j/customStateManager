import './style.css';

const Offer = () => {
  return (
    <div className='offer'>
      <p>Предложения магазина</p>
      <table className='wrap'>
        <thead>
          <tr>
            <th>клиент предлагает</th>
            <th>курс</th>
            <th>Клиент хочет</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>предлагаю</td>
            <td></td>
            <td>хочу</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Offer;
