import React from 'react';
import { SectionList, Text, StyleSheet, View } from 'react-native';

const ACTIVITIES = [
  {
    title: 'Ongoing',
    data: ['Mobile App Development', 'Web Development', 'Push Ups',
    'Java Tuts', 'Lectures', 'Calculator Event', 'Church Service','Youth Gathering',
    'Course Advisor Meeting', 'Worship Service', 'Resolution Making', 'Bill Drafting', 'Assignment Completion',
    'Live Ceremony', 'Fun Games'
],
  },
  
];

const Activity = ({ title }) => (
    <View style={(styles.activity)} >
        <Text style={styles.title}>{title}</Text>
    </View>
);

const OngoingSec = () => {
  return (
    <SectionList style={(styles.SectionList)}
      sections={ACTIVITIES}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Activity title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 23,
    paddingTop:30,
    fontWeight:'450'

  },
  activity: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'flex-start',
    position:'relative',
    left: 33,
    marginBottom: 10,
    marginRight:344,
    backgroundColor:'white',
    width: 320,
    height: 100,
    paddingBottom:10,
    borderRadius: 20,
    paddingLeft:10,
    borderColor:'blue',
    borderWidth: 0.5
  },
  SectionList:{
    position:'relative',
    top: -350,
    height:'100%',

  },
  header:{
    fontSize:30,
    fontWeight:'bold',
    position:'relative',
    right: -25,
    bottom: 5
  }


});

export default OngoingSec;
