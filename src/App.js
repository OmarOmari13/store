import { Routes, Route } from 'react-router-dom';
import Main from './components/main/main.component';
import Navigation from './routes/navigation/navigation.component';
import './App.css';
import Home from './routes/home/home.component';
import Path from './routes/path/path.component';

import SignUp from './components/signUp/signup.component';
import SignIn from './components/signin/signin.component';


const App =()=>{   
    return (
    // <div className="App">
    //   <h1 className='app-title'>Hello to the store</h1>
    //   <Main/>

    // </div>
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Main/>}/>
        <Route path='signup' element={<SignUp />}/>
        <Route path='signin' element={<SignIn/>}/>
        <Route path='home' element={<Path />}>
        <Route index element={<Home/>}/>
        </Route>
      </Route>
    </Routes>

  );
}


export default App;
