import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Animated, Easing } from 'react-native'

const Animation1 = () => {

    const [animation] = useState(new Animated.Value(0));

    useEffect(() => { 
        Animated.timing(
            animation, {
                toValue: 450,
                easing: Easing.back(2),
                duration: 1000,
                useNativeDriver: false,
            }
        ).start();

    }, [])


  return (
    <Animated.View
        style={{
            ...styles.box,
            width: animation,
            height: animation,
             
        }}
    >
       
    </Animated.View>
  )
}

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    }
});

export default Animation1