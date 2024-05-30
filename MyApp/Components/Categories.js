import React from 'react';
import { Image, ScrollView, View, Text, StyleSheet } from 'react-native';

const Categories = [
    { title: 'Exercise', tasks: 12, image: require('./youngman.png') },
    { title: 'Study', tasks: 12,  image: require('./youngwoman.png')  },
    { title: 'Cook', tasks: 11 },
    { title: 'Code', tasks: 30 },
    { title: 'Browse', tasks: 1 },
    { title: 'Bath', tasks: 2 },
    { title: 'Visit', tasks: 3 },
    { title: 'Market', tasks: 1 },
    { title: 'Travel', tasks: 4 }
]

const CategoryCard = ({ title, tasks, image }) => (
    <View style={styles.Card}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.tasks}>{tasks} Tasks</Text>
    </View>
);

const Categ = () => (
    <ScrollView horizontal={true} style={styles.container}>
        {Categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
        ))}
    </ScrollView>
);

const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'relative',
        height: 350,
        bottom: 350,
        marginBottom: 50
       
    },
    Card:{
        width: 200,
        height: 290,
        borderRadius: 30,
        borderBottomEndRadius: 10,
        backgroundColor: '#F5F5F5',
        margin: 10,
        padding: 10,
    },
    image: {
        resizeMode:'cover',
        width: '70%', 
        height: '60%', 
        marginLeft:50,
        marginBottom:10
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        position:'relative',
        bottom: 165
    },
    tasks: {
        fontSize: 14,
        position:'relative',
        bottom: 165
    },
});

export default Categ;
