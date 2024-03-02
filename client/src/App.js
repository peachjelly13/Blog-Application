
import './App.css';
import Layout from './Layout';
import { IndexPage } from './Pages/IndexPage';
import LoginPage from './Pages/LoginPage';
import Post from './Post';
import { Header } from './Header';
import {Routes,Route} from "react-router-dom"
import RegisterPage from './Pages/RegisterPage';

function App() {
  return (
      <Routes>
        <Route path={'/'} element={<Layout/>}>
        <Route index element = {<IndexPage/>}/>
        <Route path={'/login'} element={<LoginPage/>}/>
        <Route path={'/register'} element={<RegisterPage/>}/>
        </Route>
      </Routes>
  );
}

export default App;
