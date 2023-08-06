import './App.css';
import Button from 'react-bootstrap/Button'

function App() {
  const title = 'Takuzu';
  const num = 0;

  return (
    <div className="App">
      <h1>{title}</h1>
      <p>a work in progress innit</p>
      <Button variant='primary' href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"> Click Me! </Button>
    </div>
  );
}

export default App;
