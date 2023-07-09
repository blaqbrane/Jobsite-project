import {useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
  const[data, setData] = useState([])
  const[isLoading, setIsLoading] = useState(false)
  const[error, setError] = useState(null)

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {...query},
    headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
  
  const fetchData = async() => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
    } catch (error) {
      setError(error);
      alert('There is an error')
      console.log(error)
    }finally{
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const refetch =() => {
    setIsLoading(true)
    fetchData()
  }
  return { data, isLoading, error, refetch};
}
export default useFetch;
// 'X-RapidAPI-Key': '9584ec9828msh370e03ac0127daep123fd0jsn381f27e6dccf',
// 'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'