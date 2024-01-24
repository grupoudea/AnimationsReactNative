import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

interface RippleProps {
    style?: StyleProp<ViewStyle>;
    onTap?: () => void;
    children?: any
}

const Rippple = ({style, onTap, children}: RippleProps) => {
  return (
    <View style={style}>
        {children}
    </View>
    
  )
}

export default Rippple