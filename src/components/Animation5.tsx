import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Animated, Easing } from 'react-native'
import Rippple from './Rippple';

const Animation5 = () => {


  return (
    <View style={styles.container}>
      <Rippple style={styles.ripple} >
        <Text style={{ fontSize: 25 }}>Tap</Text>
      </Rippple>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'

  },
  ripple: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    backgroundColor: 'white',
    shadowOpacity: 0.8,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 20,
    elevation: 2
  }

});


export default Animation5