import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header bg-success">
        <h1 className='display-3 text center p-3 fw-bold text-light'>SokoGarden-Buy and Sell online</h1>
      </header>
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
