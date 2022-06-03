import { useState, useEffect } from 'react';
import axios from 'axios';

const axiosFetch = (url) => {
    axios.get(url).then(res => {
        console.log(res.data)
        return res.data
    })
}
const useFetch = (url) => {
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() =>{
        fetch(url)
        .then(res => {
            if(!res.ok) {
                throw Error("could not fetch the data for that resource")
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setStatus('getting');
            setError(null);
        })
        .catch(err => {
            setStatus('Ruh Roh')
            setError(err.message)
        })
    }, [url]);
    // console.log(data)

    return {data, error, status}
};

export default axiosFetch;