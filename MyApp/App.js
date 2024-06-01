import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, SectionList} from 'react-native';
import Upperframe from './Components/Upperframe.js';
import Searchbar from './Components/Searchbar.js';
import Categ from './Components/Categories.js';
import OngoingSec from './Components/ongoingSection.js';

export default function App() {
  return (
      <View style={styles.container}>
      <Upperframe/>

      <Searchbar/>

      <Text style = {{ fontWeight:'bold', position:'relative', bottom: 175, right:-15, fontSize: 26}}>
            Categories
        </Text>
      <Categ/>

      <OngoingSec/>

      
      <StatusBar style="auto" />
      
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    
  },
});
