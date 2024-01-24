import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Animated, Easing } from 'react-native'

const Animation3 = () => {

    const [animationY] = useState(new Animated.Value(0));
    const [animationX] = useState(new Animated.Value(-50));

    useEffect(()=>{

        const ani1 = Animated.timing(animationX,{
            toValue: 0,
            duration: 500,
            useNativeDriver: false
        })

        const ani2 = Animated.timing(animationY,{
            toValue: 60,
            duration: 500,
            useNativeDriver: false
        })

        const ani3 = Animated.timing(animationX,{
            toValue: -50,
            duration: 500,
            useNativeDriver: false
        })

        const ani4 = Animated.timing(animationY,{
            toValue: 0,
            duration: 500,
            useNativeDriver: false
        })

        // const ani5 = Animated.timing(animationX,{
        //     toValue: 0,
        //     duration: 500,
        //     useNativeDriver: false
        // })

       const aniFinal =  Animated.sequence([ani1, ani2, ani3, ani4])

       const aniLoop = Animated.loop(aniFinal)

       aniLoop.start()

    }, [])

    const animationStyle = {
        transform: [
            {translateY: animationY},
            {translateX: animationX},
        ]
    }

  return (
    <View style={styles.container}>
        <Animated.View 
            style={[styles.box, animationStyle]}
        >
        </Animated.View>

        <View style={styles.boxt1}></View>
        <View style={styles.boxt2}></View>
        <View style={styles.boxt3}></View>
        <View style={styles.boxt4}></View>
        <View style={styles.boxt5}></View>
        <View style={styles.boxt6}></View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    box: {
        position: 'absolute',
        zIndex: 999,
        width: 10,
        height: 10,
        backgroundColor: 'black',
        transform: [
            {translateX: 0},
            {translateY: 0}
        ]
    },
    boxt1:{
        position: 'absolute',
        width: 10,
        height: 10,
        backgroundColor: '#5e99d9',
        transform: [
            {translateX: -50},
            {translateY: 0}
        ]
    },
    boxt2:{
        position: 'absolute',
        width: 10,
        height: 10,
        backgroundColor: 'red',
        transform: [
            {translateX: -50},
            {translateY: 60}
        ]
    },
    boxt3:{
        position: 'absolute',
        width: 10,
        height: 10,
        backgroundColor: 'blue',
        transform: [
            {translateX: 0},
            {translateY: 60}
        ]
    },
    boxt4:{
        position: 'absolute',
        width: 10,
        height: 10,
        backgroundColor: 'grey',
        transform: [
            {translateX: 0},
            {translateY: 0}
        ]
    },
    boxt5:{
        position: 'absolute',
        zIndex: 999,
        width: 10,
        height: 10,
        backgroundColor: 'green',
        transform: [
            {translateX: -100},
            {translateY: 0}
        ]
    },
    boxt6:{
        position: 'absolute',
        width: 10,
        height: 10,
        backgroundColor: '#ff45d4',
        transform: [
            {translateX: 70},
            {translateY: 0}
        ]
        
    }    

});

export default Animation3