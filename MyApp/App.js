import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View} from 'react-native';
import Upperframe from './Components/Upperframe.js';
import Searchbar from './Components/Searchbar.js';
import Categ from './Components/Categories.js';
import OngoingSec from './Components/ongoingSection.js';

export default function App() {
  return (
      <ScrollView style={styles.container}>
      <Upperframe/>

      <Searchbar/>

      <Text style = {{ fontWeight:'bold', position:'relative', bottom: 350, right:-15, fontSize: 30}}>
            Categories
        </Text>
      <Categ/>
      <OngoingSec/>
      <StatusBar style="auto" />
      
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    
  },
});
