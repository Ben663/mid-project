import axios from 'axios'
import { useState, useEffect } from 'react';


const baseUrl = 'https://6376811b81a568fc25008972.mockapi.io/store';

const UseApi = () => {
    console.log(baseUrl);
    const [state, setState] = useState(null)
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const readData = async () => {
        setIsLoading(true);
        try {
            const { data } = await axios.get(baseUrl);
            setState(data);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }
    useEffect(() => {
        readData();
    }, []);
    return [readData, state, error, isLoading]
}
export { UseApi };