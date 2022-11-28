import { useState } from "react";
import axios from 'axios'

const baseUrl = 'https://6376811b81a568fc25008972.mockapi.io/store';

const UseFetch = () => {
    const [state, setState] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const Create = async (obj) => {
        setIsLoading(true);
        try {
            const { data } = await axios.post(baseUrl, obj);
            setState(data)
        } catch (error) {
            setError(error)
        }
        setIsLoading(false);
    }
    const Update = async (obj) => {
        setIsLoading(true);
        try {
            const { data } = await axios.put(`${baseUrl}/${obj.id}`, obj);
            setState(data);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }
    const Delete = async (id) => {
        setIsLoading(true);
        try {
            const { data } = await axios.delete(`${baseUrl}/${id}`);
            setState(data);
        } catch (error) {
            setError(error)
        }
        setIsLoading(false);
    }
    const ReadById = async (id) => {
        setIsLoading(true);
        try {
            const { data } = await axios.get(`${baseUrl}/${id}`);
            setState(data);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }
    return [state, error, isLoading, Create, Update, Delete, ReadById];
}

export { UseFetch };