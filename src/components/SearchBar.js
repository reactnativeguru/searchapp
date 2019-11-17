import React from "react";
import {Feather} from '@expo/vector-icons'
import { 
    View,
    Text,
    StyleSheet,
    TextInput
} from "react-native";

const SearchBar = ({term, onTermChange, onTermSubmit}) => (
    <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle}/>
        <TextInput
        autoCapitalize="none"
        autoCorrect={false} 
        style={styles.inputStyle}
        placeholder="Search"
        value={term}   
        onChangeText={newTerm =>onTermChange(newTerm)} 
        onEndEditing={onTermSubmit}
        // onEndEditing={() => onTermSubmit()}
        />

    </View>
    )

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
       backgroundColor: '#F0EEEE',
       height: 50,
       borderRadius: 5,
       marginHorizontal: 15,
       flexDirection: 'row'
    },
    inputStyle:{
        flex: 1,
        fontSize: 18,
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
});

export default SearchBar;
