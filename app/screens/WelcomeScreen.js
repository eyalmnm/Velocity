import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import colors from "../config/colors";
import constants from "../config/constants";
import LinearGradient from 'react-native-linear-gradient';
import DefaultPreference from 'react-native-default-preference';

// Ref: https://github.com/kevinresol/react-native-default-preference


function WelcomeScreen(props) {
    console.log('In Welcome Screen');
    let token = null;
    let type = null;
    DefaultPreference.get(constants.loginToken).then(function (loginToken) {
        console.log('*** My Key token : ' + loginToken);
        if (loginTokeb !== undefined && loginToken != null) {
            token = loginToken;
            DefaultPreference.get(constants.loginType).then(function (loginType) {
                if (loginType != null) {
                    type = loginToken;
                } else {
                    DefaultPreference.clearMultiple([container.loginToken, constants.loginType]);
                    token = null;
                    type = null;
                }
            });

        }
    });
    console.log('My Key token : ' + JSON.stringify(token));
    setTimeout(() => {
        (token == null || type == null) ?
            props.navigation.navigate("LoginScreen") :
            props.navigation.navigate("DiscoverScreen");
    }, constants.welcomeDisplayDuration);
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
        width: 180,
        height: 35
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
