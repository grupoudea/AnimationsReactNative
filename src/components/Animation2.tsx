import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Animated, Easing } from 'react-native'

const Animation2 = () => {

    const [animation] = useState(new Animated.Value(0));
    const [animation2] = useState(new Animated.Value(0));

    useEffect(() => {

        const spin1 =  Animated.timing(
            animation, {
            toValue: 360,
            easing: Easing.in(Easing.bounce),
            duration: 3000,
            useNativeDriver: false,
        })

        const spin2 = Animated.timing(
            animation2, {
            toValue: 360,
            easing: Easing.in(Easing.bounce),
            duration: 3000,
            useNativeDriver: false,
        })

        const loopAnimation = Animated.loop(
            Animated.parallel([spin1, spin2])
        )

        loopAnimation.start()

    }, [])

    const interpolation = animation.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg'],
    })

    const interpolation2 = animation2.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '-360deg'],
    })

    const interpolationColor = animation.interpolate({
        inputRange: [0, 360],
        outputRange: ['#7ad95e', '#5e99d9'],
    })

    const interpolationColor2 = animation.interpolate({
        inputRange: [0, 360],
        outputRange: ['#be2752', '#9c27be'],
    })

    const animationStyle = {
        transform: [{
            rotateZ: interpolation,
        }]

    }

    const animationStyle2 = {
        transform: [{
            rotate: interpolation2,
        }]

    }


    return (
        <View
            style={styles.container}
        >
            <Animated.View
                style={[
                    styles.box, 
                    animationStyle, 
                    { 
                        backgroundColor: interpolationColor 
                    }
                ]}
            >

            </Animated.View>

            <Animated.View
                style={[
                    styles.box2,
                    animationStyle2, 
                    { 
                        backgroundColor: interpolationColor2 
                    } 
                    
                ]}
            >

            </Animated.View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 0,
        borderColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    box: {
        zIndex: 999,
        width: 100,
        height: 100,
        borderRadius: 20,
        backgroundColor: 'red',
        opacity: 0.8
    },
    box2: {
        position: 'absolute',
        width: 100,
        height: 100,
        borderRadius: 15,
        backgroundColor: 'red',
        transform: [{
            rotateZ: '45deg',

        }],
        opacity: 0.4
    }
});

export default Animation2