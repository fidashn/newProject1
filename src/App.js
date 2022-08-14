import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter >
      <Route path="/home" component={Home} />
      <Route path="/signUp" component={SignUp} />
      <Route exact path="/signIn" component={SignIn} />
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
