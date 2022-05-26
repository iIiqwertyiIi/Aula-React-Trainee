import { GlobalStyle } from './global';
import Header from './components/Header';
import Input from './components/Input';
import Members from './components/Members';
import { useEffect, useState } from 'react';
import Game from './components/Games';
import { api } from './services/api';
import Categories from './components/Categories';
import { BrowserRouter, Routes } from 'react-router-dom';
import MyRoutes from './routes';

function App() {

  // const [categories, setCategories] = useState([])
  // const [games, setGames] = useState([])

  // useEffect(() => {
  //   fetchCategory()
  //   fetchGames()
  // }, [])

  // const fetchCategory = async () => {
  //   const response = await api.get('/categories/index')
  //   setCategories(response.data)
  // }

  // const fetchGames = async () => {
  //   const response = await api.get('/games/index')
  //   setGames(response.data)
  // }

  // const addCategory = async (input) => {
  //   const response = await api.post('/categories/create', {
  //     category: {
  //       name: input
  //     }
  //   })
  //   setCategories([...categories, response.data])
    
  //   if(response.data){
  //     alert('categoria adicionada')
  //   }
  // }

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <MyRoutes />
    </ BrowserRouter>
  );
}

export default App;
