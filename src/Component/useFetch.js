import { useState, useEffect } from 'react'
import paginate from '../utils'
const clientID = `&apiKey=2badc3d2cc4843d8a2572d44f0ded8cd`;
const searchUrl = `https://newsapi.org/v2/everything`;

export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
   const [query, setQuery] = useState("tech");
   

  const getProducts = async () => {
    let url;
    const urlQuery =`?q=${query}`
    if (query) {
      url = `${searchUrl}${urlQuery}${clientID}`
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(paginate(data.articles));
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts()
  }, [])
  return { loading, data }
}
