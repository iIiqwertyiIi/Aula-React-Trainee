import { GlobalStyle } from './global';
import Header from './components/Header';
import Input from './components/Input';
import Members from './components/Members';
import { useEffect, useState } from 'react';
import Game from './components/Games';
import { api } from './services/api';
import Categories from './components/Categories';

function App() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    api.get('/categories/index').then((response) => {
      console.log(response.data)
      setCategories(response.data)
    })
  }, [])

  const addCategory = async (input) => {
    const response = await api.post('/categories/create', {
      category: {
        name: input
      }
    })
    setCategories([...categories, response.data])
    
    if(response.data){
      alert('categoria adicionada')
    }
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Input addCategory={addCategory} />
      <Categories categories={categories} />
    </>
  );
}

export default App;
