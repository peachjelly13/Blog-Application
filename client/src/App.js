import logo from './logo.svg';
import './App.css';
import Post from './post';
import Header from './header';
import Layout from './layout';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Post/>}/>
        <Route path={'/login'} element={<div>login page</div>}/>
        </Route>
       

        
        </Routes>
  );
}

export default App;
