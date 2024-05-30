import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Upperframe from './Components/Upperframe.js';
import Searchbar from './Components/Searchbar.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Upperframe/>

      <Searchbar/>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
