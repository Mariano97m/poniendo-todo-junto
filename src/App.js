import './App.css';
import PersonCard from './componentes/PersonCard/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard lastName="Doe" firstName="Jane " age={45} hairColor="Black" />
      <PersonCard lastName="Smith" firstName="John " age={88} hairColor="Brown" />
      <PersonCard lastName="Fillmore" firstName="Milland " age={50} hairColor="Brown" />
      <PersonCard lastName="Smith" firstName="Maria " age={62} hairColor="Brown" />
    </div>
  );
}

export default App;
