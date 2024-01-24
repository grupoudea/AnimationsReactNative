import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Animated, Easing } from 'react-native' 

const Animation4 = () => {
    const [animation1] = useState(new Animated.Value(0));
    const [animation2] = useState(new Animated.Value(1));

    useEffect(()=>{
        const sequence = Animated.sequence([
            Animated.timing(animation1, {
                toValue: 300,
                duration: 1000,
                useNativeDriver: false
            }),
            Animated.spring(animation2, {
                toValue: 10,
                useNativeDriver: false
            }),
            Animated.spring(animation2, {
                toValue: 1,
                useNativeDriver: false
            }),
            Animated.timing(animation1, {
                toValue: 600,
                duration: 1000,
                useNativeDriver: false
            }),

        ])

        sequence.start()


    },[])

    const animationStyle = {
        transform: [
            {translateY: animation1},
            {scale: animation2}
        ]
    }


  return (
    <View>
        <Animated.View
            style={[
                styles.box,
                animationStyle
            ]}
        >


        </Animated.View>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {

    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    }   

});


export default Animation4