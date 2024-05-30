import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Image } from 'react-native';


const Upperframe = () => {
    return(
        <View style={styles.container}>
            <View style={styles.textArea}>
            <Text style={styles.welcomeMessage}>
                Hello, Devs
            </Text>

            <Text style={styles.availTasks}> 
                14 Tasks today
            </Text>

            </View>
            <View style={styles.profileBox}>

            <Image style={styles.person} source={require('./person.png')}/>

            </View>

            
        </View>



    )
};

const styles = StyleSheet.create({
    container:{
        borderColor: 'white',
        borderWidth: 0.5,
        width:'95%',
        height: '8%',
        flexDirection: 'row',
        position:'relative',
        top:-328,
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,

    },
    textArea : {
        flexDirection: 'column',
    },
    welcomeMessage: {
        fontSize: 35,
        paddingLeft: 7
    },
    availTasks: {
        fontSize: 15,
        paddingLeft: 7
    },
    profileBox :{
        backgroundColor: 'white',
        width: 65,
        position: 'relative',
        top: 0,
        left: 145,
        borderRadius: 50
    },
    person : {
        resizeMode: 'contain',
        width: 63,
        height: 63,
        position: 'relative',
        top: -3,
        left: 0,
    }


});



export default Upperframe;