import './App.css';
import NavigationBar from './components/navbar'
import MovesList from './pages/mooves-list'

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <MovesList></MovesList>
    </div>
  );
}

export default App;
