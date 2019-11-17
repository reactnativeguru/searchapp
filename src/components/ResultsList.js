import React from "react";
import { 
    View,
    Text,
    StyleSheet, FlatList
} from "react-native";

const ResultsList = ({title, results}) => (
    <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        {/* <Text style={styles.titleStyle}>{results.length}</Text> */}
        <FlatList
            horizontal={true}
            data={results}
            keyExtractor={(result)=> result.id}
            renderItem={({item}) => {
                return <Text>{item.name}</Text>
            }}

        />
    </View>
    )
export default ResultsList;

const styles = StyleSheet.create({
    container: {
 
    },
    titleStyle:{
        fontSize: 18,
        fontWeight: 'bold',
    }
});