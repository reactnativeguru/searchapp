import React, { useState,  } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../../components/SearchBar';
import useResults from '../../hooks/useResults'
import ResultsList from '../../components/ResultsList';
const SearchScreen = props => {
  // create piece of state for the SearchBar component
  const [term, setTerm] = useState('');
  // use custom hook
  const [searchApi, results, errorMessage] = useResults();
  console.log(results);

  const filterResultsByPrice = (price) => {
       return results.filter(result => {
           return result.price === price
       })
  }
 
  return ( 
    <View style={styles.container}>
      <SearchBar
        onTermSubmit={searchApi}
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
      />
      <Text>We have found {results.length}</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ResultsList results={filterResultsByPrice('£')} title="Cost Effective"/>
      <ResultsList results={filterResultsByPrice('££')} title="Average Price "/>
      <ResultsList results={filterResultsByPrice('£££')} title="Top Price"/>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {}
});

export default SearchScreen;
