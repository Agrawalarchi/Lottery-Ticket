import Lottery from './Lottery';
import './App.css';

function App() {
  return (
  <div className='rootBox'>
       <h1 className='mainHeading'> Lottery Game!</h1>
       <Lottery n={5} />
  </div>
  )
}

export default App;
