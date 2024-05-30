import React from 'react';
import { Pressable } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native';


const Searchbar = () => {
    return(
        <View style={styles.container}>
            <View style= {styles.searchArea}>
                <TextInput style={styles.searchText} 
                placeholder='Search' />
                <Pressable>
                <Icon style={styles.searchIcon} name="search" size={20} color="black" />
                </Pressable>
               

            </View>

            <View style={styles.filterArea}>
                <Pressable>
                    <Icon style={styles.filterIcon} name="filter" size={37} color="white" />
                </Pressable>
            
            </View>

     



        </View>
    )
};


const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-between',
        alignItems: 'center',
        width:'95%',
        height: '6%',
        flexDirection: 'row',
        position:'relative',
        top:-295,

    },

    searchArea:{
        justifyContent: 'space-between',
        alignItems: 'center',
        verticalAlign: 'middle',
        backgroundColor: 'white',
        height: 35,
        width: 240,
        marginLeft:5,
        borderRadius: 15 
    },

    searchIcon:{
        position: 'fixed',
        right: 100,
        bottom: 15
        
    }, 
    searchText: {
        fontSize: 20,
        position: 'relative',
        bottom: -6,
        right: 55,
        
    },
    filterArea:{
        backgroundColor: '#F0522F',
        width: 50,
        height: '97%',
        marginRight:20,
        borderRadius: 12,
    },
    filterIcon:{
            position: 'fixed',
            left:10,
            top:6,

    }

});


export default Searchbar;