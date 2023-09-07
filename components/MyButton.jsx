import React from 'react';
import { View, StyleSheet } from 'react-native';

const MyButton = ({bgColor, bRadius, customHeight}) => {

  return (
    <View>

        <View style={{...styles.view1, backgroundColor: bgColor, borderRadius : bRadius, height : customHeight}}>
        
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    margin: 10,
    padding: 20,
    width: 100,
   // height : 50,
   // backgroundColor: 'lightblue',
    //borderRadius : 10, 
    shadowColor: 'gray',
    shadowOffset : {width: 4, height:4},
    shadowOpacity: 0.5,
    shadowRadius: 4
  },


});

export default MyButton;
