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
                <Image style={styles.logoImage}
                    source={require("../assets/logo.png")} />
                <Text
                    numberOfLines={2}
                    ellipsizeMode='tail'
                    style={styles.message}
                >Momentum for a healthy lifestyle.</Text>
            </ImageBackground>
        </View>

    );
    // setTimeout(() => { this.props.navigation.navigate("Home") }, 3000);
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
        width: 80,
        height: 80,
        bottom: 130,
    },
    message: {
        color: colors.welcomeMsgTextColor,
        width: "80%",
        fontSize: 30,
        textAlign: 'center',
        textAlignVertical: "center",
        bottom: 100,
        fontWeight: "normal"
    },
})

export default WelcomeScreen;
