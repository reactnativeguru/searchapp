import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../../components/SearchBar';
import yelp from './api/yelp';
const SearchScreen = props => {
  // create piece of state for the SearchBar component

  const [term, setTerm] = useState('');
  const [results, setResults] = useState([])

    const searchApi = async () => {
       const response = await yelp.get('/search', { // params for request
           params : {
               limit: 50,
               term: term,
               location: 'milton keynes'
           }
       })
      setResults(response.data.businesses) 

    }



  return (
    <View style={styles.container}>
      <SearchBar
        onTermSubmit={searchApi}
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
       />
      <Text>We have found {results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {}
});

export default SearchScreen;
