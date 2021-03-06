import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = () => {
  return (<View>
    <Text style={styles.text}>Hi there!</Text>
    <Button 
    onPress={() => console.log('Button pressed')}
    title='Go to component demo'></Button>
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
