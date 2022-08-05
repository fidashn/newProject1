import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Route path="/home" component={Home} />
      <Link>
      <Route path="/signUp" component={SignUp} />
      <Route exact path="/signIn" component={SignIn} />
      </Link>
      </BrowserRouter>
    </div>
  );
}

export default App;
