import Component_A from '../Component_A/Component_A';
import Component_B from '../component_B/Component_B';
import Offer from '../Offer/Offer';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Component_A />
      <Offer />
      <Component_B />
    </div>
  );
};

export default App;
