import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './components/signup';
import Signin from './components/signin';
import Home from './components/home'
import About from './components/about';
import AddPost from './components/addpost';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

        <Route element={<Signup/>} path='/sign-up'/>
        <Route element={<Signin/>} path='/' />
        <Route element={<Home/>} path='/home' />
        <Route element={<About/>} path='/about' />
        <Route element={<AddPost/>} path='/addpost' />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;