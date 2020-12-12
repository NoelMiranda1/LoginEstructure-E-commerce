import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
const Button = (props) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={props.onPress}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>
          {props.contenido}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: 20,
    backgroundColor: 'blue',
    borderRadius: 10,
    width: '70%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Button;
