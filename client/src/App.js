import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <form>
            <input name="firstName" placeholder="First name" type="text" required/>
            <input name="lastName" placeholder="Last name" type="text" required/>
            <input name="email" placeholder="Email" type="email" required/>
            <button>Submit</button>
        </form>
    </div>
  );
}

export default App;
