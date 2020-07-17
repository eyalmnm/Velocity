import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import colors from "../config/colors";
import LinearGradient from 'react-native-linear-gradient';

class LoginScreen extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.background}
                    source={require('../assets/background.png')} >
                    <LinearGradient
                        colors={[colors.lgGrdFromColor, colors.lgGrdMidColor, colors.lgGrdToColor]}
                        style={styles.linearGradient}
                        useAngle={true}
                        angle={0}
                        angleCenter={{ x: 0.5, y: 0.5 }} />
                    <Image style={styles.logoImage}
                        source={require("../assets/logo.png")} />
                </ImageBackground>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    linearGradient: {
        flex: 1,
        width: "100%",
        height: "100%",
        opacity: 0.85,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    logoImage: {
        position: "absolute",
        top: 60,
    },
})

export default LoginScreen;