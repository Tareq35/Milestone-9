import logo from './logo.svg';
import './App.css';
import { Button, Spinner } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <button>Plain Button</button>
      <Button variant='danger'>My Button</Button>
      <Spinner animation='grow' variant='danger'></Spinner>
    </div>
  );
}

export default App;
