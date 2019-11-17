import {useState, useEffect} from 'react';
import yelp from '../screens/SearchScreen/api/yelp'

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage,  setErrorMessage] = useState('')
  
    const searchApi = async  (searchTerm) => {
      try {
        const response = await yelp.get('/search', {
          // params for request
          params: {
            limit: 50,
            term: searchTerm,
            location: 'milton keynes'
          }
        });
        setResults(response.data.businesses);
      } catch (err) {
        console.log(err);
        setErrorMessage('Something went wrong')
      }
    };
    // useEffect hook, like componentDidMount, empty brackets array means function called just once when component initially rendered, if value put into array component re   rendered when that value changes
    useEffect(() => {
        searchApi('chinese')
    }, [])

    return [searchApi, results, errorMessage]
  
}