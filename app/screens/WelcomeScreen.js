import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import colors from "../config/colors";
import constants from "../config/constants";
import LinearGradient from 'react-native-linear-gradient';

function WelcomeScreen(props) {
    setTimeout(() => { props.navigation.navigate("LoginScreen") }, constants.welcomeDisplayDuration);
    return (
        <View style={styles.container}>
            <ImageBackground
                // resizeMode="contain"
                style={styles.background}
                source={require('../assets/background.png')} >
                <LinearGradient
                    colors={[colors.wcGrdFromColor, colors.wcGrdMidColor, colors.wcGrdToColor]}
                    style={styles.linearGradient}
                    useAngle={true}
                    angle={180}
                    angleCenter={{ x: 0.5, y: 0.5 }} />
                <Image style={styles.logoImage}
                    source={require("../assets/logo.png")} />
                <Text
                    numberOfLines={2}
                    ellipsizeMode='tail'
                    style={styles.message}
                >Momentum for a healthy lifestyle</Text>
            </ImageBackground>
        </View>

    );
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
    logoImage: {
        bottom: 140,
    },
    linearGradient: {
        flex: 1,
        width: "100%",
        height: "100%",
        opacity: 0.9,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    message: {
        color: colors.welcomeMsgTextColor,
        width: "65%",
        fontSize: 25,
        textAlign: 'center',
        textAlignVertical: "center",
        bottom: 110,
        fontWeight: "normal",
        fontFamily: "Montserrat-Regular"
    },
})

export default WelcomeScreen;
