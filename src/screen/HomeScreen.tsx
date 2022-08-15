import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, BackHandler, Alert} from 'react-native';
import MyAppbar from '../components/CustomAppbar';



/**
 * @author
 * @function Chat
 **/
const HomeScreen = () => {

  return (
    <View style={styles.container}>
        <View style={styles.header}>
             <MyAppbar title="Shop" />
        </View>
        <View style={styles.body}>
            <Text style={{color: 'black'}}>Welcome to HomeScreen</Text>
        </View>
    
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flex:1
  },
  body:{
    flex:7,
    justifyContent:'center',
    alignItems:'center'
  }

});
