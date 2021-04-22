import React from 'react'
import{ StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import colors from '../styles/colors'
import fonts from '../styles/fonts'


interface ButtonPropos extends TouchableOpacityProps{
    title: string;
}

export function Button({title, ...rest}: ButtonPropos){
    return(
        <TouchableOpacity style={styles.container}>
            <Text 
                style={styles.text}
                {...rest}    
            >
               {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.green,
        height: 56,
        borderRadius:16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.heading
    }
})