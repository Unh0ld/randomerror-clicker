import './App.css';
import Counter from './modules/Counter';
import Darknet from './modules/Darknet';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        Randomerror Clicker Game
      </header>
      <main className="App-main">
        <Counter></Counter>
        <Darknet></Darknet>
      </main>
    </div>
  );
}

export default App;
