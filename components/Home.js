import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

export default function Home({navigation}) {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Welcome to our Home Screen</Text>
      <Pressable
        style={styles.press}
        onPress={() => navigation.navigate('Deliveroo')}>
        <Text style={styles.text}>Deliveroo</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    margin: 'auto',
    top: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  press: {
    marginTop: 20,
    backgroundColor: '#05C6B7',
    padding: 20,
    width: 180,
    borderRadius: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});
