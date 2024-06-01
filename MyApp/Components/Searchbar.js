import React from 'react';
import { Pressable } from 'react-native';
import { View, StyleSheet } from 'react-native';
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
        height: 60,
        flexDirection: 'row',
        position:'absolute',
        top:150,

    },

    searchArea:{
        justifyContent: 'space-between',
        alignItems: 'center',
        verticalAlign: 'middle',
        backgroundColor: 'white',
        height: 40,
        width: 250,
        marginLeft:10,
        marginTop:10,
        borderRadius: 15 
    },

    searchIcon:{
        position: 'fixed',
        right: 100,
        bottom: -9
        
    }, 
    searchText: {
        fontSize: 18,
        position: 'absolute',
        bottom: 6,
        right: 160,
    },
    filterArea:{
        backgroundColor: '#F0522F',
        width: 50,
        height: 50,
        marginRight:5,
        marginTop:8,
        borderRadius: 12,
    },
    filterIcon:{
            position: 'fixed',
            left:10,
            top:6,

    }

});


export default Searchbar;