import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
// Create an array object to display in the list
// then adding a key property to maintain the list

const friends = [
   // {name: 'Friend #1', key: '1'}, // Adding Key property form array list
    {name: 'Friend #1', age: 20},
    {name: 'Friend #2', age: 21},
    {name: 'Friend #3', age: 22},
    {name: 'Friend #4', age: 23},
    {name: 'Friend #5', age: 24},
    {name: 'Friend #6', age: 25},
    {name: 'Friend #7', age: 26},
    {name: 'Friend #8', age: 27},
    {name: 'Friend #9', age: 28},
];

// Create a flat list component and pass a prop of data
    return (
    <FlatList 
    //horizontal
    //showsHorizontalScrollIndicator={false}
    // keyExtractor={friend => friend.name} // This is defining a key property inside the flatList
    data={friends} 
    renderItem={({ item }) => {
        return <Text style={styles.textStyle}>
            {item.name} - Age {item.age}</Text>
    }}
    />
    );
}

const styles = StyleSheet.create({
textStyle:{
    marginVertical:50
}
});

export default ListScreen;

