import Input from "../../components/Input";
import { api } from "../../services/api";
import { useEffect, useState } from 'react';
import Categories from "../../components/Categories";

const CategoriesPage = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchCategory()
    }, [])

    const fetchCategory = async () => {
      const response = await api.get('/categories/index')
      setCategories(response.data)
    }

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
            <Input addCategory={addCategory} />
            <Categories categories={categories} />
        </>
    );
}

export default CategoriesPage