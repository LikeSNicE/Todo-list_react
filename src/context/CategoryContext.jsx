/* eslint-disable react-refresh/only-export-components */
import { createContext,useContext, useState, useEffect } from "react";
import api from "../api/api";

const CategoryContext = createContext();

export const useCategory = () => useContext(CategoryContext);

export const CategoryProvider = ({children}) => {

  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
    } catch (error) {
      console.log(error.message)
    }
  }

  const addCategory = async (name) => {
    try {
      const {data} = await api.post('/categories', {name})
      setCategories((prev) => [...prev, data])
    } catch (error) {
       console.error("Ошибка при добавлении категории:", error.message);
       throw error;
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <CategoryContext.Provider value={{categories, addCategory}}>
      {children}
    </CategoryContext.Provider>
  )
}
