import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.textStyles}>App Música</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        backgroundColor:'rgb(84,50,168)',
        padding:20,
        width:'100%'
    },
    textStyles:{
        textAlign:'center', 
        fontSize:30, 
        color:'white'
    }
});

export default Header;