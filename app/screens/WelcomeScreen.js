import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import colors from "../config/colors";
import LinearGradient from 'react-native-linear-gradient';

function WelcomeScreen(props) {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.background}
                source={require('../assets/background.jpg')} >
                <LinearGradient
                    colors={[colors.wcGrdFromColor, colors.wcGrdMidColor, colors.wcGrdToColor]}
                    style={styles.linearGradient}
                    useAngle={true}
                    angle={180}
                    angleCenter={{ x: 0.5, y: 0.5 }} />
            </ImageBackground>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    linearGradient: {
        flex: 1,
        width: "100%",
        height: "100%",
        opacity: 0.8,
    },
})

export default WelcomeScreen;
