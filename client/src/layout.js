import React from 'react'
import Header from './header'
import {Outlet} from "react-router-dom"
import './App.css';

export const Layout = () => {
  return (
    <main>
        <Header/>
        <Outlet/>
    </main>
  );
}

export default Layout;
