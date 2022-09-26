import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/navbar'
import MoovesList from './pages/mooves-list'

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <MoovesList></MoovesList>
    </div>
  );
}

export default App;
