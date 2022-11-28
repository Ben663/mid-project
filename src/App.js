
import Navbar from './Components/Nav/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Product from './Pages/Product';
import ProductItem from './Pages/ProductItem';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Home />
			<Footer />
			<Routes>
				<Route
					path='/Proudct'
					element={<Product />}
				/>
				<Route
					path='/ProductItem'
					element={<ProductItem />}
				/>
			</Routes>
		</div>
	);
}

export default App;
/*
import React , { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        const { data } = await axios.get(url);
        setData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchData();
  }, [url]);
  return [ data, error, loading];
}
export default useFetch;


const [data, error, loading] = useFetch(
    "https://6374a94848dfab73a4e4fc2d.mockapi.io/events"
  );

import useFetch from "../hooks/useFetch";

*/
